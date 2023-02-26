import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from '@modules/welcome/welcome-routing.module';
import { WelcomeComponent } from '@modules/welcome/components/welcome/welcome.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [CommonModule, WelcomeRoutingModule, TranslateModule],
})
export class WelcomeModule {}
