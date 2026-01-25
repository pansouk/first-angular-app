import { Component, EventEmitter, Input, Output } from '@angular/core';

import { TaskItem } from './task.model';
import { Card } from "../../shared/card/card";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({ required: true }) taskItem!: TaskItem
  @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    this.complete.emit(this.taskItem.id);
  }
}
