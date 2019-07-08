import { Component, OnInit } from '@angular/core';
import { Language } from '../language';
import { LANGUAGES } from '../mock-languages';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {
	
  languages = LANGUAGES;

  selectedLanguage: Language;
  
  onSelect(language: Language): void {
	this.selectedLanguage = language;
  }

  constructor() { 
  }

  ngOnInit() {
  }
}