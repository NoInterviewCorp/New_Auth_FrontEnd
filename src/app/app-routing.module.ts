import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SmeComponent } from './sme/sme.component';
import { LearnerComponent } from './learner/learner.component';
import { IndiaComponent } from './india/india.component';
import { UsaComponent } from './usa/usa.component';
import { AuthGuard } from './FrontEnd_AuthGuard';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './auth-guard.service';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  {path: 'sme', component: SmeComponent},
  {path: 'learner', component: LearnerComponent},
  {path: 'india' , component: IndiaComponent, canActivate:[AuthGuardService]},
  {path: 'usa' , component: UsaComponent,canActivate:[AuthGuardService] },
  {path: 'home' , component: HomeComponent},
  {path: 'signIn' , component: SignInComponent },
  {path: '' , redirectTo: '/home',pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
