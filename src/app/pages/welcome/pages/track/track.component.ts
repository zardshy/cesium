import { Component, OnInit } from '@angular/core';
declare var Cesium:any;
declare var turf:any;
import flyConf from './flyPath';
import { TrackAnimation } from '../../func/trackAnimation';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  public viewer;
  public trackObj;

  constructor() { }

  ngOnInit(): void {
  }

  mapLoaded(e){
    this.viewer = e;
  }

  createObj(){
    const model = this.viewer.entities.add({
      id:'zardcar',
      model: {
          uri: 'assets/models/gltf/Car1120.gltf',
          minimumPixelSize: 200,
          maximumScale: 200,
      },
      point: {
        pixelSize: 1,
        color: new Cesium.Color(1.0, 1.0, 1.0, 1.0, 0)
      }
    });
    const dataArr = flyConf[0].pathPositionArr;

    this.trackObj = new TrackAnimation({
      viewer: this.viewer,
      pathArr: dataArr,
      entity: model,
    });
  }

  play(){
    this.trackObj.play();
  }

  pause(){
    this.trackObj.pause();
  }

  firstPerson(){
    this.trackObj.firstPerson()
  }

  thirdPerson(){
    this.trackObj.thirdPerson()
  }

  removeFollowCamera(){
    this.trackObj.removeFollowCamera()
  }

}
