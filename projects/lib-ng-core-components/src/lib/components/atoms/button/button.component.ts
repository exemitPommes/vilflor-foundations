import { Component, Input } from '@angular/core';
import { CoreComponentBase } from '../../../utils/core-component-base';

export type ButtonType = 'button' | 'submit' | 'reset'; 

@Component({
  selector: 'button[vf-button], a[vf-button]',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent extends CoreComponentBase {
  @Input() type: ButtonType = 'button';
}