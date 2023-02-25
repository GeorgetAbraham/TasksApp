import { ValidationErrors,ValidatorFn } from "@angular/forms";
import { AbstractControl } from "@angular/forms";
export function phoneNumberValidator():ValidatorFn{
    // much later need to create validation to check if the same phone number has been linked to another account.Same phone number no two accounts.
    // this can be a separate async validator fnctn that makes backend api call to see if phone number belongs to someone else
    // use regex for number matching to check if only numbers are put in

    return (contrl:AbstractControl):ValidationErrors|null=>{
        if(contrl.value==="0000000000"){
            return {invalidPhoneNumber:{error_message:"current phone number not allowed"}}
        }
        else if(contrl.value.length!=10){
            return {invalidPhoneNumber:{error_message:"phone number length insufficient"}}
        }
        // regex matching for phone number to have length 10 and only numbers
        const phoneRegex = /[0-9]{10}/;
        const dum=phoneRegex.test(contrl.value);
        if(!dum){
            return {invalidPhoneNumber:{error_message:"Invalid characters entered"}};
        }
        return null;
    }
}

export function banneduserName():ValidatorFn{
    // asynchronous -> need to create validation to check if the profanity has been added to username of account.
    // can refer to internal list of banned usernames

    // requires regex matching for banned terms
    return (contrl:AbstractControl):ValidationErrors|null=>{

        return null;
    }
}