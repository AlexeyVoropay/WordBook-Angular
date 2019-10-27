import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ConversionPair }         from '../conversionPair';
import { ConversionPairService }  from '../conversionPair.service';

@Component({
  selector: 'app-conversionPair-detail',
  templateUrl: './conversionPair-detail.component.html',
  styleUrls: ['./conversionPair-detail.component.css']
})

export class ConversionPairDetailComponent implements OnInit {
  @Input() conversionPair: ConversionPair;

  constructor(
    private route: ActivatedRoute,
    private conversionPairService: ConversionPairService,
    private location: Location
  ) {}
  
  ngOnInit(): void {
    this.getConversionPair();
  }

  getConversionPair(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.conversionPairService.getConversionPair(1, id)
      .subscribe(conversionPair => this.conversionPair = conversionPair);
  }

  goBack(): void {
    this.location.back();
  }

//  save(): void {
    //this.conversionPairService.updateConversionPair(this.conversionPair)
//      .subscribe(() => this.goBack());
  //}
}