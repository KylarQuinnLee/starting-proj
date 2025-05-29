import { Component, Input } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { NewTaskComponent } from '../new-task/new-task.component';
import { TasksService } from '../services/tasks.service';
import { Task } from '../models/task.interface';
import { User } from '../models/users.interface';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './app-tasks.component.html',
  styleUrl: './app-tasks.component.css',
  imports: [TaskComponent, NewTaskComponent],
})
export class TasksComponent {
  @Input({ required: true }) user!: User;
  isAddingTask = false;
  
  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.user.id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: Task) {
    this.isAddingTask = false;
  }
}