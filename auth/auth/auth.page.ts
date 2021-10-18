import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {LoadingController} from '@ionic/angular';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  isLogin = true;

  constructor(private authService: AuthService,
              private router: Router,
              private loadingController: LoadingController) { }

  ngOnInit() {
  }

  login() {
    this.authService.logIn();

    this.loadingController.create({
      duration: 5500,
      keyboardClose: true,
      message: 'Login you in...',
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

  toggleisLogin() {
    this.isLogin = !this.isLogin;
  }

  onSubmit(form: NgForm) {
    let email = '';
    let password = '';
    if (!form.valid) {
      return;
    } else {
      email = form.value.email;
      password = form.value.password;
    }

    if (this.isLogin) {
      // send request to login
    } else {
      // send request to sign up
    }
  }

}
