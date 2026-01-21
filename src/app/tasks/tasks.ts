import { Component, Input } from '@angular/core';
import { Task } from "./task/task";
import { dummyTasks } from '../../dummy-tasks';

@Component({
  selector: 'app-tasks',
  imports: [Task],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {

  tasks = dummyTasks
  @Input({ required: true }) userId !: string
  @Input({ required: true }) name!: string

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId)
  }

}
