import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
})
export class App {
  email: String = '444444444444444444';
}
