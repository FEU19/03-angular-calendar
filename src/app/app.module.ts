import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { DayInfoComponent } from './day-info/day-info.component';

@NgModule({
  declarations: [
    AppComponent,
    DayInfoComponent
  ],
  imports: [
    BrowserModule,
	CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
