import { validateTextInput } from "../../../shared/utils/validation";
import { TaskState, Task, TaskPriority,TaskStoryPoints,} from "../types";

export class TaskForm{
    
    title: HTMLInputElement;
    description :HTMLTextAreaElement;
    taskPriority:HTMLSelectElement;
    taskStoryPoints:HTMLSelectElement;
    btnCreate: HTMLButtonElement;

    isLoading: boolean = false;
    isValidTitle: boolean = false;
    isValidDescription: boolean = false;

    constructor(){
       this.initialize();
     
    }

    initialize(){
        this.title = document.getElementById("title") as HTMLInputElement;
        this.description = document.getElementById("description") as HTMLTextAreaElement;
        this.taskPriority = document.getElementById("task-priority") as HTMLSelectElement;
        this.taskStoryPoints = document.getElementById("task-story-points") as HTMLSelectElement;
        this.btnCreate = document.getElementById("btn-create") as HTMLButtonElement;
        this.btnCreate.addEventListener("click", (event: MouseEvent) => this.createTask(event));
        this.title.addEventListener("blur", () =>{
           const inputValueTitle: string = this.title.value;
           this.isValidTitle = validateTextInput(inputValueTitle);
        })

        this.description.addEventListener("blur", () =>{
            const inputValueDescription: string = this.description.value;
            this.isValidDescription = validateTextInput(inputValueDescription);
        })
    }

    createTask(event: MouseEvent){
        event.preventDefault()

        if(!this.isValidTitle || !this.isValidDescription){
        if(!this.isValidTitle){
            this.title.style.borderColor = 'red';
        }
        if(!this.isValidDescription){
            this.description.style.borderColor = 'red';
        } return;
    }
    const titleValue = this.title.value;
    const descriptionValue = this.description.value;
    const taskPriorityValue: TaskPriority = this.taskPriority.value as TaskPriority;
    const taskStoryPoints: TaskStoryPoints = this.taskStoryPoints.value as TaskStoryPoints;
    const timestamp = new Date().toISOString();
    const taskState: TaskState = 'CREATED';
    const newTask: Task = {
        title: titleValue,
        description: descriptionValue,
        priority: taskPriorityValue ,
        state: taskState,
        storyPoints: taskStoryPoints,
        timestamp: timestamp,
        id: Math.floor(Math.random() * 1000)
    }
    this.postTask(newTask);
}


    async postTask(newTask: Task){
        this.isLoading = true;
        this.btnCreate.disabled = true;
        try {
            await fetch("http://localhost:3000/tasks", {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'            
                },
                body: JSON.stringify(newTask)
            })
            this.resetForm();
        } catch (error) {
            console.log(error)
            
        }
        finally{
            this.isLoading = false;
            this.btnCreate.disabled = false;

        }
       
            
        
    }

    resetForm() {
        this.title.value = ''
        this.description.value = ''
        this.taskPriority.value = ''
        this.taskStoryPoints.value = ''
    }
}