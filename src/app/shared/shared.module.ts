import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputControlComponent } from '@shared/stand-component/input-control/input-control.component';
import { GrenStandartBtnComponent } from '@shared/stand-component/gren-standart-btn/gren-standart-btn.component';
import { PreloaderComponent } from '@shared/stand-component/preloader/preloader.component';

@NgModule({
  declarations: [
    GrenStandartBtnComponent,
    InputControlComponent,
    PreloaderComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    GrenStandartBtnComponent,
    InputControlComponent,
    PreloaderComponent,
  ],
})
export class SharedModule {}
