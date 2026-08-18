import { Component } from '@angular/core';
import { CoreVisualComponentBase } from '../../../utils/core-visual-component-base';

@Component({
    selector: 'vf-card',
    standalone: true,
    styleUrl: './card.component.scss',
    templateUrl: './card.component.html'
})
export class CardComponent extends CoreVisualComponentBase {}