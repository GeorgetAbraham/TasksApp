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
  constructor(private taskQueryService:TaskqueryService){
    this.taskByStatus=taskQueryService.getTaskByStatus();
  }

  drop(event:CdkDragDrop<any>){

    // CdkDragDrop<type> is for ControlContainer.data type

    // !!!!!!!!! NEED TO FIGURE OUT TYPE OF CDKDRAGDROP VERY IMP
// generic taking input of what type of array to put data in
   
  
    // NEED TO PREVENT REORDERING WITHIN SAME LIST THAT IS ORDER SHOULD NOT CHANGE

    if(event.previousContainer !== event.container){
      // trigger state change backend function as well as change value in the taskby status and taskrep as well
      transferArrayItem(this.taskByStatus[event.previousContainer.data['status']],this.taskByStatus[event.container.data['status']],event.previousIndex,event.currentIndex);
      // cdkdragdata can be accessed in .item.data, passing id of task for backend computation

      // need to trigger change for status changes in taskrep
      this.taskQueryService.changeTaskStatus(event.container.data['status'],event.item.data);
      // since the object reference is update no need to update anywhere else

      // on changing view and coming back taskbystatus is recalled so no need to trigger extra call for in app rep

      // !!!!!!!!!!!!!!!!!!!need to make a backend API CALL TO UPDATE IN DB!!!!!!!
      console.log("please update DB on task status!!!!");


    }

  }

}
