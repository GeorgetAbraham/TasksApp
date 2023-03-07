import { Component,Input } from '@angular/core';
import { Task } from 'src/app/taskdetails';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { TaskModalComponent } from 'src/app/modals/task-modal/task-modal.component';
@Component({
  selector: 'column-task',
  templateUrl: './column-task.component.html',
  styleUrls: ['./column-task.component.css']
})
export class ColumnTaskComponent {
  // IS THE ACTUAL INDIVIDUAL TASK BEING DISPLAYED IN CALENDAR VIEW. THE MOST ATOMIC UNIT
  @Input() task!:Task;
  
  constructor(private dialog:MatDialog){

  }

  openTaskModal(){
    // we can use config to set properties such as width and height + data to be sent to task modal!!!
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.hasBackdrop = true;
    dialogConfig.autoFocus = false;
    dialogConfig.data={
      task:this.task
    }
    // we can also add custom css to backdrop and dialogs in dialogconfig !!!!!
    // we can also choose position as well
    // console.log("opening modal for task->", this.task);
    const dialogRef=this.dialog.open(TaskModalComponent,dialogConfig);
    dialogRef.afterClosed().subscribe((res)=> {

      // need to have some method to update task details that are reflected in the planner view.
      // for now since modal and column-task both share same task object , extra function calls are not required!!


      // !!!!!!!!!!!!!!!!!!!!NEED TO RECALL THE TASKBYSTATUS API TO GET UPDATED VERSION OF TASK ALLOCATION BY STATUS SINCE 
      // TASKS MIGHT BE MOVED TO COMPLETION ETC . OTHER LOGICS OF ACTUALLY CHANGING TASK DETAILS IN BACKEND MUST BE DONE BY API CALLS 
      // IN MODAL DIALOG

      if(res.change){
        // res is boolean to check if task has changed or not.if yes then recall api.res is true on clicking save in modal
      }
      else{
        // no need to recall apis since data is same,res is false on saving in mat dialog
      }

    });
  }

}
