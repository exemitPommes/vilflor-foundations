import { Component, computed, contentChild } from '@angular/core';
import { CoreVisualComponentBase } from '../../../utils/core-visual-component-base';
import { InputDirective } from './input.directive';

@Component({
    selector: 'vf-input-form-field',
    standalone: true,
    styleUrl: './input-form-field.component.scss',
    templateUrl: './input-form-field.component.html',
    host: {
        '[class.vf-form-field-focused]': 'focused()',
        '[class.vf-form-field-disabled]': 'disabled()'
    },
})
export class InputFormFieldComponent extends CoreVisualComponentBase {
    readonly inputDirective = contentChild.required(InputDirective);

    readonly focused = computed(() => this.inputDirective()?.isFocused() ?? false);
    readonly disabled = computed(() => this.inputDirective()?.isDisabled() ?? false);

}