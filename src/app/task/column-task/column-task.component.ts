import { Component,Input } from '@angular/core';
import { Task } from 'src/app/taskdetails';
@Component({
  selector: 'column-task',
  templateUrl: './column-task.component.html',
  styleUrls: ['./column-task.component.css']
})
export class ColumnTaskComponent {
  // IS THE ACTUAL INDIVIDUAL TASK BEING DISPLAYED IN CALENDAR VIEW. THE MOST ATOMIC UNIT
  @Input() task!:Task;
  
  constructor(){

  }

}
