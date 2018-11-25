import { Injectable } from '@angular/core';
//import { HttpInterceptor,HttpHandler, HttpRequest,HttpEvent,HttpResponse} from '@angular/http';
import {HttpRequest,HttpHandler,HttpEvent,HttpInterceptor} from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/do';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        "Authorization": localStorage.getItem("TOKEN")
      }
    });
    return next.handle(request);
 
    
  }


}
