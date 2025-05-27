import { Injectable } from '@angular/core';
import { Task } from '../models/task.interface';

@Injectable({
  providedIn: 'root',
})
export class TasksService {  
  completedTasks: string[];
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
  }

  completeTask(id: string) {
    this.completedTasks.push(id);
  }

  getUserTasks(id?: string) {
    return this.dummyTasks.filter(
      (task) =>
        task.userId === id &&
        !this.completedTasks.find((completedTask) => completedTask === task.id)
    );
  }

  addNewTask(task: Task) {
    this.dummyTasks.push(task);
  }
}
