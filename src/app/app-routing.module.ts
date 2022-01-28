import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { InterviewforyouComponent } from './interviewforyou/interviewforyou.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { TermsandconditionsComponent } from './termsandconditions/termsandconditions.component';

const routes: Routes = [

  { path: "Signup", component:SignupComponent },
  { path: "Signin", component:SigninComponent },
  { path: "", redirectTo:"Signin", pathMatch:"full" },
  { path: "Termsandconditions", component:TermsandconditionsComponent },
  { path: "About", component:AboutComponent,children: [{ path:"",component:AboutComponent }] },
  { path: "Home", component:HomeComponent, children: [{ path:"",component:HomeComponent }] },
  { path: "Interviewforyou", component:InterviewforyouComponent, children: [{ path:"",component:InterviewforyouComponent }] }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
