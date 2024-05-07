import { Task } from "../types";

export class TaskList {

    tasks: Task[] = [];


    constructor(){
    this.getTasks();
    }

   async getTasks(){

    try{
        const response = await fetch("http://localhost:3000/tasks", {
            method: "GET",
        })
        .then((response) =>{
        return response.json() as Promise<Task[]>;
        })
        this.tasks = [...response];
        console.log(this.tasks);    
    }
    catch(error){
        console.log(error);
    }

    }
}