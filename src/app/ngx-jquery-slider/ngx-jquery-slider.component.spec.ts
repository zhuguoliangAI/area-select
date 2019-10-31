import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxJquerySliderComponent } from './ngx-jquery-slider.component';

describe('NgxJquerySliderComponent', () => {
  let component: NgxJquerySliderComponent;
  let fixture: ComponentFixture<NgxJquerySliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxJquerySliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxJquerySliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
