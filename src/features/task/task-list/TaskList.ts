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
        this.taskListElement.innerHTML = '';

    if (!Array.isArray(this.tasks)) {
        this.tasks = [this.tasks];
    }

    this.tasks.forEach((element) => {
        const taskItem = createListItem(element);
        this.taskListElement.appendChild(taskItem);
    });


        const deleteButtons = document.querySelectorAll(".btn-delete");
        
        console.log(deleteButtons);

        deleteButtons.forEach((element) => {
            element.addEventListener("click" , (event) => {
                console.log("klik");
            this.deleteTask(event)
            })
        })


        const editButtons = document.querySelectorAll(".btn-edit");
    
    
        editButtons.forEach((element) => {
            element.addEventListener("click", (event) => {
            this.editTask(event);
            });
        });

        const saveButtons = document.querySelectorAll(".btn-save");

        saveButtons.forEach((element) => {
            element.addEventListener("click", (event) => {
            this.sendEditTask(event);
            });
        });



        const inputSearch = document.getElementById("search-input") as HTMLInputElement;

         inputSearch.addEventListener("keydown", (event) => {
          
            if (event.key === "Enter") {
                this.search(inputSearch.value);
            }
        });
    } 

async getTasks(){
    // // const skeletonLoader = document.getElementById('skeletonLoader') as HTMLDivElement;
    // const cardBody = document.getElementById('card-body') as HTMLDivElement;

    // if (skeletonLoader) {
    //     for(let i = 0; i < this.tasks.length; i++) {
    //         const skeletonLoader = document.createElement('div');
    //         skeletonLoader.className = 'skeleton-loader';
    //         cardBody.appendChild(skeletonLoader);
    //         skeletonLoader.style.display = 'block';
    //     }
    // }

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
                this.render();
                this.getTasks();
            }
            
        }
        catch(error){
          console.log(error)
        }

    }


    async editTask(event: Event) {

        const target = event.target as HTMLElement
        console.log(target);
        const id: number = Number(target.getAttribute('data-id'))
        console.log(id);
       

         const container = document.getElementById(`${id}`);
         if(!container) return;
         console.log(container)


         const input = container.querySelector('.form-control.task-list__input');
         const textarea = container.querySelector('.form-control.task-list__textarea');
         console.log(input, textarea)

         input?.removeAttribute("readonly");
         textarea?.removeAttribute("readonly")
        
         
        const saveBtn = container.querySelector(".btn-save");
        saveBtn?.removeAttribute("disabled")
        console.log(saveBtn)

    
        target.setAttribute("disabled", "true");
    

}



async sendEditTask(event: Event){
    const target = event.target as HTMLElement
        console.log(target)
        const id: number = Number(target.getAttribute('data-id'))
        console.log(id)


    
        const container = document.getElementById(`${id}`);
        if(!container) return;
        console.log(container)


        const input = container.querySelector('.form-control.task-list__input') as HTMLInputElement
        const textarea = container.querySelector('.form-control.task-list__textarea') as HTMLTextAreaElement

   

        const data: Pick<Task, "title" | "description"> = {
            title: input.value,
            description: textarea.value
        };

        try{
            const response = await fetch(`http://localhost:3000/tasks/${id}`, {
                method: 'PATCH',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(data)
            });

            if(response.ok){
                console.log("wysłano poprawnie")
                this.render()
                this.getTasks();
            } 
        } catch(error){
            console.log(error)
        }
}

async search(inputSearch: string) {

    const skeletonLoader = document.createElement("div") as HTMLDivElement;
    skeletonLoader.className = "skeleton-loader";
    console.log(skeletonLoader);
    
        if (skeletonLoader) {
            skeletonLoader.style.display = 'block';
        }

    try {
        const apiUrl = `http://localhost:3000/tasks`;
        // const queryParams = new URLSearchParams({
        //     title: inputSearch,
        //     description: inputSearch,
        //     priority: inputSearch,
        //     taskstorypoints: inputSearch
        // }).toString();
        const response = await fetch(apiUrl + `?title=${inputSearch}`);
        if (response.ok) {

            const data = await response.json();
            console.log(data);
            if (data.length > 0) {
                this.tasks = data[0]; 
               this.render(); 
            } else {
                console.log("Brak wyników wyszukiwania")
            }
        } else {
            console.log("blad");
        }
    } catch (error) {
        console.error('Błąd podczas wyszukiwania:', error);
    } finally {
        if (skeletonLoader) {
            skeletonLoader.style.display = 'none';
        }
    }
}

}

