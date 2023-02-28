import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'vtm-button',
  template: `
    <button
      [class]="type"
      [disabled]="disabled"
      (click)="submitted.emit()"
      class="bold-raleway"
    >
      <ng-content></ng-content>
      {{ label }}
    </button>
  `,
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ButtonComponent {
  @Input() label!: string;
  @Input() type!: 'primary' | 'secondary' | 'other' | 'link';
  @Input() disabled: boolean = false;
  @Input() img: boolean = false;

  @Output() submitted = new EventEmitter<void>();
}
