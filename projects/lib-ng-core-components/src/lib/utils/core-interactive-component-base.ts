import { Directive, input, computed } from '@angular/core';
import { CoreVisualComponentBase } from './core-visual-component-base';

@Directive({
  host: {
    '[attr.aria-label]': 'ariaLabel()',
    '[attr.tabindex]': 'hostTabIndex()',
    '[attr.disabled]': 'nativeDisabled()',
    '[class.core-disabled]': 'isDisabled()'
  }
})
export abstract class CoreInteractiveComponentBase extends CoreVisualComponentBase {
  readonly isDisabled = input(false);
  readonly ariaLabel = input<string>();
  readonly tabIndex = input<number>();

  readonly hostTabIndex = computed(() => this.tabIndex() ?? null);
  
  readonly nativeDisabled = computed(() => {
    return this.isDisabled() ? '' : null;
  });
}