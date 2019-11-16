import {Component, OnInit} from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
import {LanguageWordService} from '../languageWord.service';
import {WordsResponse} from '../wordsResponse';

/**
 * @title Configurable paginator
 */
@Component({
  selector: 'paginator-configurable-example',
  templateUrl: 'paginator-configurable-example.html',
  styleUrls: ['paginator-configurable-example.css'],
})
export class PaginatorConfigurableExample implements OnInit {    
  wordsResponse: WordsResponse;
  // MatPaginator Inputs
  //length: number;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;

  constructor(private languageWordService: LanguageWordService ) { }
  
  ngOnInit(): void {
    //throw new Error("Method not implemented.");    
    this.getLanguageWordsResponse();
  }

  getLanguageWordsResponse(): void {
	  this.languageWordService.getLanguageWordsResponse(8, 0, this.pageSize)
    .subscribe(wordsResponse => 
      {this.wordsResponse = wordsResponse;});
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }
}