import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { MyserviceService } from '../myservice.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinForm! : any;
  IsClicked : boolean= false;
  Message: any;
  IsSaved: boolean =false;
  data: any;


  constructor(private router:Router, private formbuilder:FormBuilder, private myservice:MyserviceService, private http : HttpClient) { }

  ngOnInit(){ 

    this.signinForm=this.formbuilder.group(
      {
        EmailID:["",[Validators.required, Validators.pattern("[^ @]*@[^ @]*")]],
        Password:["",Validators.required]
      },
      );
    }
    get t() { 
      return this.signinForm.controls;
    }
    
    OnCreate(data:any){
      this.IsClicked=true;
    
      if (this.signinForm.invalid) {
        return;
      }{
        const signinForm=this.signinForm.value;
        return this.myservice.getSignup().subscribe(res =>{
          res.find((data:any)=>{
    
       if(data.EmailId==this.signinForm.value.EmailId && data.Password==this.signinForm.value.Password){
            this.router.navigateByUrl('Home');
            }else{
              this.Message="Invalid Account";    
          }
      })})        
    }
  }
}