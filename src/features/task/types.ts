
export type Task = {
    title: string;
    description: string;
    priority: TaskPriority;
    state: TaskState;
    storyPoints: TaskStoryPoints;
    timestamp: string;
    id: number;
}

export type TaskPriority = "LOW" | "MEDIUM" | "HIGH";
export type TaskState = "CREATED" | "IN-PROGRESS" | "DONE";
export type TaskStoryPoints = "1" | "2" | "3" | "5" | "8";