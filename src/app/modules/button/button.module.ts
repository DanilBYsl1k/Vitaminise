import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import ButtonComponent from '@modules/button/components/button/button.component';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule],
  exports: [ButtonComponent],
})
export default class ButtonModule {

}
