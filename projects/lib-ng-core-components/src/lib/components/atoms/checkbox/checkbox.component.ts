import { Component, model } from "@angular/core";
import { CoreCvaComponentBase } from "../../../utils/core-cva-component-base";

@Component({
    selector: 'vf-checkbox',
    styleUrl: './checkbox.component.scss',
    templateUrl: './checkbox.component.html',
    standalone: true,
    host: {
        '[class.vf-disabled]': 'isDisabled()',
    }
})
export class CheckboxComponent extends CoreCvaComponentBase<boolean> {
    onToggle(event: Event): void {
        const inputElement = event.target as HTMLInputElement;
        this.updateValue(inputElement.checked);
    }
}