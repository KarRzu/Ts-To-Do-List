import { Task } from "../types";
import { createListItem } from "./TaskItem";

export class TaskList {
    taskListElement: HTMLDivElement;

    tasks: Task[] = [];


    constructor(){
    this.initialiazeTaskList();
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
        this.render();
        console.log(response);   
    }
    catch(error){
        console.log(error);
    }

    }

    initialiazeTaskList(){
        this.taskListElement = document.querySelector(".task-list") as HTMLDivElement; 
        this.getTasks();
    }

    render(){
        this.tasks.forEach((element) => {
            const taskItem = createListItem(element);
            this.taskListElement.appendChild(taskItem);
        })
    }
}