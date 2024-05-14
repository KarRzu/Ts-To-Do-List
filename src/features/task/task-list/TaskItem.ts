import { Task } from "../types";

export function createListItem(task:Task){
    const{title, description, id, state, storyPoints, priority, timestamp} = task;
    const item = document.createElement("div");
    item.innerHTML = `<div class="task-list__item card mb-3"><div class="card-body">
    <input type="text" class="form-control task-list__input mb-2" placeholder="Task Title" value="${title}" readonly/><textarea class="form-control task-list__textarea mb-3" placeholder="Task Description" value="${description}" readonly>${description}</textarea> <p class="task-list__status mb-1">Status: <span class="text-muted">${state}</span></p><p class="task-list__created mb-1">Created on: <span class="text-muted">${timestamp}</span></p> <p class="task-list__priority mb-1">Priority: <span class="text-muted">${priority}</span></p><p class="task-list__story-points mb-3">Story Points: <span class="text-muted">${storyPoints}</span></p><div class="task-list__icons d-flex justify-content-end"><button class="btn task-list__icon-btn me-2" data-id="${id}"><i data-feather="check-circle"></i></button><button class="btn task-list__icon-btn" data-id="${id}"><i data-feather="trash-2"></i></button></div></div></div>`
    
    return item;
}


