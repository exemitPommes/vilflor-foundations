import { Component, computed, ElementRef, forwardRef, inject, input, model, output, Signal, signal } from '@angular/core';
import { CoreInteractiveComponentBase } from '../../../utils/core-interactive-component-base';
import { VF_SELECT_PARENT } from '../select/select.token';

@Component({
    selector: 'vf-option',
    standalone: true,
    templateUrl: './option.component.html',
    styleUrl: './option.component.scss',
    host: {
        '(click)': 'handleOptionSelected()',
        '(mouseenter)': 'handleMouseEnter()',
        '[class.vf-option-selected]': 'isSelected()',
        '[attr.role]': '"option"',
        '[class.vf-option-active]': 'isActive()',
    }
})
export class OptionComponent extends CoreInteractiveComponentBase {
    readonly value = input.required<string | number>();
    
    private readonly _select = inject(VF_SELECT_PARENT);
    private readonly _optionElement = inject(ElementRef);

    readonly optionPosition = computed(() => this._select.options().indexOf(this));

    readonly isActive = computed(() => this.optionPosition() === this._select.activeIndex());
    readonly isSelected = computed(() => this.value() === this._select.currentValue());

    handleOptionSelected(): void {
        if (this.isDisabled()) {
            return;
        }
        this._select.selectOption(this.value());
    }
    
    handleMouseEnter(): void {
        if (this.isDisabled()) {
            return;
        }
        this._select.activeIndex.set(this.optionPosition());
    }
    
    viewValue(): string {
        return this._optionElement.nativeElement.textContent?.trim() || '';
    }

}