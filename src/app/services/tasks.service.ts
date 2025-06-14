import { Injectable } from '@angular/core';
import { Task } from '../models/task.interface';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
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
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.dummyTasks = JSON.parse(tasks);
    } else {
      this.saveTasks();
    }
  }
  
  saveTasks() {
    localStorage.setItem('tasks', this.dummyTasks.toString());
  }

  completeTask(id: string) {
    this.dummyTasks = this.dummyTasks.filter((task) => task.id !== id);
    this.saveTasks();
  }

  getUserTasks(id?: string) {
    return this.dummyTasks.filter((task) => task.userId === id);
  }

  addNewTask(task: Task) {
    this.dummyTasks.push(task);
    this.saveTasks();
  }
}
