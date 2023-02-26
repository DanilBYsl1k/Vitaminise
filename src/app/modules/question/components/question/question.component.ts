import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'vtm-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionComponent {}
