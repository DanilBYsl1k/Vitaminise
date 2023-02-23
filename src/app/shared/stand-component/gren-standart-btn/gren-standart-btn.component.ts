import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'vtm-gren-standart-btn',
  template: `
    <button class="button-geen semibold-raleway">
      {{ label }}
    </button>
  `,
  styleUrls: ['./gren-standart-btn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GrenStandartBtnComponent {
  @Input() label: string;
  constructor(private router: Router) {}
  // redirects() {
  //   this.router.navigate(['question/Бiльше про автоцивілку']);
  // }
}
