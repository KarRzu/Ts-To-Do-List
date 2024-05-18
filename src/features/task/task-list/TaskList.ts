import { Task } from "../types";
import { createListItem } from "./TaskItem";

export class TaskList {
    taskListElement: HTMLDivElement;
    deleteButtons: HTMLButtonElement[];
    editButtons: HTMLButtonElement[];
    tasks: Task[] = [];


    constructor(){
    this.initialiazeTaskList();
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


        const deleteButtons = document.querySelectorAll(".btn-delete");
        
        console.log(deleteButtons);

        deleteButtons.forEach((element) => {
            element.addEventListener("click" , (event) => {
                console.log("klik");
            this.deleteTask(event)
            console.log(this.deleteTask)
            })
        })


        const editButtons = document.querySelectorAll(".btn-edit");
    
    
        editButtons.forEach((element) => {
            element.addEventListener("click", (event) => {
            this.editTask(event);
            });
        });
    } 

async getTasks(){

    try{
        const response = await fetch("http://localhost:3000/tasks", {
            method: "GET",
            headers: {'Content-type': 'application/json'}
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

    async deleteTask(event: Event){
        console.log("hello")

        const target = event.target as HTMLElement
        console.log(target)
        const id: number = Number(target.getAttribute('data-id'))
        console.log(id)

        const URL: string = "http://localhost:3000/tasks"

        try{
            const response = await fetch(`${URL}/${id}`, {
            method: "DELETE",
            headers: {'Content-type': 'application/json'}
            })

            if(response.ok){ 
                //this.render();
                this.getTasks();
            }
            
        }
        catch(error){
          console.log(error)
        }

    }


    async editTask(event: Event) {

        const target = event.target as HTMLElement
        console.log(target)
        const id: number = Number(target.getAttribute('data-id'))
        console.log(id)
       

         const input = document.querySelectorAll('.form-control.task-list__input');
         const textarea = document.querySelectorAll('.form-control.task-list__textarea');

    input.forEach((element: HTMLInputElement) => {
        element.disabled = false;
    });
    
    textarea.forEach((element: HTMLTextAreaElement) => {
        element.readOnly = false;
    });

    const btnEdit = document.querySelector('.btn-edit') as HTMLButtonElement;

    if (btnEdit) {
        btnEdit.disabled = true;
    }

}

  enterTask(){
    const enterBtn = document.querySelector("btn-enter");

    enterBtn?.addEventListener("click", () => {
        
    })
  }

    }

