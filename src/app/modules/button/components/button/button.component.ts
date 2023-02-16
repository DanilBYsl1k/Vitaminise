import {
  ChangeDetectionStrategy, Component, EventEmitter, Input, Output,
} from '@angular/core';

@Component({
  selector: 'vtm-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ButtonComponent {
  @Input()nameQuestion!: string;

  @Output() newItemEvent = new EventEmitter<object>();

  addNewItem(value: object) {
    this.newItemEvent.emit(value);
  }
}
