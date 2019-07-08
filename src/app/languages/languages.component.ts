import { Component, OnInit } from '@angular/core';
import { Language } from '../language';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {

  language: Language = {
    id: 1,
    name: 'Русский',
	description: 'с 1918 года',
  };

  constructor() { 
  }

  ngOnInit() {
  }
}