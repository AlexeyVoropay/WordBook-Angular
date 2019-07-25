import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LanguageLetter } from '../languageLetter';
import { LanguageLetterService } from '../languageLetter.service';

@Component({
  selector: 'app-languageLetters',
  templateUrl: './languageLetters.component.html',
  styleUrls: ['./languageLetters.component.css']
})  
export class LanguageLettersComponent implements OnInit {	
  languageLetters: LanguageLetter[];

  constructor(
    private route: ActivatedRoute,
    private languageLetterService: LanguageLetterService
  ) {}
  
  ngOnInit() {
    this.getLanguageLetters();
  }

  getLanguageLetters(): void {
    const id = +this.route.snapshot.paramMap.get('id');
	  this.languageLetterService.getLanguageLetters(id)
    .subscribe(languageLatters => this.languageLetters = languageLatters);
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