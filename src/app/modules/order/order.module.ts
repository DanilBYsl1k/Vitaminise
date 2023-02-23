import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolisPagesComponent } from '@modules/order/components/polis-pages/polis-pages.component';
import { OrderRoutingModule } from '@modules/order/order-routeng.module';
import { BeginPolisComponent } from '@modules/order/components/begin-polis/begin-polis.component';
import { UncorrectPolisDataComponent } from '@modules/order/components/uncorrect-polis-data/uncorrect-polis-data.component';
import { ButtonComponent } from '@shared/stand-component/button/button.component';
import { DataInsuredComponent } from '@modules/order/components/data-insured/data-insured.component';
import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PolisPagesComponent,
    BeginPolisComponent,
    UncorrectPolisDataComponent,
    DataInsuredComponent,
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    ButtonComponent,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class OrderModule {}
