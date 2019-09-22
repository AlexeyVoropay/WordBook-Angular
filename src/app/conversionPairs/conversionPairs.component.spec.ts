import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionPairsComponent } from './conversionPairs.component';

describe('LanguagesComponent', () => {
  let component: ConversionPairsComponent;
  let fixture: ComponentFixture<ConversionPairsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversionPairsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversionPairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
