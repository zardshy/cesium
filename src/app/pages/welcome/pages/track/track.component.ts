/*
 * @Author: your name
 * @Date: 2021-11-10 20:17:00
 * @LastEditTime: 2021-11-14 00:22:52
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ngcesium\src\app\pages\welcome\pages\track\track.component.ts
 */
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
  public startTime;
  public stopTime;
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
          minimumPixelSize: 64,
      },
      point: {
        pixelSize: 1,
        color: new Cesium.Color(1.0, 1.0, 1.0, 1.0, 0)
      }
    });
    const model1 = this.viewer.entities.add({
      id:'zardcar1',
      model: {
          uri: 'assets/models/gltf/Car1120.gltf',
          minimumPixelSize: 64,
      },
      point: {
        pixelSize: 1,
        color: new Cesium.Color(1.0, 1.0, 1.0, 1.0, 0)
      }
    });
    const startTime = Cesium.JulianDate.fromDate(new Date());
    const time = Cesium.JulianDate.addSeconds(startTime, 1, new Cesium.JulianDate());
    const dataArr = flyConf[0].pathPositionArr;
      const dataArr1 = [
        { lng: 121.1, lat:31.1, alt:100 },
        { lng: 121.2, lat:31.2, alt:100 },
        { lng: 121.2, lat:31.1, alt:100 },
        { lng: 121.1, lat:31.3, alt:100 },
        { lng: 121.16, lat:31.39, alt:100 },
        { lng: 121.21, lat:31.13, alt:200 },
        { lng: 121.29, lat:31.31, alt:200 },
      ]
    this.trackObj = new TrackAnimation({
      viewer: this.viewer,
      pathArr: dataArr1,
      entity: model,
      runTime: startTime
    });

    // let  trackObj1= new TrackAnimation({
    //   viewer: this.viewer,
    //   pathArr: dataArr1,
    //   entity: model1,
    //   runTime: time
    // });
  }

  play(){
    this.viewer.clock.shouldAnimate = true;
  }

  pause(){
    this.viewer.clock.shouldAnimate = false;
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
