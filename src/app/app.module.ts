import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TestService } from './test.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmeComponent } from './sme/sme.component';
import { LearnerComponent } from './learner/learner.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IndiaComponent } from './india/india.component';
import { UsaComponent } from './usa/usa.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './FrontEnd_AuthGuard';
import { AuthGuardService } from './auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    SmeComponent,
    LearnerComponent,
    IndiaComponent,
    UsaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    TestService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }