import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from '@core/constants/routes.constant';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@modules/welcome/welcome.module').then((m) => m.WelcomeModule),
  },
  {
    path: ROUTES.QUESTION.MAIN,
    loadChildren: () =>
      import('@modules/question/question.module').then((m) => m.QuestionModule),
  },
  {
    path: ROUTES.QUESTION.INSURANCE,
    loadChildren: () =>
      import('@modules/order/order.module').then((m) => m.OrderModule),
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
