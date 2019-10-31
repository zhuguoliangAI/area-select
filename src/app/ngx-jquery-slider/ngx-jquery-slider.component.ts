import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

declare const $: any;

@Component({
  selector: 'app-ngx-jquery-slider',
  templateUrl: './ngx-jquery-slider.component.html',
  styleUrls: ['./ngx-jquery-slider.component.less'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: NgxJquerySliderComponent,
    multi: true
  }]
})
export class NgxJquerySliderComponent implements AfterViewInit, ControlValueAccessor {
  @ViewChild('location', { static: false }) location;
  widget;
  onChange;
  value;
  constructor() { }

  ngAfterViewInit() {
    this.widget = $(this.location.nativeElement).slider(this.value);

    this.widget.on('slidestop', (event, ui) => {
      this.onChange(ui.value);
    });
  }

  writeValue(value: any): void {
    this.value = value;
    if (this.widget && value) {
      this.widget.slider('value', value);
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {}
}
