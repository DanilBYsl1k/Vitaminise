import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from '@modules/welcome/components/welcome/welcome.component';

const welcomeRoutes: Routes = [{ path: '', component: WelcomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(welcomeRoutes)],
  exports: [RouterModule],
})
export class WelcomeRoutingModule {}
