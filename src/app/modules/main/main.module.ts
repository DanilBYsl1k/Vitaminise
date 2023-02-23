import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MainRoutingModule } from '@modules/main/main-routing.module';
import { MainQuestionsPagesComponent } from '@modules/main/components/main-questions/main-questions.component';
import { MainComponent } from '@modules/main/components/main/main.component';
import { ButtonComponent } from '@shared/stand-component/button/button.component';
import { SharedModule } from '@shared/shared.module';
import { QuestionComponent } from '@modules/main/components/question/question.component';
import { SivilkaInfoComponent } from '@modules/main/components/sivilka-info/sivilka-info.component';
import { DropListDirective } from '@modules/main/derectives/drop-list.directive';

@NgModule({
  declarations: [
    MainComponent,
    MainQuestionsPagesComponent,
    SivilkaInfoComponent,
    QuestionComponent,
    DropListDirective,
  ],
  imports: [CommonModule, MainRoutingModule, ButtonComponent, SharedModule],
})
export class MainModule {}
