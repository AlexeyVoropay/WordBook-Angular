import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LanguagesComponent } from './languages/languages.component';
import { LanguageDetailComponent } from './language-detail/language-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LanguagesComponent,
    LanguageDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }