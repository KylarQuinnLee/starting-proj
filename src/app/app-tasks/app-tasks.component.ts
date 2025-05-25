import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../models/users.interface';
import { TaskComponent } from '../task/task.component';
import { Task } from '../models/task.interface';
import { NewTaskComponent } from '../new-task/new-task.component';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './app-tasks.component.html',
  styleUrl: './app-tasks.component.css',
})
export class AppTasksComponent {
  @Input({ required: true }) user!: User;
  @Output() newTask = new EventEmitter<boolean>();
  isAddingTask: boolean;
  private taskService: TasksService;

  constructor() {
    this.isAddingTask = false;
    this.taskService = new TasksService;
  }

  get selectedUserTasks() {
    return this.taskService.getSelectedUserTasks(this.user?.id);
  }

  get tasks(){
    return this.taskService.dummyTasks;
  }

  onCompletedTask(id: string) {
    this.taskService.completeTask(id);
  }

  onAddTask() {
    this.isAddingTask = true;
    this.newTask.emit(true);
  }

  addNewTask(task: Task) {
    task.userId = this.user?.id ? this.user.id : '';
    this.taskService.addNewTask(task)
    this.isAddingTask = false;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }
}
