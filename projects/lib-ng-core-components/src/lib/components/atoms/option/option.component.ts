import { Component, computed, forwardRef, inject, input, model, output, signal } from '@angular/core';
import { CoreInteractiveComponentBase } from '../../../utils/core-interactive-component-base';
import { SelectComponent } from '../select/select.component';

@Component({
    selector: 'vf-option',
    standalone: true,
    templateUrl: './option.component.html',
    styleUrl: './option.component.scss',
    host: {
        '(click)': 'handleOptionSelected()',
        '[class.vf-option-selected]': 'isSelected()',
        '[attr.role]': '"option"',
    }
})
export class OptionComponent extends CoreInteractiveComponentBase {
    readonly value = input.required<string | number>();
    
    private readonly _select = inject(forwardRef(() => SelectComponent));

    readonly isSelected = computed(() => this.value() === this._select.currentValue());

    handleOptionSelected(): void {
        this._select.selectOption(this.value());
    }

}