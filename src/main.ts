import { TaskForm } from "./features/task/task-form/TaskForm";
import { TaskList } from "./features/task/task-list/TaskList";

const taskList = new TaskList()
new TaskForm(taskList)
