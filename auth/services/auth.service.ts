import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {keys, urls} from 'src/environments/environment';

interface AuthResData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isAuthenticated = false;
  private _userId = '';

  constructor(private httpClient: HttpClient) { }

  signUp(user) {
    return this.httpClient.post<AuthResData>(`${urls.signUp}${keys.firebase}`, {...user, returnSecureToken: true});
  }

  logIn(user) {
    return this.httpClient.post<AuthResData>(`${urls.signIn}${keys.firebase}`, {...user, returnSecureToken: true});
    this._isAuthenticated = true;
  }

  logOut() {
    this._isAuthenticated = false;
  }

  get isAuthenticated() {
    return this._isAuthenticated;
  }

  get userId() {
    return this._userId;
  }

  set isAuthenticated(val) {
    this._isAuthenticated = val;
  }
}
