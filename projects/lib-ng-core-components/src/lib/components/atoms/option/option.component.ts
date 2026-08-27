import { Component, input, model, output } from '@angular/core';
import { CoreInteractiveComponentBase } from '../../../utils/core-interactive-component-base';

@Component({
    selector: 'vf-option',
    standalone: true,
    templateUrl: './option.component.html',
    styleUrl: './option.component.scss',
    host: {
        '(click)': 'handleOptionSelected()',
        '[class.vf-option-selected]': 'isSelected',
        '[attr.role]': '"option"',
    }
})
export class OptionComponent extends CoreInteractiveComponentBase {
    value = input.required();
    selected = output<void>();

    isSelected = false;
    //value = model(''); //para controlar e valueChange tambien pero devolvemos el mismo codigo?
    //non sense, value cambiara en cuanto el developer le asigne un valor al montar el componente

    handleOptionSelected(): void {
        this.isSelected = true;
        this.selected.emit();
    }
    
}