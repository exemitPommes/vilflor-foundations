import { Component, model } from "@angular/core";
import { CoreInteractiveComponentBase } from "../../../utils/core-interactive-component-base";

@Component({
    selector: 'vf-checkbox',
    styleUrl: './checkbox.component.scss',
    templateUrl: './checkbox.component.html',
    standalone: true,
    host: {
        '[class.vf-disabled]': 'isDisabled()',
    }
})
export class CheckboxComponent extends CoreInteractiveComponentBase {
    checked = model(false);

    onToggle(event: Event): void {
        const inputElement = event.target as HTMLInputElement;
        this.checked.set(inputElement.checked);
    }
}