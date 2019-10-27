import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { LanguageLetter }         from '../languageLetter';
import { LanguageLetterService }  from '../languageLetter.service';

@Component({
  selector: 'app-languageLetter-detail',
  templateUrl: './languageLetter-detail.component.html',
  styleUrls: ['./languageLetter-detail.component.css']
})

export class LanguageLetterDetailComponent implements OnInit {
  @Input() languageLetter: LanguageLetter;  

  constructor(
    private route: ActivatedRoute,
    private languageLetterService: LanguageLetterService,
    private location: Location
  ) {}
  
  ngOnInit(): void {
    this.getLanguageLetter();
  }

  getLanguageLetter(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.languageLetterService.getLanguageLetter(id)
      .subscribe(languageLetter => this.languageLetter = languageLetter);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.languageLetterService.updateLanguageLetter(this.languageLetter)
      .subscribe(() => this.goBack());
  }
}