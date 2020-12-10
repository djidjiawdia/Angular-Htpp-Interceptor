import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(data) {
    return this.http.post(`${environment.url}/login_check`, data)
      .pipe(
        map(currentUser => {
          // console.log('Pipe: ', currentUser);
          if (currentUser) {
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
          }
        }),
      );
  }

  allUsers(): Observable<any> {
    return this.http.get(`${environment.url}/admin/users`);
  }

  isLogin() {
    if (localStorage.getItem('currentUser')) {
      return true;
    }
    return false;
  }

  getAuthorizationToken() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log(currentUser);
    return currentUser.token;
  }

}
