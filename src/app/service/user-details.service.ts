import { Injectable } from '@angular/core';
import { userdetails } from '../user-details';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  // service used to connect to backend to get user preferences and make calls to reset/change few details
private userDetails:any;
  constructor() { 
    console.log("just checking when is service created, on app creation or only when demanded");
    this.userDetails=userdetails;
  }

  public getUserDetails(){
    return this.userDetails;
  }

  public setUserDetails():void{
    // supposed to make backend api call to set the user details using the this.userdetails as input.
    // used to sync frontend data with backend for user details
    //detail changing happens via other calls on form filling event , clicking on radio buttons etc
  }

  public setUserValue(key:string,value:any){
    // should be called on userdetailcomponent button clicks / form entering etc. Not synced yet, need to call setUserDetails for that
    this.userDetails[key]=value;
  }


}
