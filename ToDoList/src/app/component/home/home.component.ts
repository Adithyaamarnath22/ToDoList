import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/task';
import { CrudService } from 'src/app/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 adddetails={task_name:""}

  taskObj : Task = new Task();
  taskArr : Task[] = [];
  tasks:any=[]
  addTaskValue : string = '';
  editTaskValue : string = '';

  constructor(private crudService:CrudService ) { }
  ngOnInit(): void 
   {
    this.taskArr = [];
    this.editTaskValue = '';
    this.addTaskValue = '';
    this.taskObj = new Task();
    this.getAllTask(); 
    // this.addTask();
   }
  
  
  
  
  getAllTask() {
    this.crudService.GetAll().subscribe(
      res => {
        console.log(res);
       this.tasks= res;
    }, 
    err => {
      alert("Unable to get list of tasks");
    });
  }
   task:any=""
  addTask() {
    // this.crudService.AddTask(this.adddetails).subscribe(
    //   res=>console.log(res)
    // )
    this.taskObj.task_name = this.addTaskValue;
    this.crudService.AddTask(this.adddetails).subscribe( res => {
      this.ngOnInit();
      console.log(res);
    this.addTaskValue = '';
    },
     err => {
      alert(err);
    })
  }
  
  editTask() {
    this.taskObj.task_name= this.editTaskValue;
    this.crudService.EditTask(this.taskObj).subscribe( res => {
      this.ngOnInit();
    }, err=> {
      alert("Failed to update task");
    })
  }
  
  deleteTask(etask:number) {
    
    this.crudService.DeleteTask(etask).subscribe(res=>{
       this.ngOnInit();
    },err=>{
      alert("Failed to delete task ");
    });
  }
   
  call(etask : Task) {
    this.taskObj=etask;
    this.editTaskValue = etask.task_name;
  }
   
}




