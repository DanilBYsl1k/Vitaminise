import { NgModule } from '@angular/core';
import { FooterComponent } from '@core/footer/components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { SvgIconRegisterService } from '@core/services/svg-icon-register.service';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, TranslateModule, MatIconModule],
  exports: [FooterComponent],
})
export class FooterModule {
  constructor(private iconRegister: SvgIconRegisterService) {
    this.iconRegister.registerIcons(['facebook', 'instagram', 'youtube']);
  }
}
