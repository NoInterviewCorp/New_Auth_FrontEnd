import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TestService } from './test.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmeComponent } from './sme/sme.component';
import { LearnerComponent } from './learner/learner.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IndiaComponent } from './india/india.component';
import { UsaComponent } from './usa/usa.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './FrontEnd_AuthGuard';
import { AuthGuardService } from './auth-guard.service';
import { AuthInterceptorService } from './auth-interceptor.service';
import { TokenInterceptor } from './token-interceptor';
import { SignInComponent } from './sign-in/sign-in.component';
import { CookieService } from 'ngx-cookie-service';
import {SocialLoginModule,AuthServiceConfig,GoogleLoginProvider,FacebookLoginProvider} from "angular-6-social-login";

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("2005603086174312")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("609688220267-ag116pt8sl7bsrvqtiqtf10t8fu9amj6.apps.googleusercontent.com")
        },
          
      ]
  );
  return config;
}


@NgModule({
  declarations: [
    AppComponent,
    SmeComponent,
    LearnerComponent,
    IndiaComponent,
    UsaComponent,
    HomeComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule
  ],
  providers: [
    TestService,
    AuthGuardService,
    CookieService,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
