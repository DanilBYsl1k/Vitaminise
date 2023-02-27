import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'vtm-button-route',
  templateUrl: './button-route.component.html',
  styleUrls: ['./button-route.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ButtonRouteComponent {
  @Input() label: string;
  @Input() disabled? = false;
}
