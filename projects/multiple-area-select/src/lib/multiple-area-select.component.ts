import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Area } from './types';
import { ares } from './area-data';

@Component({
  selector: 'lib-multiple-area-select',
  templateUrl: './multiple-area-select.component.html',
  styleUrls: ['./multiple-area-select.component.css']
})
export class MultipleAreaSelectComponent implements OnInit {

  @Input()
  get placeHolder() {
    return this.myPlaceHolder || '请选择';
  }
  set placeHolder(value) {
    this.myPlaceHolder = value;
  }
  @Input()
  get width() {
    return this.myWidth || '100%';
  }
  set width(value) {
    this.myWidth = value;
  }

  @Output()
  changes: EventEmitter<string[]> = new EventEmitter();

  myWidth;
  names: string;
  areas: Area[];
  myPlaceHolder = '请选择';
  popoverVisiable = false;
  selectedListForId = [];
  selectedListForName = [];
  ids: string[];

  constructor() { }

  ngOnInit() {
    this.areas = ares;
  }

  // 回写换市为省
  private changeCityToPro(pro: Area) {
    pro.children.forEach(item => {
      this.selectedListForName = this.selectedListForName.filter(ele => ele.name !== item.name);
    });
    this.selectedListForName.push(pro);
  }

  // 判断省中的市是否为全部选中
  private judgeCityAllSelected(pro: Area) {
    const unSelectedCity = pro.children.filter(ele => !ele.selected);
    return unSelectedCity && !unSelectedCity.length;
  }

  // 判断省中的市是否为全部未选中
  private judgeCityAllUnselected(pro: Area) {
    const selectedCity = pro.children.filter(ele => ele.selected);
    return selectedCity && !selectedCity.length;
  }

  popoverVisiableChange(val) {
    this.popoverVisiable = val;
  }

  onProSelect(ev, value: Area) {
    // console.log(value);
    if (value.selected && value.partSelected) { // 部分选中 -> 全部选中
      value.children.forEach(child => {
        if (!child.selected) {
          child.selected = true;
          this.selectedListForId.push(child);
        }
      });
      this.changeCityToPro(value);
    } else if (value.selected && !value.partSelected) { // 全部未选中 -> 全部选中
      if (value.children.length) {
        value.children.forEach(child => {
          child.selected = true;
          this.selectedListForId.push(child);
        });
      } else {
        this.selectedListForId.push(value);
      }
      this.selectedListForName.push(value);
    } else { // 全部选中 -> 全部未选中
      if (value.children.length) {
        value.children.forEach(child => {
          child.selected = false;
          this.selectedListForId = this.selectedListForId.filter(ele => child.name !== ele.name);
        });
      } else {
        this.selectedListForId = this.selectedListForId.filter(child => child.name !== value.name);
      }
      this.selectedListForName = this.selectedListForName.filter(child => child.name !== value.name);
    }
    value.partSelected = false;
    const nameArr = this.selectedListForName.filter(selected => selected.selected && !selected.isDisable).map(item => item.name);
    const idArr = this.selectedListForId.filter(selected => selected.selected && !selected.isDisable).map(item => item.id);
    // const idArr = this.selectedListForName.filter(selected => selected.selected).map(item => item.id);
    this.names = Array.from(new Set(nameArr)).toString();
    this.ids = Array.from(new Set(idArr));
    this.changes.emit(this.ids);
  }

  onCitySelect(ev, city: Area, pro: Area) {
    // console.log(city);
    if (pro.selected && !pro.partSelected) { // 全选状态-反选
      pro.selected = false;
      pro.partSelected = true;
      this.selectedListForId = this.selectedListForId.filter(item => item.name !== city.name);
      this.selectedListForName = this.selectedListForName.filter(item => item.name !== pro.name);
      this.selectedListForName = this.selectedListForName.concat(pro.children.filter(item => item.selected));
    } else if (!pro.selected && pro.partSelected) { // 部分选中的状态
      if (city.selected) { // 选中
        if (this.judgeCityAllSelected(pro)) {
          this.changeCityToPro(pro);
          pro.selected = true;
          pro.partSelected = false;
        } else {
          this.selectedListForName.push(city);
        }
        this.selectedListForId.push(city);
      } else { // 取消选中
        this.selectedListForName = this.selectedListForName.filter(ele => ele.name !== city.name);
        this.selectedListForId = this.selectedListForId.filter(item => item.name !== city.name);
        pro.partSelected = !this.judgeCityAllUnselected(pro);
      }
    } else {
      pro.partSelected = true;
      if (city.selected) {
        this.selectedListForName.push(city);
        this.selectedListForId.push(city);
      } else {
        this.selectedListForName = this.selectedListForName.filter(ele => ele.name !== city.name);
        this.selectedListForId = this.selectedListForId.filter(item => item.name !== city.name);
      }
    }
    const nameArr = this.selectedListForName.filter(selected => selected.selected && !selected.isDisable).map(item => item.name);
    // const idArr = this.selectedListForName.filter(selected => selected.selected).map(item => item.id);
    const idArr = this.selectedListForId.filter(selected => selected.selected && !selected.isDisable).map(item => item.id);
    this.names = Array.from(new Set(nameArr)).toString();
    this.ids = Array.from(new Set(idArr));
    // console.log('选中项：', this.ids);
    this.changes.emit(this.ids);
  }

}
