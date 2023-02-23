import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  OnInit,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'vtm-input-control',
  template: `
    <div class="input-field">
      <label>{{ label }}</label>
      <input
        [(ngModel)]="value"
        [class.invalid]="invalid"
        (ngModelChange)="onChange($event)"
        type="text"
        class="{{ label }}"
        [placeholder]="placeholder"
      />
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./input-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputControlComponent),
      multi: true,
    },
  ],
})
export class InputControlComponent<T = string> implements ControlValueAccessor {
  @Input() label: string;
  @Input() invalid: boolean;
  @Input() placeholder: string = '';

  control: FormControl = new FormControl('');
  value: any;

  onChange!: (value: T) => void;

  private onTouched!: () => void;

  registerOnValidatorChange?(fn: () => void): void {}

  setDisabledState?(isDisabled: boolean): void {}

  writeValue(value: T): void {
    this.control.patchValue(value);
  }

  registerOnChange(fn: (value: T) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => T): void {
    this.onTouched = fn;
  }
}
