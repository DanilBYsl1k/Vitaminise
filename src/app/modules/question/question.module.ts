import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { QuestionsModule } from '@modules/question/question-routing.module';
import { QuestionComponent } from '@modules/question/components/question/question.component';
import { InsuranceComponent } from '@modules/question/components/insurance/insurance.component';
import { InfoComponent } from '@modules/question/components/info/info.component';
import { ButtonRouteComponent } from '@shared/m-components/button-route/button-route.component';

@NgModule({
  declarations: [QuestionComponent, InsuranceComponent, InfoComponent],
  imports: [
    CommonModule,
    TranslateModule,
    QuestionsModule,
    ButtonRouteComponent,
  ],
})
export class QuestionModule {}
