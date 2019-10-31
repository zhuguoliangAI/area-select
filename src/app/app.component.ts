import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'area-select';
  ctrl = new FormControl();
  number = 20;
  constructor() {
    this.ctrl.setValue(11, {
      onlySelf: true,
      emitEvent: true,
      emitModelToViewChange: true,
      emitViewToModelChange: true
    });
  }

  updateSlider($event) {
    this.ctrl.setValue($event.currentTarget.value, {emitModelToViewChange: true});
  }
}
