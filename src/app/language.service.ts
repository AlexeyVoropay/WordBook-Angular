import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Language } from './language';
import { LANGUAGES } from './mock-languages';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private messageService: MessageService) { }

  getLanguages(): Observable<Language[]> {
    // TODO: send the message _after_ fetching the languages
    this.messageService.add('LanguageService: fetched languages');
	  return of(LANGUAGES);
  }  
  
  getLanguage(id: number): Observable<Language> {
    // TODO: send the message _after_ fetching the language
    this.messageService.add(`LanguageService: fetched language id=${id}`);
    return of(LANGUAGES.find(language => language.id === id));
  }  
  
}