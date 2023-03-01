import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolisPagesComponent } from '@modules/order/components/polis-pages/polis-pages.component';
import { OrderRoutingModule } from '@modules/order/order-routeng.module';
import { BeginPolisComponent } from '@modules/order/components/begin-polis/begin-polis.component';
import { UncorrectPolisDataComponent } from '@modules/order/components/uncorrect-polis-data/uncorrect-polis-data.component';
import { DataInsuredComponent } from '@modules/order/components/data-insured/data-insured.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PreloaderModule } from '@shared/stand-component/preloader/preloader.module';
import { InputModule } from '@shared/stand-component/input/input.module';
import { ButtonComponent } from '@shared/stand-component/button/button.component';

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
    ReactiveFormsModule,
    PreloaderModule,
    InputModule,
    ButtonComponent,
  ],
})
export class OrderModule {}
