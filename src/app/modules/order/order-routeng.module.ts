import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PolisPagesComponent } from '@modules/order/components/polis-pages/polis-pages.component';
import { BeginPolisComponent } from '@modules/order/components/begin-polis/begin-polis.component';
import { UncorrectPolisDataComponent } from '@modules/order/components/uncorrect-polis-data/uncorrect-polis-data.component';
import { DataInsuredComponent } from '@modules/order/components/data-insured/data-insured.component';

const routes: Routes = [
  {
    path: '',
    component: PolisPagesComponent,
    children: [
      { path: '', component: BeginPolisComponent },
      { path: 'uncorrect-data', component: UncorrectPolisDataComponent },
      { path: 'data-insuranse', component: DataInsuredComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderRoutingModule {}
// children: [{}]
