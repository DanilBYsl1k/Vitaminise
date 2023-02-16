import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import AppComponent from '@app/app.component';
import MainModule from '@modules/main/main.module';
import AppRoutingModule from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, MainModule],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
