import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConversionPair } from '../conversionPair';
import { ConversionPairService } from '../conversionPair.service';

@Component({
  selector: 'app-conversionPairs',
  templateUrl: './conversionPairs.component.html',
  styleUrls: ['./conversionPairs.component.css']
})  
export class ConversionPairsComponent implements OnInit {	
  conversionPairs: ConversionPair[];

  constructor(
    private route: ActivatedRoute,
    private conversionPairService: ConversionPairService
  ) {}
  
  ngOnInit() {
    this.getConversionPairs();
  }

  getConversionPairs(): void {
    const id = +this.route.snapshot.paramMap.get('id');
	  this.conversionPairService.getConversionPairs(id)
    .subscribe(conversionPairs => this.conversionPairs = conversionPairs);
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