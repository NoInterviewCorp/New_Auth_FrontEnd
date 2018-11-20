import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
export const TOKEN : string = 'TOKEN';
//export const LEARNER_TOKEN : string = 'LEARNER_TOKEN'; 
import {MyToken} from './my-token';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class TestService {

 
  constructor(private http: HttpClient, private router: Router) { }


  SignIn(signIn)
  {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    this.http.post('http://localhost:5000/signIn',signIn,httpOptions).subscribe(response => (myfun(response,this.router)));

    function myfun(response,router)
      {
        if(response=="user does not exist")
        {
          alert('user does not exist');
        }
        else if(response=="Password entered is not correct")
        {
          
          alert("Password entered is not correct");
        }

        else if(response=="Invalid state")
        {
          alert("Invalid state");
        }

       else
        {
          //let mytoken = response as MyToken;
          //var Token= mytoken.token;
          // console.log(mytoken.token);
          localStorage.setItem("TOKEN",response); 
          alert("Succesful login");
          router.navigate(['home']);
          //window.location.href = "https://roiit2912.github.io/bootstrap4/";
  
        }
      }
    
  }


  SignUp(signUp)
  {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
   this.http.post('http://localhost:5000/signUp',signUp,httpOptions).subscribe(token => (myfun(token.toString())));

    function myfun(token)
      {
        if(token=="User already exist")
        {
          alert("User already exist");
        }
        else if(token="Success")
        { 
          alert("Succesfully Registerd");
        }

        else{
          alert("Invalid state");
        }

      }
  }




}
