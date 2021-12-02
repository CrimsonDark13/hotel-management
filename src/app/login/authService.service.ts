import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';

interface User {
  idToken: string;
  token: String;
}

@Injectable()
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string) {
    this.http
      .post<User>('http://localhost:3000/hotel/api/v1/auth/login', {
        username,
        password,
      })
      .subscribe((response) => {
        if (response.idToken) {
          this.router.navigate(['/dashboard/bookings']);
        }
        localStorage.setItem('id_token', response.idToken);
      });
  }

  //   private setSession(authResult: {
  //     expiresIn: moment.DurationInputArg1;
  //     idToken: string;
  //   }) {
  //     const expiresAt = moment().add(authResult.expiresIn, 'second');

  //     localStorage.setItem('id_token', authResult.idToken);
  //     localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  //   }

  logout() {
    localStorage.removeItem('id_token');
  }

  //   public isLoggedIn() {
  //     return moment().isBefore(this.getExpiration());
  //   }

  //   isLoggedOut() {
  //     return !this.isLoggedIn();
  //   }

  //   getExpiration() {
  //     const expiration = localStorage.getItem('expires_at');
  //     if (expiration != null) {
  //       const expiresAt = JSON.parse(expiration);
  //     }
  //     return moment(expiresAt);
  //   }
}
