import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'vtm-main-questions',
  templateUrl: './main-questions.component.html',
  styleUrls: ['./main-questions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainQuestionsComponent {}
