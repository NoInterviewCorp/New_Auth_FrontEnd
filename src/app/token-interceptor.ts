import { Injectable } from '@angular/core';
import {HttpRequest,HttpHandler,HttpEvent,HttpInterceptor} from '@angular/common/http';
// import { AuthService } from './auth/auth.service';
import { Observable } from 'rxjs';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}

  //myToken = localStorage.getItem("TOKEN");

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
   
    request = request.clone({
      setHeaders: {
        'Authorization': localStorage.getItem("TOKEN")
      }
    });
    return next.handle(request);
  }
}