import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewFilterHolderService {

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
