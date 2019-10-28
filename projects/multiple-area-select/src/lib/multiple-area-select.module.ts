import { NgModule } from '@angular/core';
import { MultipleAreaSelectComponent } from './multiple-area-select.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [MultipleAreaSelectComponent],
  imports: [
    NgZorroAntdModule,
    FormsModule,
    CommonModule
  ],
  exports: [MultipleAreaSelectComponent]
})
export class MultipleAreaSelectModule { }
