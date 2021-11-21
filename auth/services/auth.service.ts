import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import {keys, urls} from 'src/environments/environment';
import {User} from '../models/user.model';

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

  private _user = new BehaviorSubject<User>(null);

  constructor(private httpClient: HttpClient) { }

  signUp(user) {
    return this.httpClient.post<AuthResData>(`${urls.signUp}${keys.firebase}`, {...user, returnSecureToken: true}).pipe(tap(userData => {
      this.setUserData.call(this, userData);
    }));
  }

  logIn(user) {
    return this.httpClient.post<AuthResData>(`${urls.signIn}${keys.firebase}`, {...user, returnSecureToken: true}).pipe(tap(userData => {
      this.setUserData.call(this, userData);
    }));
  }

  logOut() {
    this._user.next(null);
  }

  get isAuthenticated() {
    return this._user.asObservable().pipe(map(user => {
      if (user) {
        return !!user.token;
      } return false;
    }));
  }

  get userId() {
    return this._user.asObservable().pipe(map(user => {
      if (user) {
        return user.userId;
      } return null;
    }));
  }

  private setUserData(userData: AuthResData) {
      const expiryTime = new Date(new Date().getTime() + (+userData.expiresIn * 1000));
      this._user.next(new User(userData.localId, userData.email, userData.idToken, expiryTime));
  }
}
