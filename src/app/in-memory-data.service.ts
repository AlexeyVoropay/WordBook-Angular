import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Language } from './language';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
	
  createDb() {
    const languages = [
      { id: 11, name: 'Русский', description: 'ru' },
	  { id: 12, name: 'Английский', description: 'en' },
	  { id: 13, name: 'Немецкий', description: 'ge' },
	  { id: 14, name: 'Французкий', description: 'fr' },
	  { id: 15, name: 'Итальянский', description: 'it' },
	  { id: 16, name: 'Японский', description: 'ja' },
	  { id: 17, name: 'Китайский', description: 'ch' },
	  { id: 18, name: 'Норвежский', description: 'no' },
	  { id: 19, name: 'Корейский', description: 'ko' },
	  { id: 20, name: 'Беларуский', description: 'be' }
    ];
    return {languages};
  }  

  // Overrides the genId method to ensure that a language always has an id.
  // If the languagees array is empty,
  // the method below returns the initial number (11).
  // if the languagees array is not empty, the method below returns the highest
  // language id + 1.
  genId(languages: Language[]): number {
    return languages.length > 0 ? Math.max(...languages.map(language => language.id)) + 1 : 11;
  }
}
