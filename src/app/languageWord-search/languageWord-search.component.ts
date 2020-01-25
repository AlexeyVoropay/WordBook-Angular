import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Language } from '../language';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-languageWord-search',
  templateUrl: './languageWord-search.component.html',
  styleUrls: [ './languageWord-search.component.css' ]
})
export class LanguageWordSearchComponent implements OnInit {
  languages$: Observable<Language[]>;
  private searchTerms = new Subject<string>();

  constructor(private languageService: LanguageService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.languages$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.languageService.searchLanguages(term)),
    );
  }
}