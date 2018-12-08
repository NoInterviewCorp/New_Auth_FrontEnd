import { Injectable } from '@angular/core';
import {HttpRequest,HttpHandler,HttpEvent,HttpInterceptor} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor() { }

  mybearerToken= "Bearer "+localStorage.getItem("TOKEN");

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
  {

    request = request.clone({
      setHeaders: {
        'Authorization': this.mybearerToken
      }
    });
    
    return next.handle(request); 
    
  }


}
