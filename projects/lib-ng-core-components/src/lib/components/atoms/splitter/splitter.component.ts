import { Component, input } from '@angular/core';
import { CoreVisualComponentBase } from '../../../utils/core-visual-component-base';

@Component({
    selector: 'vf-splitter',
    standalone: true,
    templateUrl: './splitter.component.html',
    styleUrl: './splitter.component.scss',
    host: {
        '[style.--vf-split-ratio]': 'ratio()'
    }
}) export class SplitterComponent extends CoreVisualComponentBase {
    // Currently a visual component - further functionality will be implemented
    readonly ratio = input<string>('1fr 1fr'); 
}