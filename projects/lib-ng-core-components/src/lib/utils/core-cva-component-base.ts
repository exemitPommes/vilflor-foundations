import { Directive, inject, model, effect, untracked } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { CoreInteractiveComponentBase } from './core-interactive-component-base';

@Directive()
export abstract class CoreCvaComponentBase<T> extends CoreInteractiveComponentBase implements ControlValueAccessor {
    readonly value = model<T | null>(null);

    onChange = (value: T | null) => {};
    onTouched = () => {};

    readonly ngControl = inject(NgControl, { optional: true, self: true });

    constructor() {
        super();
        if (this.ngControl) {
            this.ngControl.valueAccessor = this;
        }
    }

    updateValue(newValue: T | null): void {
        this.value.set(newValue);
        this.onChange(newValue);
        this.onTouched();
    }

    writeValue(obj: T | null): void {
        this.value.set(obj);
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }
}