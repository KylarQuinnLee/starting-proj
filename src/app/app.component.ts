import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './app-tasks/app-tasks.component';
import { User } from './models/users.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, UserComponent, TasksComponent],
})
export class AppComponent {
  users = DUMMY_USERS;
  selected: User = { id: '', name: '', avatar: '' };

  get selectedUser() {
    return this.users.find((user) => user.id === this.selected?.id);
  }

  onSelectUser(user: User) {
    this.selected = user;
  }
}
