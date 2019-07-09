import { Component, OnInit } from '@angular/core';
import { Language } from '../language';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {
	
  languages: Language[];

  selectedLanguage: Language;
  
  getLanguages(): void {
	this.languages = this.languageService.getLanguages();
  }
  
  onSelect(language: Language): void {
	this.selectedLanguage = language;
  }

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
	this.getLanguages();
  }
}