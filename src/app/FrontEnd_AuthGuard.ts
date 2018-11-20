import {Injectable} from '@angular/core';
import {CanActivate,Router} from '@angular/router'
//import * as jwt_decode from 'jwt-decode';
import * as jwt_decode from "jwt-decode";

//@Injectable()

export class AuthGuard implements CanActivate {

    // token:string;

    //token?:string

    //,canActivate:[AuthGuard]

    constructor(private router:Router)
    {

    }

    canActivate()
    {
        //localStorage.getItem("TOKEN")!=null
        if(!this.isTokenExpired())
        {
            return true;
        }
        else
        {
            this.router.navigate(['/home']);
            return false;
        }
       

    }

    // if(decodedJwt.exp < Date.now()){
    //     //token is valid, do your stuff
    //   }else {
    //     //token expired, regenerate it and set it to the cookie
    //     //also update the expire time of the cookie 
    //   }


      logout() {
        localStorage.removeItem("TOKEN");
        this.router.navigate(["/home"]);
      }

      getTokenExpiryDate(token:string):Date
      {
          const decoded = jwt_decode(token);
          if(decoded.exp===undefined) return null;

          const date = new Date(0);
          date.setUTCSeconds(decoded.exp);
          return date;

      }

      isTokenExpired():boolean
      {
        let token:string;
        
        if(!token) token = localStorage.getItem("TOKEN");
        if(!token) return true;
        const date = this.getTokenExpiryDate(token);
        if(date===undefined||date===null) return false;
        return !(date.valueOf()> new Date().valueOf());
      }
    


}