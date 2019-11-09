import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConversionPair } from '../conversionPair';
import { ConversionPairService } from '../conversionPair.service';
import { ConversionService } from '../conversion.service';

@Component({
  selector: 'app-transliterator',
  templateUrl: './transliterator.component.html',
  styleUrls: ['./transliterator.component.css']
})  
export class TransliteratorComponent implements OnInit {	
  conversionPairs: ConversionPair[];
  startText: string;
  newText: string;

  constructor(
    private route: ActivatedRoute,
    private conversionService: ConversionService,
    private conversionPairService: ConversionPairService,
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

  add(part1: string, part2: string): void {
    part1 = part1.trim();
    part2 = part2.trim();
    if (!part1 && !part2) { return; }
    var conversionId = +this.route.snapshot.paramMap.get('id');
    this.conversionPairService.addConversionPair({ conversionId, part1, part2 } as ConversionPair)
      .subscribe(conversionPair => {
        this.conversionPairs.push(conversionPair);
      });
  }
  
  getTransliterationText(text: string): void {
    text = text.trim();
    if (!text) { return; }
    var conversionId = +this.route.snapshot.paramMap.get('id');
    this.conversionService.сonversionTextGet(conversionId, text)
      .subscribe(text => {
        this.newText = text;
      });
  }
  
 delete(conversionPair: ConversionPair): void {
   this.conversionPairs = this.conversionPairs.filter(h => h !== conversionPair);
   this.conversionPairService.deleteConversionPair(conversionPair).subscribe();
   }

}