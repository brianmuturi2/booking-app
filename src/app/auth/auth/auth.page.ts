import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {AlertController, LoadingController} from '@ionic/angular';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.page.html',
    styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

    isLogin = true;
    authForm: FormGroup;

    constructor(private authService: AuthService,
                private router: Router,
                private loadingController: LoadingController,
                private alertController: AlertController) {
    }

    ngOnInit() {
        this.authForm = new FormGroup({
            name: new FormControl(null, {
                updateOn: 'blur',
                validators: [Validators.required]
            }),
            email: new FormControl(null, {
                updateOn: 'blur',
                validators: [Validators.required, Validators.email]
            }),
            password: new FormControl(null, {
                updateOn: 'blur',
                validators: [Validators.required, Validators.minLength(6)]
            })
        });
    }

    logout() {
        this.authService.logOut();
    }

    toggleIsLogin() {
        this.isLogin = !this.isLogin;
        this.authForm.reset();
    }

    async authenticate() {
        const loading = await this.loadingController.create({
            keyboardClose: true,
            message: this.isLogin ? 'Login you in...' : 'Signing you up...',
        });
        await loading.present();
        if (this.isLogin) {
            this.authService.logIn({
                email: this.authForm.value.email,
                password: this.authForm.value.password
            }).subscribe(res => {
                console.log('sign in response is ', res);
                loading.dismiss();
                this.router.navigate(['/places/discover']);
            }, err => {
                loading.dismiss();
                console.log('sign in response is error', err);
                const alert = async () => {
                    const alertModal = await this.alertController.create({
                        message: 'Sorry, we could not log you in!'
                    });
                    alertModal.present();
                };
                alert();
            });
        } else {
            this.authService.signUp(this.authForm.value).subscribe(res => {
                console.log('sign up response is ', res);
                loading.dismiss();
                this.router.navigate(['/places/discover']);
            }, err => {
                loading.dismiss();
                console.log('sign up response is error', err);
                const alert = async () => {
                    const alertModal = await this.alertController.create({
                        message: 'Sorry, we could not sign you up!'
                    });
                    alertModal.present();
                };
                alert();
            });
        }
    }

    disableSubmit() {
        if (this.isLogin && (this.authForm.get('email').invalid || this.authForm.get('password').invalid)) {
            return true;
        }
        if (!this.isLogin && this.authForm.invalid) {
            return true;
        }
        return false;
    }

}
