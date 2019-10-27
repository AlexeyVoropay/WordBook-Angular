import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionPairDetailComponent } from './conversionPair-detail.component';

describe('LanguageDetailComponent', () => {
  let component: ConversionPairDetailComponent;
  let fixture: ComponentFixture<ConversionPairDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversionPairDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversionPairDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
