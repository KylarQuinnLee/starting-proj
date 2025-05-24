import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../models/users.interface';
import { TaskComponent } from '../task/task.component';
import { Task } from '../models/task.interface';
import { NewTaskComponent } from '../new-task/new-task.component';

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
  completedTasks!: string[];
  dummyTasks: Task[] = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  constructor() {
    this.completedTasks = [];
    this.isAddingTask = false;
  }

  get selectedUserTasks() {
    return this.dummyTasks.filter(
      (task) =>
        task.userId === this.user.id &&
        !this.completedTasks.find((completedTask) => completedTask === task.id)
    );
  }

  onCompletedTask(id: string) {
    this.completedTasks.push(id);
  }

  onAddTask() {
    // listens to click, then conditionally display a new component somewhere on the screen that accepts creating a new task.
    this.isAddingTask = true;
    this.newTask.emit(true);
  }

  addNewTask(task: Task) {
    task.userId = this.user?.id ? this.user.id : '';
    this.dummyTasks.push(task);
    this.isAddingTask = false;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }
}
