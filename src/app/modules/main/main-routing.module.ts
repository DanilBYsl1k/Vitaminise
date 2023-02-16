import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '@modules/main/components/main/main.component';
import { MainQuestionsComponent } from '@modules/main/components/main-questions/main-questions.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'question', component: MainQuestionsComponent }, // !!! PATH globaL
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
