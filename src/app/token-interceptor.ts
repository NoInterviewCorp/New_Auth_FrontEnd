import { Injectable } from '@angular/core';
import {HttpRequest,HttpHandler,HttpEvent,HttpInterceptor} from '@angular/common/http';
// import { AuthService } from './auth/auth.service';
import { Observable } from 'rxjs';
import { $ } from 'protractor';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}

 // mybearerToken= "Bearer "+localStorage.getItem("TOKEN");
    //mybearerToken= localStorage.getItem("TOKEN")
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    request = request.clone({
      setHeaders: {
        'Authorization': ""+localStorage.getItem("TOKEN")
      },withCredentials: true,
    });
    return next.handle(request);
  }
}