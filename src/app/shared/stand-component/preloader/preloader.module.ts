import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PreloaderComponent } from '@shared/stand-component/preloader/preloader-component/preloader.component';

@NgModule({
  declarations: [PreloaderComponent],
  imports: [CommonModule, FormsModule],
  exports: [PreloaderComponent],
})
export class PreloaderModule {}
