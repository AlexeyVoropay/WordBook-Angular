import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LanguagesComponent } from './languages/languages.component';
import { LanguageLettersComponent } from './languageLetters/languageLetters.component';
import { LanguageWordDetailComponent } from './languageWord-detail/languageWord-detail.component';
import { LanguageWordsComponent } from './languageWords/languageWords.component';
import { ConversionsComponent } from './conversions/conversions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LanguageDetailComponent } from './language-detail/language-detail.component';
import { LanguageLetterDetailComponent } from './languageLetter-detail/languageLetter-detail.component';
import { ConversionDetailComponent } from './conversion-detail/conversion-detail.component';
import { ConversionPairsComponent } from './conversionPairs/conversionPairs.component';
import { TransliteratorComponent } from './transliterator/transliterator.component';
import { ConversionPairDetailComponent } from './conversionPair-detail/conversionPair-detail.component';
import { PaginatorConfigurableExample } from './paginator/paginator-configurable-example';
import { ConverterComponent } from './converter/converter.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'paginator', component: PaginatorConfigurableExample },
  { path: 'languages/:id', component: LanguageDetailComponent },
  { path: 'languages', component: LanguagesComponent },
  { path: 'languages/:id/letters', component: LanguageLettersComponent },
  { path: 'languages/:id/letters/:id', component: LanguageLetterDetailComponent },
  { path: 'languages/:id/words', component: LanguageWordsComponent },  
  { path: 'conversions', component: ConversionsComponent },
  { path: 'conversions/:id', component: ConversionDetailComponent },
  { path: 'conversions/:id/pairs', component: ConversionPairsComponent },
  { path: 'conversions/:id/transliterator', component: TransliteratorComponent },
  { path: 'conversions/:id/converter', component: ConverterComponent },
  { path: 'conversions/:id/pairs/:id', component: ConversionPairDetailComponent },  
  { path: 'words/:id', component: LanguageWordDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
