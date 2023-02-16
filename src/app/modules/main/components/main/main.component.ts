import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'vtm-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class MainComponent {
  text = {
    whatNeedYou: ' Все що вам потрібно за кілька кліків просто зараз',
    greatings: ' Вітаємо у Вітамінайз. Що ви бажаєте зробити ',
    buyCarPolicy: ' Придбати поліс ',
    knowMore: ' Дізнатись більше про сервіс ',
    lookMyinsurances: ' Переглянути мої страховки ',
    sendApplication: 'Подати заявку',
    back: 'Повернутися на головну',
  };

  // eslint-disable-next-line class-methods-use-this
  clickBtn(): void {
    // something do....
  }
}
