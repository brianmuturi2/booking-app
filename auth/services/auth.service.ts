import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isAuthenticated = true;

  constructor() { }

  logIn() {
    this._isAuthenticated = true;
  }

  logOut() {
    this._isAuthenticated = false;
  }

  get isAuthenticated() {
    return this._isAuthenticated;
  }
}
