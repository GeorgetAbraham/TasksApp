import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewFilterHolderService {

  // this service holds the view such as column,calendar,list view + filter params . These together can be used to create query for API call to DB 
  // for taskbystatus or any other task call in planning view

  public viewMode=new BehaviorSubject("column");
  constructor() { }

  public setviewMode(mode:string|null){
    if(mode === null){
      mode='column';
    }
    this.viewMode.next(mode);
  }

  public getViewMode(){
    return this.viewMode;
  }
}
