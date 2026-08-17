import { Component, HostBinding, Input } from '@angular/core';
import { CoreInteractiveComponentBase } from '../../../utils/core-interactive-component-base';

export type ButtonType = 'button' | 'submit' | 'reset'; 

@Component({
  selector: 'button[vf-button], a[vf-button]',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent extends CoreInteractiveComponentBase {
  @Input() type: ButtonType = 'button';

  @HostBinding('attr.type') get hostType() {
    return this.type;
  }
}