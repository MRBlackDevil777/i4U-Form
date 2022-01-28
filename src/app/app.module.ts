import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { InterviewforyouComponent } from './interviewforyou/interviewforyou.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MustMatch } from 'src/app/PasswordMatch';
import { MyserviceService } from './myservice.service';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { TermsandconditionsComponent } from './termsandconditions/termsandconditions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    InterviewforyouComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    TermsandconditionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule

  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }