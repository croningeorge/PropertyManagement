import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsLanguageComponent } from './details-language.component';

describe('DetailsLanguageComponent', () => {
  let component: DetailsLanguageComponent;
  let fixture: ComponentFixture<DetailsLanguageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsLanguageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
