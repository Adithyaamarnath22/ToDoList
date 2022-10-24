import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  url="http://localhost:3000/tasks"

constructor( private http:HttpClient) { }

GetAll(){
return this.http.get(this.url)
}
 DeleteTask(item:number)
 {
  return  this.http.delete(this.url+'/'+item)
 }
 AddTask(task:{task_name:string}){
console.log(task)
return this.http.post(this.url,task)
  // console.log(task)
  
  // return this.http.post(this.url,task.task_name)
  // .map((res:any)=>{
  //   let data=res.json();
  //     return data;
  // })

 }
 EditTask(any:Task)
 {
  return  this.http.put(this.url,Task)
 }

                            
}