import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import FooterComponent from '@core/footer/components/footer.component';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [FooterComponent],
})
export default class FooterModule {}
