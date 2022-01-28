import { FormGroup } from "@angular/forms"

export function MustMatch(P1ControlName:string,P2ControlName:string)
{
    return(FormGroup:FormGroup)=>
    {
        const PasswordControl=FormGroup.controls[P1ControlName];
        const RetypePasswordControl=FormGroup.controls[P2ControlName];

        if(RetypePasswordControl.errors && ! RetypePasswordControl.errors['MustMacth'])
        {
            return;
        }
        if(PasswordControl.value !== RetypePasswordControl.value)
        {
            RetypePasswordControl.setErrors({MustMatch:true});
        } 
        else
        {
            RetypePasswordControl.setErrors(null);
        }
    }
}