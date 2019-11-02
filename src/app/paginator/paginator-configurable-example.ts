import {Component, OnInit} from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
import { LanguageService } from '../language.service';
import { Language } from '../language';

/**
 * @title Configurable paginator
 */
@Component({
  selector: 'paginator-configurable-example',
  templateUrl: 'paginator-configurable-example.html',
  styleUrls: ['paginator-configurable-example.css'],
})
export class PaginatorConfigurableExample implements OnInit {  
  languages: Language[];
  //languageslength: number;
  // MatPaginator Inputs
  length: number;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;

  constructor(private languageService: LanguageService) { }
  
  ngOnInit(): void {
    //throw new Error("Method not implemented.");
    this.getLanguages();
    //this.length = this.languages.length;
    //this.languageslength = this.languages.length;
    //this.languages.length
  }

  getLanguages(): void {
	  this.languageService.getLanguages()
    .subscribe(languages => 
      {this.languages = languages; this.length = this.languages.length});
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }
}


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */