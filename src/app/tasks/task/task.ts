import { Component, EventEmitter, inject, Input, Output } from '@angular/core';

import { TaskItem } from './task.model';
import { Card } from "../../shared/card/card";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {

  private tasksService = inject(TasksService)

  @Input({ required: true }) taskItem!: TaskItem

  onTaskComplete() {
    return this.tasksService.removeTask(this.taskItem.id)
  }
}
