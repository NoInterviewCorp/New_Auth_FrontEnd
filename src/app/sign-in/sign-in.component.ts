import { Component, OnInit } from '@angular/core';
import {AuthService,FacebookLoginProvider,GoogleLoginProvider} from 'angular-6-social-login';
import { TestService } from '../test.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  myemail:string;
  myUserData:any;

  constructor(private socialAuthService: AuthService,private test:TestService) { }

  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {this.myUserData=userData
        console.log(socialPlatform+" sign in data : " , userData);
        console.log("my broooooooooooooooooooo",userData.email, userData.name)
        this.myemail= userData.email; //userData.
        console.log("yoooooooooooooooooooo",this.myemail);
        // Now sign-in with userData
        // ...
        this.test.socialSignIn(this.myUserData);
            
      }
    );
  }

  ngOnInit() {
  }

}

