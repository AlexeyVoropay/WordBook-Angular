import { Injectable } from '@angular/core';
import { Language } from './language';
import { LANGUAGES } from './mock-languages';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  getLanguages(): Observable<Language[]> {
	return of(LANGUAGES);
  }
  
  constructor() { }
}
