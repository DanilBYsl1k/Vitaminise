import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import MainQuestionsComponent from '@modules/main/components/main-questions/main-questions.component';
import { MainComponent } from '@modules/main/components/main/main.component';
import { SharedModule } from '@shared/shared.module';
import { ButtonModule } from '@modules/button/button.module';
import { CoreModule } from '@core/core.module';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'main/question', component: MainQuestionsComponent },
];

@NgModule({
  declarations: [MainComponent, MainQuestionsComponent],
  imports: [
    CommonModule,
    ButtonModule,
    SharedModule,
    RouterModule.forChild(routes),
    CoreModule,
  ],
})
export class MainModule {}
