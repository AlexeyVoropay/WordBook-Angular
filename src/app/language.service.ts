import { Injectable } from '@angular/core';
import { Language } from './language';
import { LANGUAGES } from './mock-languages';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  getLanguages(): Observable<Language[]> {
	// TODO: send the message _after_ fetching the languages
    this.messageService.add('LanguageService: fetched languages');
	return of(LANGUAGES);
  }  
  
  constructor(private messageService: MessageService) { }
}
