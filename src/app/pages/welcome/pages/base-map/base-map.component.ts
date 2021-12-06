import { Component, OnInit } from '@angular/core';
import addBaseMap from '../../func/baseMap'
declare var Cesium:any;

@Component({
  selector: 'app-base-map',
  templateUrl: './base-map.component.html',
  styleUrls: ['./base-map.component.css']
})
export class BaseMapComponent implements OnInit {
  public viewer;
  constructor() { }

  ngOnInit(): void {
  }

  mapLoaded(e){
    this.viewer = e;
  }
  
  add(v?){
    addBaseMap(this.viewer,v)
  }



}
