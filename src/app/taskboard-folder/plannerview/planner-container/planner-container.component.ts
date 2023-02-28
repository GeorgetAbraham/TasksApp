import { Component,Input } from '@angular/core';
import { ViewFilterHolderService } from 'src/app/service/view-filter-holder.service';
import { ColumnViewComponent } from '../column-view/column-view.component';
import { ListViewComponent } from '../list-view/list-view.component';
import { CalendarViewComponent } from '../calendar-view/calendar-view.component';

@Component({
  selector: 'app-planner-container',
  templateUrl: './planner-container.component.html',
  styleUrls: ['./planner-container.component.css']
})
export class PlannerContainerComponent {
 
  // mapping of component vs viewMode.Added here because viewFilterService should not contain useless info about what component is being used where and link to component
  // the PlannerContainer is better place for mapping component vs key value
  public dicto:{[key:string]:any} = {
    "column":ColumnViewComponent,
    "list":ListViewComponent,
    "calendar":CalendarViewComponent
  }

  public currentComponent:any;
  
  constructor(public viewFilterService:ViewFilterHolderService){

    // viewMode is a behaviour subject. by subscribing to behaviour subject , on any changes to the behaviourSubject -> viewMode the component is notified and 
    // currentComponent is updated !!!!
    this.viewFilterService.viewMode.subscribe((viewMode)=>{this.currentComponent=this.dicto[viewMode]});
  }

}
