import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-interviewforyou',
  templateUrl: './interviewforyou.component.html',
  styleUrls: ['./interviewforyou.component.css']
})
export class InterviewforyouComponent implements OnInit {

i4UForm : any;
IsClicked : boolean= false;
Message: any;
IsSaved: boolean =false;

constructor(private formbuilder:FormBuilder, private myservice:MyserviceService) { }

ngOnInit(){
  this.i4UForm=this.formbuilder.group(
    {
      Name:["",Validators.required],
      Age:["",Validators.required],
      Qualification:["",Validators.required],
      Others:["",Validators.required],
      Areaofinterest:["",Validators.required],
      Place:["",Validators.required],
      Skills:["",Validators.required]
    },
    );
  }
  get u() { 
    return this.i4UForm.controls;
  }
  
  OnCreate(data:any){
    this.IsClicked=true;
  
    if (this.i4UForm.invalid) {
      return;
    }
    const i4UForm=this.i4UForm.value;
    this.myservice.InsertI4u(i4UForm).subscribe(
      () => {
        this.IsSaved=true;
        this.Message="Your application has been sent successfully"+"We will contact you within three days";
      }
    );
  }
}