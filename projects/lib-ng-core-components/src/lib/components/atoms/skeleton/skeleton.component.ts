import { Component, input } from '@angular/core';
import { SkeletonType } from './skeleton.types';

@Component({
    selector: 'vf-skeleton',
    standalone: true,
    template: '',
    styleUrl: './skeleton.component.scss',
    host: {
        '[class.vf-skeleton-circle]': 'shape() === "circle"',
        '[class.vf-skeleton-text]': 'shape() === "text"',
        '[class.vf-skeleton-rect]': 'shape() === "rect"',
    }
}) export class SkeletonComponent {
    readonly shape = input<SkeletonType>('text');
}