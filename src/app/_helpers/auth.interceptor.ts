import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authSer: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    if (this.authSer.isLogin()) {
      const authToken = this.authSer.getAuthorizationToken();
      console.log(authToken);
      request = request.clone({
          headers: request.headers.set('Authorization', 'Bearer ' + authToken)
      });
    }
    
    return next.handle(request);
  }
}
