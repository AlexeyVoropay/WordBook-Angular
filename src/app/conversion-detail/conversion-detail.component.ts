import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Conversion }         from '../conversion';
import { ConversionService }  from '../conversion.service';

@Component({
  selector: 'app-conversion-detail',
  templateUrl: './conversion-detail.component.html',
  styleUrls: ['./conversion-detail.component.css']
})

export class ConversionDetailComponent implements OnInit {
  @Input() conversion: Conversion;

  constructor(
    private route: ActivatedRoute,
    private conversionService: ConversionService,
    private location: Location
  ) {}
  
  ngOnInit(): void {
    this.getConversion();
  }

  getConversion(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.conversionService.getConversion(id)
      .subscribe(conversion => this.conversion = conversion);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.conversionService.updateConversion(this.conversion)
      .subscribe(() => this.goBack());
  }
}