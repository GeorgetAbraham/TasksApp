import { Component } from '@angular/core';
import { TaskqueryService } from 'src/app/service/taskquery.service';
@Component({
  selector: 'app-column-view',
  templateUrl: './column-view.component.html',
  styleUrls: ['./column-view.component.css']
})
export class ColumnViewComponent {

  // need to make taskbystatus as private and see how to access for task component

// taskByStatus should come from external service . that service has property of query parmaters (Searhcbar search+ filter values).
// Based on that searchbar submit , API call happens for updated task data and that is referred as @input() taskbystatus which is being used for column component

// service should have query parameters + data being displayed on component view 

  public taskByStatus:any;
  // taskBystatus returns {[status]:[array of task object from task interface]}
  constructor(private taskQueryServie:TaskqueryService){
    this.taskByStatus=taskQueryServie.getTaskByStatus();
  }


}
