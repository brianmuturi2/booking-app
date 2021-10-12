import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor(private authService: AuthService,
              private router: Router,
              private loadingController: LoadingController) { }

  ngOnInit() {
  }

  login() {
    this.authService.logIn();

    this.loadingController.create({
      keyboardClose: true,
      message: 'Login you in...',
      duration: 5500
    }).then(res => {
      res.present();
      res.dismiss();
      setTimeout(()=>{
        this.router.navigate(['/places/discover']);
      }, 5500);
    });
  }

  logout() {
    this.authService.logOut();
  }

}
