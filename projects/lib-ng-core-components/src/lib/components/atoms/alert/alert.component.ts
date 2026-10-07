import { Component, input } from '@angular/core';
import { CoreVisualComponentBase } from '../../../utils/core-visual-component-base';

@Component({
    selector: 'vf-alert',
    standalone: true,
    templateUrl: './alert.component.html',
    styleUrl: './alert.component.scss',
    host: {
        '[class.vf-alert-host]': 'true'
    }
}) export class AlertComponent extends CoreVisualComponentBase {
    readonly title = input<string>();
}