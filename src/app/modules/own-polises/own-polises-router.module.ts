import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from '@app/core/constants/routes.constant';
import { MyPolisesComponent } from '@modules/own-polises/components/my-polises/my-polises.component';
import { PolisStatusComponent } from '@modules/own-polises/components/polis-status/polis-status.component';
import { ProfileComponent } from '@modules/own-polises/components/profile/profile.component';
import { PolisesComponent } from '@modules/own-polises/components/polises/polises.component';

const routes: Routes = [
  {
    path: '',
    component: MyPolisesComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'polises' },
      { path: ROUTES.USERPOLISES.POLISES, component: PolisesComponent },
      { path: ROUTES.USERPOLISES.PROFILE, component: ProfileComponent },
    ],
  },
  { path: ROUTES.USERPOLISES.STATUS, component: PolisStatusComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderRoutingModule {}
