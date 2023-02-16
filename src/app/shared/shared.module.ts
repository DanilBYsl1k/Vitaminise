import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OrangeBtnComponent } from '@shared/components/orange-btn/orange-btn.component';

@NgModule({
  declarations: [OrangeBtnComponent],
  imports: [CommonModule],
  exports: [OrangeBtnComponent],
})
export class SharedModule {}
