import { Component,Input } from '@angular/core';
import { ViewFilterHolderService } from 'src/app/service/view-filter-holder.service';

@Component({
  selector: 'app-planner-container',
  templateUrl: './planner-container.component.html',
  styleUrls: ['./planner-container.component.css']
})
export class PlannerContainerComponent {

  // should contain code to dynamically load views such as column, list, calendar!!!!
  
  // instead of directly using the service value in the html element for deciding the ngComponentOutlet, we must subscribe to events from the service
  // to notify changes were made. Should be actually done using Behaviour Subject . Very Very important !!!!!!!!!!!!!!!!1


  constructor(public viewFilterService:ViewFilterHolderService){
    
  }

}
