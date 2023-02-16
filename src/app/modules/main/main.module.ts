import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import FooterModule from '@app/core/footer/footer.module';
import MainComponent from '@modules/main/components/main/main.component';
import MainQuestionsComponent from '@modules/main/components/main-questions/main-questions.component';
import ButtonModule from '@modules/button/button.module';
import SharedModule from '@shared/shared.module';

const routes:Routes = [
  { path: 'main', component: MainComponent },
  { path: 'main/question', component: MainQuestionsComponent },
];

@NgModule({
  declarations: [MainComponent, MainQuestionsComponent],
  imports: [
    CommonModule,
    FooterModule,
    ButtonModule,
    SharedModule,
    RouterModule.forChild(routes)],
})

export default class MainModule {}
