import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlantypeComponent } from './add-plantype.component';

describe('AddPlantypeComponent', () => {
  let component: AddPlantypeComponent;
  let fixture: ComponentFixture<AddPlantypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPlantypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlantypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
