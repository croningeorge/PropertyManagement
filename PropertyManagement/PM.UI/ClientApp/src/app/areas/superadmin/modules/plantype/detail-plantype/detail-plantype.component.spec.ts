import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPlantypeComponent } from './detail-plantype.component';

describe('DetailPlantypeComponent', () => {
  let component: DetailPlantypeComponent;
  let fixture: ComponentFixture<DetailPlantypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPlantypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPlantypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
