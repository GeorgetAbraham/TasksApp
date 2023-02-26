import { Injectable } from '@angular/core';
import { Task,tasks } from '../taskdetails';

@Injectable({
  providedIn: 'root'
})
export class TaskqueryService {

  public tasksRep:any;
  // tasks rep is representation tasks data that is being used for taskboard view for persistence purposes
  // will be removed when proper backend/mongodb queries are added for persistence 

  // id of task has to be generated from backend or programmatically


  constructor() {
    this.tasksRep=tasks;
  }

  public getTaskBoardDetails(){
    return this.tasksRep;
  }

  public getTaskById(id:string){
    return this.tasksRep[id];
  }

  public changeTaskStatus(status:string,id:string){
    this.tasksRep[id].status=status;
  }

  public addTask(task:Task){
    console.log("adding tasks to backend boiiiii");
    // need to handle actual logics later
  }

  public getTaskByStatus(){
    // should {status:[tasks]} for each kind of status
    let tasksbystat:{[key:string]:any}={};
    Object.keys(this.tasksRep).forEach(
      (key)=>{
        if(this.tasksRep[key]["status"] in tasksbystat){
          tasksbystat[this.tasksRep[key].status].push(this.tasksRep[key]);
        }
        else{
          tasksbystat[this.tasksRep[key].status]=[this.tasksRep[key]];
        }
      }
    );
      console.log("tasksby status is : ",tasksbystat);
    return tasksbystat
  }


}
