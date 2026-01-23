import { Component, Input } from '@angular/core';
import { Task } from "./task/task";
import { dummyTasks } from '../../dummy-tasks';
import { NewTask } from "./new-task/new-task";

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {

  tasks = dummyTasks
  @Input({ required: true }) userId !: string
  @Input({ required: true }) name!: string
  isAddingTask = false

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId)
  }

  onTaskComplete(taskId: string) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }
  onCancelAddTask() {
    this.isAddingTask = false;
  }
}