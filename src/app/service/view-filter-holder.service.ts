import { Injectable } from '@angular/core';
import { ColumnViewComponent } from '../taskboard-folder/plannerview/column-view/column-view.component';
import { ListViewComponent } from '../taskboard-folder/plannerview/list-view/list-view.component';
import { CalendarViewComponent } from '../taskboard-folder/plannerview/calendar-view/calendar-view.component';
@Injectable({
  providedIn: 'root'
})
export class ViewFilterHolderService {

  // Service that holds all the viewmode +filter query informations !!!! to be accesed by multiple views
  public dicto:{[key:string]:any} = {
    "column":ColumnViewComponent,
    "list":ListViewComponent,
    "calendar":CalendarViewComponent
  }

  public viewMode:string="column";
  constructor() { }

  public setviewMode(mode:string|null){
    if(mode === null){
      mode='column';
    }
    this.viewMode=mode;
    // console.log(this.dicto[mode]);
  }

  public getViewMode(){
    return this.viewMode;
  }
}
