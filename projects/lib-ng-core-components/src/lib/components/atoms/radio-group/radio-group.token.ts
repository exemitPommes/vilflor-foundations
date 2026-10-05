import { InjectionToken, ModelSignal, Signal } from '@angular/core';

export interface RadioGroupI {
    name: () => string;
    value: ModelSignal<string | number | null>;
    isDisabled: Signal<boolean>;
    selectRadio(newValue: string | number): void;
}

export const VF_RADIO_GROUP = new InjectionToken<RadioGroupI>('VF_RADIO_GROUP');