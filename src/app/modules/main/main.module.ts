import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MainRoutingModule } from '@modules/main/main-routing.module';
import { MainQuestionsComponent } from '@modules/main/components/main-questions/main-questions.component';
import { MainComponent } from '@modules/main/components/main/main.component';
import { ButtonComponent } from '@shared/stand-component/button/button.component';

@NgModule({
  declarations: [MainComponent, MainQuestionsComponent],
  imports: [CommonModule, MainRoutingModule, ButtonComponent],
})
export class MainModule {}
