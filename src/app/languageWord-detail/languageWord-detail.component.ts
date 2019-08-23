import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { LanguageWord }         from '../languageWord';
import { LanguageWordService }  from '../languageWord.service';

@Component({
  selector: 'app-languageWord-detail',
  templateUrl: './languageWord-detail.component.html',
  styleUrls: ['./languageWord-detail.component.css']
})

export class LanguageWordDetailComponent implements OnInit {
  @Input() languageWord: LanguageWord;  

  constructor(
    private route: ActivatedRoute,
    private languageWordService: LanguageWordService,
    private location: Location
  ) {}
  
  ngOnInit(): void {
    this.getLanguage();
  }

  getLanguage(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.languageWordService.getLanguageWord(id)
      .subscribe(languageWord => this.languageWord = languageWord);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.languageWordService.updateLanguageWord(this.languageWord)
      .subscribe(() => this.goBack());
  }
}