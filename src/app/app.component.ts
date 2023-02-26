import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'vtm-root',
  template: `
    <vtm-layout-default></vtm-layout-default>
  `,
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
