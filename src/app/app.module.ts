import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TextMarkerDirective } from './text-marker';
import { OnlyIf } from './only-if';

@NgModule({
  declarations: [
    AppComponent,
    TextMarkerDirective, 
    OnlyIf
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
