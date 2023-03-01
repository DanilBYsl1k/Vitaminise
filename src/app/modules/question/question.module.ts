import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { QuestionsModule } from '@modules/question/question-routing.module';
import { QuestionComponent } from '@modules/question/components/question/question.component';
import { InsuranceComponent } from '@modules/question/components/insurance/insurance.component';
import { InfoComponent } from '@modules/question/components/info/info.component';
import { ButtonRouteComponent } from '@shared/m-components/button-route/button-route.component';
import { ExpansionDirective } from '@app/core/derectives/expansion/expansion.directive';
import { ButtonComponent } from '@shared/stand-component/button/button.component';

@NgModule({
  declarations: [QuestionComponent, InsuranceComponent, InfoComponent],
  imports: [
    CommonModule,
    TranslateModule,
    QuestionsModule,
    ButtonRouteComponent,
    ExpansionDirective,
    ButtonComponent,
  ],
})
export class QuestionModule {}
