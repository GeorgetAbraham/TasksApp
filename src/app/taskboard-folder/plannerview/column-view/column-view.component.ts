import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { TaskqueryService } from 'src/app/service/taskquery.service';
import { Task } from 'src/app/taskdetails';
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

  drop(event:CdkDragDrop<Task []>){
// generic taking input of what type of array to put data in

    // function triggered when cdk drag element is dropped. Here the state of task is updated based
    // on column
    // we can use switch statemtn based on id or class of column
   
    // console.log("drop event",event);

    // NEED TO PREVENT REORDERING WITHIN SAME LIST THAT IS ORDER SHOULD NOT CHANGE

    if(event.previousContainer !== event.container){
      // trigger state change backend function as well as change value in the taskby status and taskrep as well
      transferArrayItem(event.previousContainer.data,event.container.data,event.previousIndex,event.currentIndex);
      

    }

  }

}
