import { TaskState, Task, TaskPriority,TaskStoryPoints} from "../types";

export class TaskForm{
    
    title: HTMLInputElement;
    description :HTMLTextAreaElement;
    taskPriority:HTMLSelectElement;
    taskStoryPoints:HTMLSelectElement;
    btnCreate: HTMLButtonElement;

    constructor(){
        this.initialize();
    
    }

    initialize(){
        this.title = document.getElementById("title") as HTMLInputElement;
        this.description = document.getElementById("description") as HTMLTextAreaElement;
        this.taskPriority = document.getElementById("task-priority") as HTMLSelectElement;
        this.taskStoryPoints = document.getElementById("task-story-points") as HTMLSelectElement;
        this.btnCreate = document.getElementById("btn-create") as HTMLButtonElement;
    }

    createTask(){
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
    }
}