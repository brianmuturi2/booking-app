import { Component, OnDestroy, OnInit } from '@angular/core';
import {AuthService} from './auth/services/auth.service';
import {Router} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy{
  private authSub: Subscription;
  private previousAuthState = false;

  constructor(private authService: AuthService,
              private router: Router) {}

  ngOnInit() {
    this.authSub = this.authService.isAuthenticated.subscribe(isAuth => {
      if (!isAuth && this.previousAuthState !== isAuth) {
        this.router.navigateByUrl('/auth');
      }
      this.previousAuthState = isAuth;
    });
  }

  logOut() {
    this.authService.logOut();
    this.router.navigate(['/auth']);
  }

  ngOnDestroy() {
    if (this.authSub) {
      this.authSub.unsubscribe();
    }
  }
}
