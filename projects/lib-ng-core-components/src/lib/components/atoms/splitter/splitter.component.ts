import { Component, computed, input } from '@angular/core';
import { CoreVisualComponentBase } from '../../../utils/core-visual-component-base';

@Component({
    selector: 'vf-splitter',
    standalone: true,
    templateUrl: './splitter.component.html',
    styleUrl: './splitter.component.scss',
    host: {
        '[style.grid-template-columns]': 'gridColumns()'
    }
}) export class SplitterComponent extends CoreVisualComponentBase {
    // Currently a visual component - further functionality will be implemented
    readonly ratio = input<string>('1fr 1fr');

    readonly gridColumns = computed(() => {
        const parts = this.ratio().trim().split(/\s+/);
        const left = parts[0] || '1fr';
        const right = parts[1] || '1fr';
        
        return `minmax(0, ${left}) auto minmax(0, ${right})`;
    });
}