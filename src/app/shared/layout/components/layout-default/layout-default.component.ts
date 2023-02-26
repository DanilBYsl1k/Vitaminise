import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'vtm-layout-default',
  templateUrl: './layout-default.component.html',
  styleUrls: ['./layout-default.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutDefaultComponent {}
