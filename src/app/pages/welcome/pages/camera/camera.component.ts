import { Component, OnInit } from '@angular/core';
import tfCoord from '../../func/transformCoord';
import { initCameraView } from '../../func/cameraFunc'
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
    var position = this.viewer.scene.camera.position;
    position.h = this.viewer.scene.camera.heading
    position.p = this.viewer.scene.camera.pitch
    position.r = this.viewer.scene.camera.roll
    console.log(position)
    // var tfPositoon = tfCoord.xyzTolnglat(position.x,position.y,position.z);
    // console.log(tfPositoon)

    // var demo = {
    //   h: 6.242904348979944,
    //   p: -0.6477582064522922,
    //   r: 0.000004411506062673709,
    //   x: -2976446.6538335704,
    //   y: 4837235.09624852,
    //   z: 3197201.091606608,
    // }
    // initCameraView(this.viewer,demo)
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
      lon: 121.48173529235812,
      lat: 30.283260629907392,
      alt: 56165.85687084427
    }
    this.viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(position.lon,position.lat,position.alt),
      orientation: {
        heading :Cesium.Math.toRadians(10.0), // 方向
        pitch :Cesium.Math.toRadians(-44.0),// 倾斜角度
        roll :0
      },
      // duration:5, // 设置飞行持续时间，默认会根据距离来计算
      // pitchAdjustHeight:-90, // 如果摄像机飞越高于该值，则调整俯仰俯仰的俯仰角度，并将地球保持在视口中。
      // maximumHeight:5000, // 相机最大飞行高度
      // flyOverLongitude:Cesium.Math.toRadians(60.0), // 如果到达目的地有2种方式，设置具体值后会强制选择方向飞过这个经度(这个，很好用)
      // complete:()=>{
      //   this.viewer.camera.flyTo({
      //     destination: Cesium.Cartesian3.fromDegrees(position.lon,position.lat,position.alt),
      //     orientation: {
      //       heading: Cesium.Math.toRadians(0.3404814345490123),
      //       pitch: Cesium.Math.toRadians(-0.23667219208688),
      //       roll: 0.000618243359576276,
      //     },
      //   })
      // }
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

  addCameraFly(){
        const position = {
          lon: 121.1,
          lat: 31.1,
          alt: 2000
        }
        var center = Cesium.Cartesian3.fromDegrees(position.lon,position.lat,position.alt)

        let heading = Cesium.Math.toRadians(50.0);

        const pitch = Cesium.Math.toRadians(-20.0);

        const range = 3000.0;

        let x = 0;

        this.viewer.scene.postRender.addEventListener( ()=> {
          // this.viewer.clock.onTick.addEventListener((clock)=> {
          x += 0.000001;
          position.lat = position.lat + x
          var ct = Cesium.Cartesian3.fromDegrees(position.lon,position.lat,position.alt)
          // heading = Cesium.Math.toRadians(x);
          
          this.viewer.camera.lookAt(ct, new Cesium.HeadingPitchRange(heading, pitch, range))

          // var transform = Cesium.Transforms.eastNorthUpToFixedFrame(ct);
          // this.viewer.scene.camera.lookAtTransform(transform, new Cesium.HeadingPitchRange(0, -Math.PI/8, 2900));
        })

  }


}
