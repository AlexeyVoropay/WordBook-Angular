import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { LanguageDetailComponent }  from './language-detail/language-detail.component';
import { LanguageLetterDetailComponent }  from './languageLetter-detail/languageLetter-detail.component';
import { LanguageWordDetailComponent } from './languageWord-detail/languageWord-detail.component';
import { LanguagesComponent }      from './languages/languages.component';
import { LanguageLettersComponent }      from './languageLetters/languageLetters.component';
import { LanguageWordsComponent }      from './languageWords/languageWords.component';
import { ConversionsComponent }      from './conversions/conversions.component';
import { ConversionPairsComponent }      from './conversionPairs/conversionPairs.component';
import { ConversionDetailComponent }  from './conversion-detail/conversion-detail.component';
import { LanguageSearchComponent }  from './language-search/language-search.component';
import { MessagesComponent }    from './messages/messages.component';

import {DemoMaterialModule} from './material-module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    DemoMaterialModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    /*HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )*/
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    LanguagesComponent,
    LanguageLettersComponent,
    LanguageWordsComponent,
    LanguageDetailComponent,
    LanguageLetterDetailComponent,
    LanguageWordDetailComponent,
    MessagesComponent,
    LanguageSearchComponent,
    ConversionDetailComponent,
    ConversionsComponent,
    ConversionPairsComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
