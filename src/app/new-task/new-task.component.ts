import { Component, EventEmitter, inject, Input, output, Output } from '@angular/core';
import { Task } from '../models/task.interface';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
    @Input({required: true}) userId!: string;
    enteredTitle = '';
    enteredDueDate = '';
    enteredSummary = '';
    newTask = output<boolean>();
    sendCancelSignal = output();
    private tasksService = inject(TasksService);

    constructor(){
    }

    onSubmit(){
      let task: Task = {
        userId: this.userId,
        id: crypto.randomUUID(),
        title: this.enteredTitle,
        summary: this.enteredSummary,
        dueDate: this.enteredDueDate
      }
      this.tasksService.addNewTask(task);
      this.sendCancelSignal.emit();
    }

    sendCancel(){
        this.sendCancelSignal.emit();
    }    
}
