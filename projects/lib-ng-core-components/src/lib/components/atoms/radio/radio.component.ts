import { Component, computed, inject, input, model } from '@angular/core';
import { CoreInteractiveComponentBase } from '../../../utils/core-interactive-component-base';
import { VF_RADIO_GROUP } from '../radio-group/radio-group.token';

@Component({
    selector: 'vf-radio',
    standalone: true,
    templateUrl: './radio.component.html',
    styleUrl: './radio.component.scss',
    host: {
        '[class.vf-disabled]': 'isGloballyDisabled()',
    }
})
export class RadioComponent extends CoreInteractiveComponentBase {
    readonly value = input.required<string | number>();
    private readonly _group = inject(VF_RADIO_GROUP, { optional: true });
    readonly name = computed(() => this._group ? this._group.name() : 'vf-default-radio');
    readonly isChecked = computed(() => {
        if(this._group) {
            return this._group.value() === this.value();
        }
        return false;
    });

    readonly isGloballyDisabled = computed(() => {
        const groupDisabled = this._group ? this._group.isDisabled() : false;
        return this.isDisabled() || groupDisabled;
    });

    onToggle(): void {
        if (this.isGloballyDisabled()) {
            return;
        }
        this._group?.selectRadio(this.value());
    }
}