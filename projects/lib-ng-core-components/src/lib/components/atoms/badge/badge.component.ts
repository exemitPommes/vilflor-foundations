import { Component } from '@angular/core';
import { CoreVisualComponentBase } from '../../../utils/core-visual-component-base';

@Component({
    selector: 'vf-badge',
    standalone: true,
    templateUrl: './badge.component.html',
    styleUrl: './badge.component.scss',
    host: {
        '[class.vf-badge-host]': 'true'
    },
}) export class BadgeComponent extends CoreVisualComponentBase {

}