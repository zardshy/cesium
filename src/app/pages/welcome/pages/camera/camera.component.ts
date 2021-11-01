import { Component, OnInit } from '@angular/core';
import tfCoord from '../../func/transformCoord';
declare var Cesium:any;

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {
  public viewer;
  constructor() { }

  ngOnInit(): void {
  }

  mapLoaded(e){
    var a = tfCoord.lnglatToxyz(121.1,31.1,10)
    console.log(a)

    this.viewer = e;
    // 鼠标点击显示位置
    var handler = new Cesium.ScreenSpaceEventHandler(this.viewer.canvas);
    handler.setInputAction((event)=> {
      var pickedPosition = this.viewer.scene.pickPosition(event.position);
      if (Cesium.defined(pickedPosition)) {
        console.log(pickedPosition);
      }
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
  }

  getViewerPosition(){
    // 航向 相对于东
    console.log(this.viewer.scene.camera.heading);
    // 俯仰 相对于北
    console.log(this.viewer.scene.camera.pitch);
    // 滚转 相对于上
    console.log(this.viewer.scene.camera.roll);
    console.log(this.viewer.scene.camera.position)
  }

  flyToEntity(){
    var west = -90.0;
    var south = 38.0;
    var east = -87.0;
    var north = 40.0;
    var rectangle = this.viewer.entities.add({
      rectangle: {
          coordinates: Cesium.Rectangle.fromDegrees(west, south, east, north),
      },
    });
    // flyTo 参数可为Entity EntityCollection DataSource Cesium3DTilset
    this.viewer.flyTo(rectangle);
    //绑定
    // this.viewer.trackedEntity = rectangle;
    //解绑
    // this.viewer.trackedEntity = undefined
  }

  flyToPoint(){
    const position = {
      lon: 121.1,
      lat: 31.1,
      alt: 2000
    }
    this.viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(position.lon,position.lat,position.alt),
      complete:()=>{
        this.viewer.camera.flyTo({
          destination: Cesium.Cartesian3.fromDegrees(position.lon,position.lat,position.alt),
          orientation: {
            heading: Cesium.Math.toRadians(0.3404814345490123),
            pitch: Cesium.Math.toRadians(-0.23667219208688),
            roll: 0.000618243359576276,
          },
        })
      }
    });
    // 飞行至区域
    // this.viewer.camera.flyTo({
    //   destination: Cesium.Rectangle.fromDegrees(113.683333, 29.966667, 115.083333, 31.366667)
    // });
  }

  lookPoint(){
    const position = {
      lon: 121.1,
      lat: 31.1,
      alt: 2000
    }
    // var center = Cesium.Cartesian3.fromRadians(2.4213211833389243, 0.6171926869414084, 3626.0426275055174);
    var center = Cesium.Cartesian3.fromDegrees(position.lon,position.lat,position.alt)
    var transform = Cesium.Transforms.eastNorthUpToFixedFrame(center);
    this.viewer.scene.camera.lookAtTransform(transform, new Cesium.HeadingPitchRange(0, -Math.PI/8, 2900));
    
    this.viewer.clock.onTick.addEventListener((clock)=> {
      this.viewer.scene.camera.rotateRight(0.005);
    });
  }

  flyAtoB(){
      var whdxOptions:any = {
        destination: Cesium.Cartesian3.fromDegrees(114.35231209, 30.53542614, 5000.0),
        duration: 5,
        orientation: {
            heading: Cesium.Math.toRadians(0.0),
            pitch: Cesium.Math.toRadians(-90.0),
            roll: Cesium.Math.toRadians(0.0)
          }
      };
      var hzkjdxOptions = {
        destination: Cesium.Cartesian3.fromDegrees(121.40782845, 31.01011682, 5000.0),
        orientation: {
            heading: Cesium.Math.toRadians(0.0),
            pitch: Cesium.Math.toRadians(-90.0),
            roll: Cesium.Math.toRadians(0.0)
        },
          duration: 5,
          //flyOverLongitude: Cesium.Math.toRadians(60.0)
      };
      whdxOptions.complete =  ()=> {
          setTimeout( ()=> {
              this.viewer.camera.flyTo(hzkjdxOptions);
          }, 500);
      };
      this.viewer.camera.flyTo(whdxOptions);
  }



}
