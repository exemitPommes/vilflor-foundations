import { Component, input, model } from "@angular/core";
import { CoreInteractiveComponentBase } from "../../../utils/core-interactive-component-base";

@Component({
    selector: 'vf-radio',
    standalone: true,
    templateUrl: './radio.component.html',
    styleUrl: './radio.component.scss',
    host: {
        '[class.vf-disabled]': 'isDisabled()',
    }
})
export class RadioComponent extends CoreInteractiveComponentBase {
    readonly value = input.required<string | number>();
    readonly name = input('');
    readonly checked = model(false);

    onToggle(event: Event): void {
        const inputElement = event.target as HTMLInputElement;
        this.checked.set(inputElement.checked);
    }
}