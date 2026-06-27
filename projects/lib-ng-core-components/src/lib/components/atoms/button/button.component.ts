import { Component } from '@angular/core';
import { CoreComponentBase } from '../../../utils/core-component-base';

@Component({
  selector: 'Button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent extends CoreComponentBase {}
