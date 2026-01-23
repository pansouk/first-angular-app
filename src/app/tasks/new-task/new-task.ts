import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddTaskItem } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<AddTaskItem>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  
  onCancel() {
    this.cancel.emit();
  }

  onSubmitTask() {
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    });
  }
}


