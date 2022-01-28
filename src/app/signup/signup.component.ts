import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { MustMatch } from 'src/app/PasswordMatch';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm! : FormGroup;
  IsClicked : boolean= false;
  Message: any;
  IsSaved: boolean =false;
  PasswordNotMatch: boolean =false;

  constructor(private formbuilder:FormBuilder, private myservice:MyserviceService) { }

  ngOnInit(){
    this.signupForm=this.formbuilder.group(
      {
        FirstName:["",Validators.required],
        LastName:["",Validators.required],
        Gender:["",Validators.required],
        Dateofbirth:["",Validators.required],
        MobileNo:["",[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
        EmailID:["",[Validators.required, Validators.pattern("[^ @]*@[^ @]*")]],
        Password:["",[Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
        ReTypePassword:["",Validators.required]
      },
      );
    }
    get s() { 
      return this.signupForm.controls;
    }
    
    OnCreate(data:any){
      this.IsClicked=true;
    
      if (this.signupForm.invalid) {
        return;
      }
      const signupForm=this.signupForm.value;
      this.myservice.InsertSignup(signupForm).subscribe(
        () => {
          this.IsSaved=true;
          this.Message="Signup sucess..!!";
        }
      );
    }
    PasswordCheck(data:any) {
      if(data.Password != "" && data.ReTypePassword != ""){
        if(data.Password != data.ReTypePassword){
          this.PasswordNotMatch=true;
        }
        else {
          this.PasswordNotMatch=false;
        }
      }
     }
    }