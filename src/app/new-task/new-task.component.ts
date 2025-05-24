import { Component, EventEmitter, Input, input, output, Output, signal } from '@angular/core';
import { Task } from '../models/task.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
    @Output() add = new EventEmitter<Task>;
    enteredTitle = '';
    enteredDueDate = '';
    enteredSummary = '';
    newTask = output<boolean>();
    sendCancelSignal = output();

    constructor(){
    }

    onSubmit(){
      let task: Task = {
        userId: '',
        id: crypto.randomUUID(),
        title: this.enteredTitle,
        summary: this.enteredSummary,
        dueDate: this.enteredDueDate
      }
      this.add.emit(
        task
      );
    }

    sendCancel(){
        this.sendCancelSignal.emit();
    }

    
}
