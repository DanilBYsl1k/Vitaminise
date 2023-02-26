import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'vtm-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoComponent {}
