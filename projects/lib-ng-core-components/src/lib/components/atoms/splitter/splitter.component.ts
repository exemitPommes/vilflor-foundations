import { Component, input } from '@angular/core';

@Component({
    selector: 'vf-splitter',
    standalone: true,
    templateUrl: './splitter.component.html',
    styleUrl: './splitter.component.scss',
    host: {
        '[style.--vf-split-ratio]': 'ratio()'
    }
}) export class SplitterComponent {
    readonly ratio = input<string>('1fr 1fr'); 
}