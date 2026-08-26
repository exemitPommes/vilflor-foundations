import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent, CardComponent } from 'lib-ng-core-components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, CardComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('demo-app');
}
