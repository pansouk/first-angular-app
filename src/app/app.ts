import { Component } from '@angular/core';
import { Header } from "./header";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
