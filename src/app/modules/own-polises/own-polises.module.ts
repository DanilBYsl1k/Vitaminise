import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MyPolisesComponent } from '@modules/own-polises/components/my-polises/my-polises.component';
import { PolisStatusComponent } from '@modules/own-polises/components/polis-status/polis-status.component';
import { OrderRoutingModule } from '@modules/own-polises/own-polises-router.module';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent } from '@shared/stand-component/button/button.component';
import { ProfileComponent } from '@modules/own-polises/components/profile/profile.component';
import { PolisesComponent } from '@modules/own-polises/components/polises/polises.component';

@NgModule({
  declarations: [
    PolisStatusComponent,
    MyPolisesComponent,
    ProfileComponent,
    PolisesComponent,
  ],
  imports: [CommonModule, OrderRoutingModule, TranslateModule, ButtonComponent],
  bootstrap: [],
})
export class OwnPolisesModule {}
