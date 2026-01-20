import { Component } from '@angular/core';
import { Header } from "./header/header";
import { User } from './user/user';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, User],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  users = DUMMY_USERS

  onSelectUser(id: string) {
    console.log(`Select user with ID: ${id}`)
  }
}
