import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent, CardComponent, InputDirective, InputFormFieldComponent, OptionComponent, SelectComponent } from 'lib-ng-core-components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, CardComponent, InputDirective, InputFormFieldComponent, OptionComponent, SelectComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('demo-app');
  readonly selectValue = signal<string | number | null>(null);

  public optionSelected(): void {
    console.log('yup, selected')
  }
}
