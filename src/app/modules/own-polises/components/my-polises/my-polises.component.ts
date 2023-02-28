import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'vtm-my-polises',
  templateUrl: './my-polises.component.html',
  styleUrls: ['./my-polises.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyPolisesComponent {
  user = 'микрочелик';
  dateBegin = new Date('1995-12-17T03:24:00');
  dateEnding = new Date();
}
