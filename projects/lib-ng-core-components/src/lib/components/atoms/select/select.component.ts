import { Component, computed, contentChildren, input, model, signal } from '@angular/core';
import { CoreInteractiveComponentBase } from '../../../utils/core-interactive-component-base';
import { OptionComponent } from '../option/option.component';

let nextSelectId = 0;

@Component({
    selector: 'vf-select',
    standalone: true,
    styleUrl: './select.component.scss',
    templateUrl: './select.component.html',
    host: {
        '[class.vf-select-container]': 'true',
    }
})
export class SelectComponent extends CoreInteractiveComponentBase {
    readonly placeholder = input('');
    readonly currentValue = model<string | number | null>('');
    
    readonly popoverId = `vf-select-popover-${nextSelectId++}`;
    
    readonly options = contentChildren(OptionComponent);

    readonly displayText = computed(() => {
        const value = this.currentValue();
        return value ? value : this.placeholder();
    });

    selectOption(newValue: string | number) {
        this.currentValue.set(newValue);
        // Aquí también cerraremos el popover más adelante
    }

}