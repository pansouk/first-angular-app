import { Injectable } from "@angular/core";
import { dummyTasks } from "../../dummy-tasks"
import { AddTaskItem } from "./task/task.model"

@Injectable({ providedIn: 'root' })
export class TasksService {
    private tasks = dummyTasks

    getUserTasks(userId: string) {
        return this.tasks.filter((task) => task.userId === userId)
    }

    addTask(data: AddTaskItem, userId: string) {
        this.tasks.push({
            id: Math.random().toString(),
            userId: userId,
            title: data.title,
            summary: data.summary,
            dueDate: data.date
        });
    }

    removeTask(taskId: string) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
    }
}