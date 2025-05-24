import { Component, EventEmitter, Input, input, output, Output, signal } from '@angular/core';
import { Task } from '../models/task.interface';
import { FormsModule } from '@angular/forms';
import { User } from '../models/users.interface';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
 //   @Input({required: true}) userId!: string;
    @Output() add = new EventEmitter<Task>;
    enteredTitle = '';
    enteredDueDate = '';
    enteredSummary = '';
    newTask = output<boolean>();
    sendCancelSignal = output();
    @Input({required: true}) user!: User;
    task: Task;

    ngOnInit() {
    if (this.user) {
      this.task.userId = this.user.id; // Safe access
    } else {
      console.error('User input is undefined in NewTaskComponent');
    }
  }

    constructor(){
      this.task = {
        id: '',
        userId:  this.user.id ? this.user.id : '',
        title: '',
        summary: '',
        dueDate: ''
      };
    }

    onSubmit(){
      this.add.emit(
        this.task
      );
    }

    sendCancel(){
        this.sendCancelSignal.emit();
    }

    
}
