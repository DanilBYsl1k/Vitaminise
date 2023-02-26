import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ROUTES } from '@core/constants/routes.constant';
import { QuestionComponent } from '@modules/question/components/question/question.component';
import { InsuranceComponent } from '@modules/question/components/insurance/insurance.component';
import { InfoComponent } from '@modules/question/components/info/info.component';

const questionRoutes: Routes = [
  {
    path: '',
    component: QuestionComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: ROUTES.QUESTION.INFO,
      },
      {
        path: ROUTES.QUESTION.INSURANCE,
        component: InsuranceComponent,
      },
      {
        path: ROUTES.QUESTION.INFO,
        component: InfoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(questionRoutes)],
  exports: [RouterModule],
})
export class QuestionsModule {}
