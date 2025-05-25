import { Component, computed, signal, Input, input, Output, EventEmitter, output } from '@angular/core';
import { User } from '../models/users.interface';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent],
})
export class UserComponent {
  //  @Input({ required: true }) avatar!: string;
  //  @Input({ required: true }) name!: string;
  // @Input({ required: true }) id!: string;
  // id = input.required<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();

  @Input({ required: true }) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<User>();
  //select = output<string>();

  imagePath = computed(() => {
    return 'assets/users/' + this.user.avatar;
  });

  onSelectUser() {
    this.select.emit(this.user);
  }
}