import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LanguageWordService } from '../languageWord.service';
import { WordsResponse } from '../wordsResponse';

//for paginator
import {PageEvent} from '@angular/material/paginator'; 

@Component({
  selector: 'app-languageWords',
  templateUrl: './languageWords.component.html',
  styleUrls: ['./languageWords.component.css']
})  
export class LanguageWordsComponent implements OnInit {	

  //start paginator
  // MatPaginator Inputs
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  getPaginatorData(event){    
    const id = +this.route.snapshot.paramMap.get('id');
	  this.languageWordService.getLanguageWordsResponse(id, event.pageIndex * event.pageSize , event.pageSize)
    .subscribe(wordsResponse => 
      {
        this.wordsResponse = wordsResponse;
        this.length = wordsResponse.paging.total;
      });
  }

  // MatPaginator Output
  pageEvent: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);    
  }
  //end paginator

  wordsResponse: WordsResponse;

  constructor(
    private route: ActivatedRoute,
    private languageWordService: LanguageWordService
  ) {}

  
  ngOnInit() {
    this.getPaginatorData({pageIndex: 0, previousPageIndex: null, pageSize: this.pageSize, length: 100} as PageEvent);
  }

//  getWordsResponse(): void {
//    const id = +this.route.snapshot.paramMap.get('id');
//    this.languageWordService.getLanguageWordsResponse(id, 0, this.pageSize)
//    .subscribe(wordsResponse => 
//      {this.wordsResponse = wordsResponse;});
//    }

  /*
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.languageService.addLanguage({ name } as Language)
      .subscribe(language => {
        this.languages.push(language);
      });
  }
  */
  // add(name: string, description: string): void {
  //   name = name.trim();
	// description = description.trim();
  //   if (!name) { return; }
  //   this.languageService.addLanguage({ name, description } as Language)
  //     .subscribe(language => {
  //       this.languages.push(language);
  //     });
  // }

  
// delete(language: Language): void {
//   this.languages = this.languages.filter(h => h !== language);
//   this.languageLetterService.deleteLanguage(language).subscribe();
//   }

}