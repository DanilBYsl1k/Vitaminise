import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '@modules/main/components/main/main.component';
import { MainQuestionsPagesComponent } from '@modules/main/components/main-questions/main-questions.component';
import { SivilkaInfoComponent } from '@modules/main/components/sivilka-info/sivilka-info.component';
import { QuestionComponent } from '@modules/main/components/question/question.component';

const question = 'question';
const buyPolis = 'buy-polis';

const routes: Routes = [
  { path: '', component: MainComponent },
  {
    path: question,
    component: MainQuestionsPagesComponent,
    children: [
      { path: '', component: QuestionComponent },
      { path: 'sivilka', component: SivilkaInfoComponent },
    ],
  },
  {
    path: buyPolis,
    loadChildren: () =>
      import('@modules/order/order.module').then((m) => m.OrderModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
