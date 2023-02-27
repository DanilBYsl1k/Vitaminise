import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputControlComponent } from '@shared/stand-component/input/input-control/input-control.component';

@NgModule({
  declarations: [InputControlComponent],
  imports: [CommonModule, FormsModule],
  exports: [InputControlComponent],
})
export class InputModule {}
