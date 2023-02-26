import { Component } from '@angular/core';
import { TaskqueryService } from 'src/app/service/taskquery.service';
@Component({
  selector: 'app-column-view',
  templateUrl: './column-view.component.html',
  styleUrls: ['./column-view.component.css']
})
export class ColumnViewComponent {

  // need to make taskbystatus as private and see how to access for task component
  public taskByStatus:any;
  // taskBystatus returns {[status]:[array of task object from task interface]}
  constructor(private taskQueryServie:TaskqueryService){
    this.taskByStatus=taskQueryServie.getTaskByStatus();
  }


}
