import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {SlideShowComponent} from './Component/slideshow/slideshow.component';
import { FirstComponent } from './Component/first/first.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideShowComponent,
    FirstComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
