import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from '@core/footer/components/footer.component';
import { HeaderComponent } from '@core/header/header.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [FooterComponent, HeaderComponent],
})
export class CoreModule {}
