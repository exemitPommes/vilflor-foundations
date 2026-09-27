import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent, CardComponent, InputDirective, InputFormFieldComponent, OptionComponent, SelectComponent, CheckboxComponent, RadioComponent } from 'lib-ng-core-components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent, CardComponent, InputDirective, InputFormFieldComponent, OptionComponent, SelectComponent, CheckboxComponent, RadioComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('demo-app');
  readonly selectValue = signal<string | number | null>(null);
  readonly checkboxSelected = false;
  readonly radioVSelected = false;
  readonly radioGSelected = false;

  public optionSelected(): void {
    console.log('yup, selected')
  }

  public checkingCheckbox(): void {
    console.log('Valor del checked checkbox: ', this.checkboxSelected);
  }
}
