import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../models/task.interface';
import { CardComponent } from "../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;

  constructor(private tasksService: TasksService){}

  onCompletedTask(){
    this.tasksService.completeTask(this.task.id);
  }
}
