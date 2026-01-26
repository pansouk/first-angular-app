import { Component, Input } from '@angular/core';
import { Task } from "./task/task";
import { NewTask } from "./new-task/new-task";
import { type AddTaskItem } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {


  @Input({ required: true }) userId !: string
  @Input({ required: true }) name!: string
  isAddingTask = false

  private tasksService: TasksService

  constructor(tasksService: TasksService) {
    this.tasksService = tasksService
  }

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId)
  }

  onTaskComplete(taskId: string) {
    return this.tasksService.removeTask(taskId)
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }
  onCancelAddTask() {
    this.isAddingTask = false;
  }
  onAddTask(data: AddTaskItem) {

    this.tasksService.addTask(data, this.userId)
    this.isAddingTask = false;
  }
}