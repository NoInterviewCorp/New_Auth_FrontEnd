import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
export const TOKEN: string = 'TOKEN'; 
import { MyToken } from './my-token';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class TestService {

  //AuthIpHost = "http://IP:80";

  constructor(private http: HttpClient, private router: Router, private cookieService: CookieService) { }


  SignIn(signIn) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

     this.http.post('http://172.23.238.173:80/signIn', signIn, httpOptions).subscribe(response => (myfun(response, this.router)));
    // this.http.post('http://172.23.238.173:5000/signIn', signIn, httpOptions).subscribe(response => (myfun(response, this.router)));    
   // this.http.post('http://localhost:5000/signIn', signIn, httpOptions).subscribe(response => (myfun(response, this.router)));

    const myfun = (response, router) => {
      if (response == "user does not exist") {
        alert('user does not exist');
      }
      else if (response == "Password entered is not correct") {

        alert("Password entered is not correct");
      }

      else if (response == "Invalid state") {
        alert("Invalid state");
      }

      else {
        // let mytoken = response as MyToken;
        // var Token= mytoken.token;
        // console.log(mytoken.token);
        // docCookies.setItem('access_token', response);
        // document.cookie='TOKEN= [response]'
        document.cookie = 'TOKEN=' + response;
        // this.cookieService.set("TOKEN", response);
        // console.log(document.cookie);
        localStorage.setItem("TOKEN", response);
        alert("Succesful login");
        // router.navigate(['home']);
         
           window.location.href = "http://172.23.238.173:80/profile";
         // window.location.href = "http://172.23.238.173:80/AllConcepts/";

      }
    }

  }


  SignUp(signUp) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    
     this.http.post('http://172.23.238.173:80/signUp', signUp, httpOptions).subscribe(token => (myfun(token.toString())));
    // this.http.post('http://172.23.238.173:5000/signUp', signUp, httpOptions).subscribe(token => (myfun(token.toString())));

    //this.http.post('http://localhost:5000/signUp', signUp, httpOptions).subscribe(token => (myfun(token.toString())));

    function myfun(token) {
      if (token == "User already exist") {
        alert("User already exist");
      }
      else if (token = "Success") {
        alert("Succesfully Registerd");
      }

      else {
        alert("Invalid state");
      }

    }
  }



  socialSignIn(userData) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    this.http.post('http://172.23.238.173:80/socialSignIn', userData, httpOptions).subscribe(response => (myfun(response, this.router)));
    // this.http.post('http://172.23.238.173:5000/socialSignIn', userData, httpOptions).subscribe(response => (myfun(response, this.router)));
    // this.http.post('http://localhost:5000/socialSignIn', userData, httpOptions).subscribe(response => (myfun(response, this.router)));
    function myfun(response, router) {
      // let mytoken = response as MyToken;
      // var Token= mytoken.token;
      // console.log(mytoken.token);
      document.cookie = 'TOKEN=' + response;
      //this.cookieService.set("TOKEN", response);
      localStorage.setItem("TOKEN", response);
      alert("Succesful login");
      // router.navigate(['home']);
      window.location.href = "http://172.23.238.173:80/profile";


    }

  }




}
