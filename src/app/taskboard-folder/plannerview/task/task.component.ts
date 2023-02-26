import { Component ,Input} from '@angular/core';
import { Task } from 'src/app/taskdetails';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  @Input() public task!:Task;
  constructor(){

  }

  // add some functionalities for task like change priority or so on with button click, change status


}
