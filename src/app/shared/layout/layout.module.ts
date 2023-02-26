import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterModule } from '@core/footer/footer.module';

import { LayoutDefaultComponent } from '@shared/layout/components/layout-default/layout-default.component';

@NgModule({
  declarations: [LayoutDefaultComponent],
  imports: [CommonModule, RouterOutlet, FooterModule],
  exports: [LayoutDefaultComponent],
})
export class LayoutModule {}
