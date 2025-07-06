import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GiaoDien } from './giao-dien/giao-dien';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GiaoDien],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'my-angular-app';
}
