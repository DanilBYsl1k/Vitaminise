import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'vtm-orange-btn',
  templateUrl: './orange-btn.component.html',
  styleUrls: ['./orange-btn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrangeBtnComponent {
  @Input()textBtn!:string;
}
