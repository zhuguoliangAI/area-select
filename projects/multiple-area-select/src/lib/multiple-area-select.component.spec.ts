import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleAreaSelectComponent } from './multiple-area-select.component';

describe('MultipleAreaSelectComponent', () => {
  let component: MultipleAreaSelectComponent;
  let fixture: ComponentFixture<MultipleAreaSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleAreaSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleAreaSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
