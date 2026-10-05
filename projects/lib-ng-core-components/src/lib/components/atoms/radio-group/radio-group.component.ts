import { Component, forwardRef, input, model } from '@angular/core';
import { CoreInteractiveComponentBase } from '../../../utils/core-interactive-component-base';
import { RadioGroupI, VF_RADIO_GROUP } from './radio-group.token';
import { RadioGroupOrientation } from './radio-group.types';

@Component({
    selector: 'vf-radio-group',
    standalone: true,
    templateUrl: './radio-group.component.html',
    styleUrl: './radio-group.component.scss',
    providers: [
        { provide: VF_RADIO_GROUP, useExisting: forwardRef(() => RadioGroupComponent) }
    ],
    host: {
        '[attr.role]': '"radiogroup"',
        '[class.vf-radio-group-vertical]': 'orientation() === "vertical"',
        '[class.vf-radio-group-horizontal]': 'orientation() === "horizontal"',
        '[class.vf-disabled]': 'isDisabled()',
    },
})
export class RadioGroupComponent extends CoreInteractiveComponentBase implements RadioGroupI {
    readonly name = input<string>(`vf-radio-group-${Math.random().toString(36).substring(2)}`);
    readonly orientation = input<RadioGroupOrientation>('vertical');
    readonly value = model<string | number | null>(null);

    selectRadio(newValue: string | number): void {
        this.value.set(newValue);
    }
}