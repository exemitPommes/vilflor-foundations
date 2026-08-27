import { Directive, input, signal } from '@angular/core';
import { CoreInteractiveComponentBase } from '../../../utils/core-interactive-component-base';

export type InputType = 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search';

@Directive({
    selector: 'input[vf-input], textarea[vf-input]',
    standalone: true,
    host: {
        '[class.vf-input-native]': 'true',
        '(focus)': 'isFocused.set(true)',
        '(blur)': 'isFocused.set(false)',
        '[attr.type]': 'type()'
    }
})
export class InputDirective extends CoreInteractiveComponentBase {
    readonly isFocused = signal(false);
    readonly type = input<InputType>('text');
}