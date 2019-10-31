import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { MultipleAreaSelectModule } from 'multiple-area-select';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { NgxJquerySliderComponent } from './ngx-jquery-slider/ngx-jquery-slider.component';
// import {MultipleAreaSelectModule} from '../../projects/multiple-area-select/src/lib/multiple-area-select.module';
// import {MultipleAreaSelectModule} from '../../projects/multiple-area-select/src/lib/multiple-area-select.module';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    NgxJquerySliderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ counter: counterReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    })
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
