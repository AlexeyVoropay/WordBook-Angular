import { Component, OnInit } from '@angular/core';

import { Language } from '../language';
import { ConverterService } from '../converter.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})  
export class ConverterComponent implements OnInit {	
  languages: Language[];

  constructor(private converterService: ConverterService) { }

  ngOnInit() {
    //this.getLanguages();
  }
/*
  getLanguages(): void {
	  this.languageService.getLanguages()
    .subscribe(languages => this.languages = languages);
  }
  */
  /*
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.languageService.addLanguage({ name } as Language)
      .subscribe(language => {
        this.languages.push(language);
      });
  }
  
  add(name: string, description: string): void {
    name = name.trim();
	description = description.trim();
    if (!name) { return; }
    this.languageService.addLanguage({ name, description } as Language)
      .subscribe(language => {
        this.languages.push(language);
      });
  }

  
delete(language: Language): void {
  this.languages = this.languages.filter(h => h !== language);
  this.languageService.deleteLanguage(language).subscribe();
  }
*/
}