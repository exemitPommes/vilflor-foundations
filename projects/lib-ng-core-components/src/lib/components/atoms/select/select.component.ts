import { Component, computed, contentChildren, forwardRef, input, model, signal } from '@angular/core';
import { CoreInteractiveComponentBase } from '../../../utils/core-interactive-component-base';
import { OptionComponent } from '../option/option.component';
import { VF_SELECT_PARENT, SelectParentI } from './select.token'; 

let nextSelectId = 0;
const MINIMUM_CHILD_INDEX = 0;
const INACTIVE_KEYBOARD_SELECTION = -1;
const OPTION_NAVIGATION_KEYS = ['ArrowDown', 'ArrowUp', 'Enter', ' '];
const TOGGLE_CLOSED = 'closed';
const TOGGLE_OPEN = 'open';

@Component({
    selector: 'vf-select',
    standalone: true,
    styleUrl: './select.component.scss',
    templateUrl: './select.component.html',
    providers: [
        { provide: VF_SELECT_PARENT, 
            useExisting: forwardRef(() => SelectComponent) }
    ],
    host: {
        '[class.vf-select-container]': 'true',
        '(keydown)': 'handleKeydown($event)'
    }
})
export class SelectComponent extends CoreInteractiveComponentBase implements SelectParentI {
    readonly placeholder = input('');
    readonly currentValue = model<string | number | null>('');
    
    readonly popoverId = `vf-select-popover-${nextSelectId++}`;
    
    readonly options = contentChildren(OptionComponent);
    readonly activeIndex = signal<number>(-1); 

    readonly displayText = computed(() => {
        const value = this.currentValue();
        if (!value) {
            return this.placeholder();
        }
        const selectedOption = this.options().find((option) => option.value() === value);
        return selectedOption ? selectedOption.viewValue() : this.placeholder();
    });

    selectOption(newValue: string | number): void {
        this.currentValue.set(newValue);
        
        const popover = document.getElementById(this.popoverId);
        if (popover) {
            popover.hidePopover();
        }
    }

    clearSelection(event: Event): void {
        event.stopPropagation();
        this.currentValue.set(null);
    }

    onPopoverToggle(event: Event): void {
        const toggleEvent = event as ToggleEvent;

        if (toggleEvent.newState === TOGGLE_CLOSED) {
            this.activeIndex.set(INACTIVE_KEYBOARD_SELECTION);
        } 
        if (toggleEvent.newState === TOGGLE_OPEN) {
            const currentValue = this.currentValue();
            const options = this.options();

            if (currentValue) {
                const currentSelectedOptionIndex = options.findIndex((option) => option.value() === currentValue);
                this.activeIndex.set(currentSelectedOptionIndex >= 0 ? currentSelectedOptionIndex : INACTIVE_KEYBOARD_SELECTION);
            }
        }
    }

    handleKeydown(event: KeyboardEvent): void {
        if (this.isDisabled()) {
            return;
        }
        
        const key = event.key;
        if (!OPTION_NAVIGATION_KEYS.includes(key)) {
            return;
        }

        const totalOptions = this.options().length;
        if (totalOptions === 0) {
            return;
        }
        
        const currentActiveIndex = this.activeIndex();

        if ((key === 'Enter' || key === ' ') && currentActiveIndex === INACTIVE_KEYBOARD_SELECTION) {
            return;
        }

        event.preventDefault();

        switch(event.key) {
            case 'ArrowUp':
                let prevIndex = currentActiveIndex === INACTIVE_KEYBOARD_SELECTION ? totalOptions - 1 : currentActiveIndex - 1;
                while (prevIndex >= 0 && this.options()[prevIndex].isDisabled()) {
                    prevIndex--;
                }
                if (prevIndex >= 0) {
                    this.activeIndex.set(prevIndex);
                }
                break;

            case 'ArrowDown':
                let nextIndex = currentActiveIndex === INACTIVE_KEYBOARD_SELECTION ? 0 : currentActiveIndex + 1;
                while (nextIndex < totalOptions && this.options()[nextIndex].isDisabled()) {
                    nextIndex++;
                }
                if (nextIndex < totalOptions) {
                    this.activeIndex.set(nextIndex);
                }
                break;
            case ('Enter') :
            case (' ') :
                if (currentActiveIndex >= 0 && currentActiveIndex < totalOptions) {
                    const keyboardSelectedOption = this.options()[currentActiveIndex];
                    if (!keyboardSelectedOption.isDisabled()) {
                        this.selectOption(keyboardSelectedOption.value());
                    }
                }

                break;
        }
    }

}