import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LanguageWord } from '../languageWord';
import { LanguageWordService } from '../languageWord.service';

@Component({
  selector: 'app-languageWords',
  templateUrl: './languageWords.component.html',
  styleUrls: ['./languageWords.component.css']
})  
export class LanguageWordsComponent implements OnInit {	
  languageWords: LanguageWord[];

  constructor(
    private route: ActivatedRoute,
    private languageWordService: LanguageWordService
  ) {}
  
  ngOnInit() {
    this.getLanguageWords();
  }

  getLanguageWords(): void {
    const id = +this.route.snapshot.paramMap.get('id');
	  this.languageWordService.getLanguageWords(id)
    .subscribe(languageWords => this.languageWords = languageWords);
  }

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