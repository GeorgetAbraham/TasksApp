import { Component,Input } from '@angular/core';
import { Task } from 'src/app/taskdetails';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'task-modal',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.css']
})
export class TaskModalComponent {
  // is modal dialogue for indiv task with embeddable html and videos etc

  private task!:Task|null;
  constructor(
        private dialogRef: MatDialogRef<TaskModalComponent>,
        @Inject(MAT_DIALOG_DATA) data:any
  ){
    this.task=data.task;
  }

  save(){
    this.dialogRef.close({change:true});
    // can pass additional info on task details that is necessary to update only task(column-task individual in column view )

  }

  close(){
    this.dialogRef.close({change:false});

  }

}
