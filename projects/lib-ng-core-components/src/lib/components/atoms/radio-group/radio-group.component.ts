import { Component, forwardRef, input } from '@angular/core';
import { CoreCvaComponentBase } from '../../../utils/core-cva-component-base';
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
export class RadioGroupComponent extends CoreCvaComponentBase<string | number> implements RadioGroupI {
    readonly name = input<string>(`vf-radio-group-${Math.random().toString(36).substring(2)}`);
    readonly orientation = input<RadioGroupOrientation>('vertical');

    selectRadio(newValue: string | number): void {
        this.updateValue(newValue);
    }
}