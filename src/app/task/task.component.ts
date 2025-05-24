import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../models/task.interface';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() completedTask = new EventEmitter<string>();


  onCompletedTask(){
    this.completedTask.emit(this.task.id);
  }
}
