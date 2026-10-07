import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { ButtonComponent, CardComponent, CheckboxComponent, InputDirective, InputFormFieldComponent, OptionComponent, RadioComponent, RadioGroupComponent, SelectComponent, SkeletonComponent, BadgeComponent, DropzoneComponent } from 'lib-ng-core-components';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, ReactiveFormsModule, ButtonComponent, CardComponent, InputDirective, InputFormFieldComponent, OptionComponent, SelectComponent, CheckboxComponent, RadioComponent, RadioGroupComponent, SkeletonComponent, BadgeComponent, DropzoneComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('demo-app');
  readonly selectValue = signal<string | number | null>(null);
  readonly checkboxSelected = false;
  readonly nubeSeleccionada = 'googlecloud';
  public fileTransfered: File | null = null;

  miFormulario = new FormGroup({
    nube: new FormControl('vertexai'),
    aceptaTerminos: new FormControl(false),
    pais: new FormControl(null),
    empresa: new FormControl(''),
    documento: new FormControl<File | null>(null)
  });

  public optionSelected(): void {
    console.log('yup, selected')
  }

  public checkingCheckbox(): void {
    console.log('Valor del checked checkbox: ', this.checkboxSelected);
  }

  public printValue(): void {
    console.log('Valor del grupo: ', this.nubeSeleccionada);
  }

  protected verDatos() {
    console.log('Datos del formulario listos para enviar a la IA:', this.miFormulario.value);
  }


  protected fichero(trasferedFile: File): void {
    this.fileTransfered = trasferedFile;
    console.log('Se ha transferido 1 fichero: ', this.fileTransfered);
  }

  protected mostrarAlertaRoja(alerta: string): void {
    console.log(alerta);
  }
}
