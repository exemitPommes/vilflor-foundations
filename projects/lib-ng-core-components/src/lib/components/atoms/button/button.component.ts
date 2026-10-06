import { Component, computed, input, InputSignal } from '@angular/core';
import { CoreInteractiveComponentBase } from '../../../utils/core-interactive-component-base';
import { ButtonType } from './button.types';

@Component({
  selector: 'button[vf-button], a[vf-button]',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  host: {
    '[attr.type]': 'type()',
    '[class.vf-button-loading]': 'isLoading()' 
  }
})
export class ButtonComponent extends CoreInteractiveComponentBase {
  readonly type = input<ButtonType>('button');
  readonly isLoading = input(false);

  override readonly nativeDisabled   = computed(() => {
    return (this.isDisabled() || this.isLoading()) ? '' : null;
  });
}