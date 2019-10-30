import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {decrement, increment, reset} from '../store/counter.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.less']
})
export class MyCounterComponent implements OnInit {
  count$: Observable<number>;

  constructor(private store: Store<{count: number}>) {
    this.count$ = store.pipe(select('counter'));
  }

  ngOnInit() {
    this.count$.subscribe(value => console.log(value));
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

}
