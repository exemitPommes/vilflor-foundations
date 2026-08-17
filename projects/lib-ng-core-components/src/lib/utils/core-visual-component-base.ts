import { Directive, input, computed } from '@angular/core';
import { ComponentSize, ComponentVariant } from './component.types';

let nextUniqueId = 0;

@Directive({
  host: {
    '[attr.id]': 'hostId()',
    '[attr.data-id]': 'dataId()',
    '[class]': 'baseClasses()'
  }
})
export abstract class CoreVisualComponentBase {
  readonly variant = input<ComponentVariant>('primary');
  readonly size = input<ComponentSize>('md');
  readonly id = input<string>();
  readonly dataId = input<string>();

  private readonly _generatedId = `core-id-${nextUniqueId++}`;

  readonly hostId = computed(() => this.id() ?? this._generatedId);
  
  readonly baseClasses = computed(() => {
    return `core-variant-${this.variant()} core-size-${this.size()}`;
  });
}