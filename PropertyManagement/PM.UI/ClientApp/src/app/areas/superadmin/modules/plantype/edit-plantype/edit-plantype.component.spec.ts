import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPlantypeComponent } from './edit-plantype.component';

describe('EditPlantypeComponent', () => {
  let component: EditPlantypeComponent;
  let fixture: ComponentFixture<EditPlantypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPlantypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPlantypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
