import { Component, input } from '@angular/core';
import { CoreInteractiveComponentBase } from '../../../utils/core-interactive-component-base';

export type ButtonType = 'button' | 'submit' | 'reset'; 

@Component({
  selector: 'button[vf-button], a[vf-button]',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  host: {
    '[attr.type]': 'type()',
  }
})
export class ButtonComponent extends CoreInteractiveComponentBase {
  readonly type = input<ButtonType>('button');
}