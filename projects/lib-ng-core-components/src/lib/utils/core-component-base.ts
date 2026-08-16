import { Input, HostBinding, Directive } from '@angular/core';
import { ComponentSize, ComponentVariant} from './component.types';

let nextUniqueId = 0;

@Directive()
export abstract class CoreComponentBase {
  @Input() variant: ComponentVariant = 'primary';
  @Input() size: ComponentSize = 'md';
  @Input() isDisabled = false;
  @Input() ariaLabel?: string;
  @Input() id?: string;
  @Input() dataId?: string;
  @Input() tabIndex?: number;

  private _generatedId = `core-${nextUniqueId++}`;

  @HostBinding('attr.id') get hostId() {
    return this.id ?? this._generatedId;
  }

  @HostBinding('attr.data-id') get hostDataId() {
    return this.dataId ?? null;
  }

  @HostBinding('attr.aria-label') get hostAriaLabel() {
    return this.ariaLabel ?? null;
  }

  @HostBinding('attr.tabindex') get hostTabIndex() {
    return this.tabIndex ?? (this.isDisabled ? -1 : 0);
  }

  @HostBinding('class') get hostClasses() {
    const classes = [
      `core-variant-${this.variant}`,
      `core-size-${this.size}`,
    ];

    if (this.isDisabled) classes.push('core-disabled');

    return classes.join(' ');
  }
}
