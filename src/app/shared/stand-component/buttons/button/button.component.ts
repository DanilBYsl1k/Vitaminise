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
      {{ label }}
    </button>
  `,
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ButtonComponent {
  @Input() label!: string;
  @Input() type!: 'primary' | 'secondary';
  @Input() disabled: boolean = false;

  @Output() submitted = new EventEmitter<void>();
}
