import { InjectionToken, ModelSignal, Signal } from '@angular/core';
import { OptionComponent } from '../option/option.component';

export interface SelectParentI {
    currentValue: ModelSignal<string | number | null>;
    activeIndex: Signal<number>;
    options: Signal<readonly OptionComponent[]>;
    selectOption(newValue: string | number): void;
}

export const VF_SELECT_PARENT = new InjectionToken<SelectParentI>('VF_SELECT_PARENT');