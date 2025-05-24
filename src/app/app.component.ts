import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { AppTasksComponent } from './app-tasks/app-tasks.component';
import { User } from './models/users.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, UserComponent, AppTasksComponent],
})
export class AppComponent {
  users = DUMMY_USERS;
  @Output() name = new EventEmitter<User>();
  newTaskComplete = signal(true);
  selectedUser!: User;
  private changeDetection!: ChangeDetectionStrategy;

constructor(){
}

  get isSelectedUser() {
    return this.users.find((user) => user.id === this.selectedUser?.id);
  }

  get selectedUserId(){
    return this.selectedUser?.id;
  }

  onSelectUser(user: User) {
    console.log("newTaskCompleted: " + this.newTaskComplete);
    console.log("selectedName: " + user.name);
    this.selectedUser = user;
  }
}