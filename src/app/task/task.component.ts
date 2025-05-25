import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../models/task.interface';
import { CardComponent } from "../shared/card/card.component";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
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
