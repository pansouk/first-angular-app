import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

interface TheUser {
  id: string
  avatar: string
  name: string
}

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {


  @Input({ required: true }) user !: TheUser


  @Output() select = new EventEmitter<string>()

  get imagePath() {
    return 'assets/users/' + this.user.avatar
  }

  onSelectUser() {
    this.select.emit(this.user.id)
  }
}
