// able to change user setting ssuch as subscribe to reminders via mail, dark mode, username,password, chnage profile pic, laert settings on nearing deadline etc

// the functions onclick, onenter and privacypolicychange all refer to user service object and change the object representation provided in app.
//  Even on navigating away and coming back the values are still retained. To sync values to backend , api call for onsubmit has to run

import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../service/user-details.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { phoneNumberValidator } from '../validations/validation-custom';

@Component({
  selector: 'userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit{
  // need to add form validation as well
  public user:any;
  public userForm!:FormGroup;
  constructor(private userservice:UserDetailsService){
    
  }

  ngOnInit(): void {
      // api calls and setup to be done here
      this.user=this.userservice.getUserDetails();
      this.userForm = new FormGroup(
        {
          username: new FormControl(this.user.username, ),
          contactNumber:new FormControl(this.user.phoneNumber,[Validators.required,phoneNumberValidator()]),
          mailId: new FormControl(this.user.emailId,[Validators.required,Validators.email]),

          // for radio button, both inputs refer to same formcontrolName and [value] attribute is set.
          // Use https://angular.io/api/forms/RadioControlValueAccessor
          mailAccess:new FormControl(this.user.mailReminders),
          alertPermsn:new FormControl(this.user.reminderAlerts),

          // for dropdown in one select form need multiple options with values to be sent
          // https://angular.io/api/forms/SelectControlValueAccessor
          // set value to what is inside value of options
          privacyOptions: new FormControl(this.user.accesspolicy)
        }
      );

  }

  // trigerred on radio button
  onClick(){

  }

  // triggered on form enter
  onEnter(){

  }

  privacyPolicyChange(event:any){
    console.log(event);
    this.userservice.setUserValue("accesspolicy",event.target.value);
  }

  onSubmit(){
    // function to sync the frontend and backend on user settings

    //  should not work if ny of the forms are invalid / button should be disabled

    // onSubmit SHOULD TRIGGER A MODAL/MATCOMPONENT POPUP THAT CONFIRMS IF CHANGES SHOULD REALLY BE MADE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // WILL BE DONE ON ADDING ANGULAR MATERIAL!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


    if(this.userForm.invalid){
      console.log("Invalid values for form");
      return;
    }
    console.log("call gone to backend to send user details");
    this.userservice.setUserDetails();
  }


}
