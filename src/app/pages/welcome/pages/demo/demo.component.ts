import { Component, OnInit } from '@angular/core';
import { numberCity } from '../../func/texiao/City'
declare var Cesium:any;
import GroundScanLine from '../../func/texiao/GroundScanLine'
import { TrackAnimation } from '../../func/trackAnimation';
import flyConf from '../track/flyPath';
import Water from '../../func/texiao/Water'
import { PolylineTrailLinkMaterialProperty } from '../../func/texiao/PolylineTrailLinkMaterialProperty';
import { DynamicWallMaterialProperty } from '../../func/texiao/DynamicWallMaterialProperty';
import flyLine from '../../func/texiao/FlyLine';
import ClusterPointLayer from '../../func/ClusterPointLayer'

import {  getCameraXyzHpr,initCameraView } from '../../func/cameraFunc'

import { riverData } from './river';
import { luData } from './lu';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})

export class DemoComponent implements OnInit {
  public viewer;
  public tileset;
  public trackObj;
  constructor() { }

  ngOnInit(): void {
    console.log(luData)
  }

  mapLoaded(e){
    this.viewer = e;
    this.gotoView();
    this.clickCoord();
    this.add3Dtiles();
    this.addGroundScanLine()
    this.createCar()
    this.addWater()
    this.addPolyLine();
    this.createFlyLine()
    this.addWall();
    this.addjuhe()

    // setTimeout(() => {
    //   this.lookPoint()      
    // }, 3111);

  }

  gotoView(){
    let pos = {
      h: 0.682652507153108,
      p: -0.573794458816014,
      r: 6.28314780132029,
      x: -2850464.6080041216,
      y: 4660813.714268265,
      z: 3286712.141483263
    }
    initCameraView(this.viewer,pos)
  }

  addjuhe(){
    let juheLayer = new ClusterPointLayer(this.viewer)
    console.log(juheLayer.layer)
  }

  addWall(){
    let three = this.viewer.entities.add({
      name: 'Wall',
      wall: {
        positions: Cesium.Cartesian3.fromDegreesArrayHeights([
          121.46422712558977,
          31.259559606154212,
          111,
          121.46422712558977,
          31.22492249899973,
          111,
          121.51980249637835,
          31.22492249899973,
          111,
          121.51980249637835,
          31.259559606154212,
          111,
          121.46422712558977,
          31.259559606154,
          111
        ]),
          // positions: Cesium.Cartesian3.fromDegreesArrayHeights([
          //   121.93770628339514 ,
          //   30.90989525340411 ,
          //   666,
          //   121.94179304137732,
          //    30.909861693589566,
          //    666,
          //    121.94591833644154,
          //    30.90885409927493,
          //    666,
          //    121.94903081429607,
          //    30.907175070796296,
          //    666,
          //    121.95144180168687,
          //    30.90502646120125,
          //    666,
          //    121.95322902361073,
          //    30.902274455081354,
          //    666,
          //    121.95447033047725,
          //    30.898752043613865,
          //    666,
          //    121.95454497797425,
          //    30.895633591542385,
          //    666,
          //    121.95341472305923,
          //    30.892650524496407,
          //    666,
          //    121.95143000951653,
          //    30.889769143047925,
          //    666,
          //    121.94890259964873,
          //    30.88765908612741,
          //    666,
          //    121.94524935785677,
          //    30.885783931027714,
          //    666,
          //    121.94058704020226,
          //    30.88521479153862,
          //    666,
          //    121.93639094306872,
          //    30.885716934595568,
          //    666,
          //    121.93219395692941,
          //    30.88712314673071,
          //    666,
          //    121.9289275019642,
          //    30.890003512749026,
          //    666,
          //    121.92670846518199,
          //    30.893588747457514,
          //    666,
          //    121.92584812345648,
          //    30.8982152905379,
          //    666,
          //    121.92701090380825,
          //    30.902039452712483,
          //    666,
          //    121.92883613978637,
          //    30.905429153718934,
          //    666,
          //    121.93218071226671,
          //    30.90798085793282,
          //    666,
          //    121.93556566796289,
          //    30.90986161530055,
          //    666,
          //    121.93743383238098,
          //    30.910130366791957,
          //    666
          // ]),
          material: new DynamicWallMaterialProperty( 100,undefined)
      }
    })
  }

  createFlyLine(){
    let point = [121.49182292924358, 31.2437783652702],
    point2 = [121.47837325058116, 31.25166879436704],
    point3 = [121.4810178620536, 31.23794843535442],
    point4 = [121.50914583293753, 31.238222688966253],
    point5 = [121.47837325058116, 31.25460144813068],
    h = 5000;
    flyLine(this.viewer,point,point2,h,2)
    flyLine(this.viewer,point,point3,h,2)
    flyLine(this.viewer,point,point4,h,2)
    flyLine(this.viewer,point,point5,h,2)
  }

  addPolyLine(){
    for(let item of luData.features){
      const buildData = [];
      for (let xy of item.geometry.paths[0]){
        buildData.push(xy[0])
        buildData.push(xy[1])
        buildData.push(10)
      }
      let entity = this.viewer.entities.add({
        polyline: {
          // positions: Cesium.Cartesian3.fromDegreesArray([121.8142, 30.8649, 121.8142, 30.8798]),
          positions:Cesium.Cartesian3.fromDegreesArrayHeights(buildData),
          width: 2,
          material: new PolylineTrailLinkMaterialProperty(1000,Cesium.Color.red)
      }})
    }
    return

    let entity = this.viewer.entities.add({
      polyline: {
        // positions: Cesium.Cartesian3.fromDegreesArray([121.8142, 30.8649, 121.8142, 30.8798]),
        positions:Cesium.Cartesian3.fromDegreesArrayHeights([
          121.72881292050941,
           30.88552725737092,
         10,
         121.76061292381067,
           30.885676115772853,
         10,
         121.7827129387377,
           30.88358466647911,
         10,
          121.79796665045723,
          30.881991804362695,
         10,
          121.8504135761098,
          30.883759166283575,
         10,
         121.86320964198397,
          30.886818896419854,
         10,
         121.8728227418074,
         30.89522948969958,
         10,
         121.87884732499721,
         30.941891461472625,
         10,
        ]),
        // positions: Cesium.Cartesian3.fromDegreesArrayHeights([
        //   121.93770628339514 ,
        //   30.90989525340411 ,
        //   30,
        //   121.94179304137732,
        //    30.909861693589566,
        //    30,
        //    121.94591833644154,
        //    30.90885409927493,
        //    30,
        //    121.94903081429607,
        //    30.907175070796296,
        //    30,
        //    121.95144180168687,
        //    30.90502646120125,
        //    30,
        //    121.95322902361073,
        //    30.902274455081354,
        //    30,
        //    121.95447033047725,
        //    30.898752043613865,
        //    30,
        //    121.95454497797425,
        //    30.895633591542385,
        //    30,
        //    121.95341472305923,
        //    30.892650524496407,
        //    30,
        //    121.95143000951653,
        //    30.889769143047925,
        //    30,
        //    121.94890259964873,
        //    30.88765908612741,
        //    30,
        //    121.94524935785677,
        //    30.885783931027714,
        //    30,
        //    121.94058704020226,
        //    30.88521479153862,
        //    30,
        //    121.93639094306872,
        //    30.885716934595568,
        //    30,
        //    121.93219395692941,
        //    30.88712314673071,
        //    30,
        //    121.9289275019642,
        //    30.890003512749026,
        //    30,
        //    121.92670846518199,
        //    30.893588747457514,
        //    30,
        //    121.92584812345648,
        //    30.8982152905379,
        //    30,
        //    121.92701090380825,
        //    30.902039452712483,
        //    30,
        //    121.92883613978637,
        //    30.905429153718934,
        //    30,
        //    121.93218071226671,
        //    30.90798085793282,
        //    30,
        //    121.93556566796289,
        //    30.90986161530055,
        //    30,
        //    121.93743383238098,
        //    30.910130366791957,
        //    30
        // ]),
        width: 2,
        // material: Cesium.Color.RED
        material: new PolylineTrailLinkMaterialProperty(1000,Cesium.Color.red)
    }})
  }

  clickCoord(){
    let handler = new Cesium.ScreenSpaceEventHandler(this.viewer.scene.canvas);
    handler.setInputAction((e)=>{
      let ray = this.viewer.camera.getPickRay(e.position);
      let position = this.viewer.scene.globe.pick(ray, this.viewer.scene);
      let cartographic = Cesium.Cartographic.fromCartesian(position);
      let lon = Cesium.Math.toDegrees(cartographic.longitude);
      let lat = Cesium.Math.toDegrees(cartographic.latitude);
      console.log(lon)
      console.log(lat)
    },Cesium.ScreenSpaceEventType.LEFT_CLICK)
  }

  add3Dtiles(){
    var longitude = 121.8252503;
    var latitude = 30.9215641;
    var height = 0;
    var rotation = 0;   //旋转度
    // var url = "assets/models/3dtiles/buildings/tileset.json";
    var url = "assets/models/3dtiles/sh150/tileset.json";
    // var url = "assets/models/3dtiles/zhoubian0924/Building02/tileset.json";
    var modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(longitude,latitude,height));
    Cesium.Matrix4.multiplyByMatrix3(modelMatrix, Cesium.Matrix3.fromRotationZ(Cesium.Math.toRadians(rotation)), modelMatrix);
    
    this.tileset = new Cesium.Cesium3DTileset({
      url,
      show:true,
      // modelMatrix: modelMatrix, //模型矩阵
      maximumScreenSpaceError: 16,   //控制切片视角显示的数量，可调整性能
      maximumNumberOfLoadedTiles: 100000, // 可使用最大内存量
      luminanceAtZenith: 1,//太阳光照在天顶的亮度，以每平方米千坎德拉为单位，用于该模型的过程环境图。
      imageBasedLightingFactor: new Cesium.Cartesian2(1.0, 1.0),  //缩放来自地球、天空、大气和恒星天空盒的基于漫反射和镜面反射图像的照明
      // lightColor: new Cesium.Cartesian3(1, 2, 0),//着色模型时的灯光颜色。当undefined现场的灯光颜色来代替。
      showOutline: true, // 是否显示模型扩展轮廓
      // ellipsoid: new Cesium.Ellipsoid(new Cesium.Ellipsoid.WGS84), // 椭球体

      debugFreezeFrame: false, // 仅用于调试。确定是否只应使用上一帧的平铺进行渲染
      debugColorizeTiles: false,  //仅用于调试 为每个平铺指定随机颜色
      debugWireframe: false, // 仅用于调试 以线框形式渲染每个磁贴的内容
      debugShowUrl: false, // 仅用于调试 绘制标签以指示每个互动程序的url

      backFaceCulling: true ,//优化 是否剔除背面几何。如果为true，则背面剔除由glTF材料的doubleSided属性决定；如果为假，则禁用背面剔除。
      preloadWhenHidden: false, // 优化 show为false时 是否预加载
      preloadFlightDestinations: true, // 优化 相机飞行目的地是否预加载
      cullWithChildrenBounds:true, //优化  是否使用其子边界体积的并集剔除平铺
      cullRequestsWhileMoving:true, //优化  剔除未在相机视角
      cullRequestsWhileMovingMultiplier: 60.0, // 优化 剔除量
    });

    this.tileset.readyPromise.then((tileset)=>{
      this.viewer.scene.primitives.add(tileset);
      //获取3Dtlies的bounds范围
      var boundingSphere = tileset.boundingSphere;
      console.log(boundingSphere)
      //获取3Dtlies的范围中心点的弧度
      var cartographic = Cesium.Cartographic.fromCartesian(boundingSphere.center);
      console.log(cartographic)

      this.tileset.style = undefined
      numberCity(this.viewer,this.tileset)

      // const cartographic = Cesium.Cartographic.fromCartesian(this.tileset.boundingSphere.center);
      const surface = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 0.0);
      const offset = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 30);
      const translation = Cesium.Cartesian3.subtract(offset, surface, new Cesium.Cartesian3());
      this.tileset.modelMatrix = Cesium.Matrix4.fromTranslation(translation);


      // this.viewer.zoomTo(tileset, new Cesium.HeadingPitchRange(0.5, -0.2, tileset.boundingSphere.radius * 1.0));
    }).otherwise(function(error){
      console.log(error);
    });
  }

  addGroundScanLine(){
    var CartographicCenter = new Cesium.Cartographic(Cesium.Math.toRadians(121.49182292924358), Cesium.Math.toRadians(31.2437783652702), 300);
    var scanColor = new Cesium.Color(1.0, 0.0, 0.0, 0.1);
    GroundScanLine(this.viewer, CartographicCenter, 1500, scanColor, 10000);
  }

  createCar(){
    const model = this.viewer.entities.add({
      id:'ZARD_CAR',
      model: {
          uri: 'assets/models/gltf/Car1120.gltf',
          // minimumPixelSize: 88,
          scale : 80,
      },
      point: {
        pixelSize: 1,
        color: new Cesium.Color(1.0, 1.0, 1.0, 1.0, 0)
      }
    });
    const startTime = Cesium.JulianDate.fromDate(new Date());
    const time = Cesium.JulianDate.addSeconds(startTime, 4, new Cesium.JulianDate());
    const dataArr1 = [
      { lng: 121.50191055477433,
         lat:31.225222595931967,
      alt:1 },
      { lng: 121.49884169805318,
        lat:31.229080145821484,
      alt:1 },
      { lng: 121.49479298119923,
        lat:31.232371582523,
      alt:1 },
      { lng: 121.49038704320817,
        lat: 31.236026266513868,
      alt:1 },
      { lng: 121.48856776944044,
        lat: 31.238985494882336,
      alt:1 },
      { lng: 121.48860929474479,
        lat: 31.241338742122476,
      alt:1 },
      { lng: 121.4900309043861,
        lat: 31.24376757617907,
      alt:1 },
      { lng: 121.49440835397662,
        lat:31.245689628141704,
      alt:1 },
      { lng: 121.49915122418356,
        lat:31.24780061149752,
      alt:1 },
      { lng: 121.50418628502531,
        lat:31.24903285536835,
      alt:1 },
      { lng: 121.50984377276203,
        lat: 31.249101633147166,
      alt:1 },
      { lng: 121.51969211953117,
        lat: 31.248942732081233,
      alt:1 }
    ]
    this.trackObj = new TrackAnimation({
      viewer: this.viewer,
      pathArr: dataArr1,
      entity: model,
      runTime: startTime
    });
    this.trackObj.play();
    const model1 = this.viewer.entities.add({
      id:'ZARD_CAR1',
      model: {
          uri: 'assets/models/gltf/Car1120.gltf',
          // minimumPixelSize: 88,
          scale : 80,
      },
      point: {
        pixelSize: 1,
        color: new Cesium.Color(1.0, 1.0, 1.0, 1.0, 0)
      }
    });
    let trackObj1 = new TrackAnimation({
      viewer: this.viewer,
      pathArr: dataArr1,
      entity: model1,
      runTime: time
    });
    trackObj1.play();
  }

  addWater(){
    for(let item of riverData.features){
      const buildData = [];
      for (let xy of item.geometry.rings[0]){
        buildData.push(xy[0])
        buildData.push(xy[1])
        buildData.push(11)
      }
      Water(this.viewer,buildData)
      let entity = this.viewer.entities.add({
        polyline: {
          // positions: Cesium.Cartesian3.fromDegreesArray([121.8142, 30.8649, 121.8142, 30.8798]),
          positions:Cesium.Cartesian3.fromDegreesArrayHeights(buildData),
          width: 5,
          material:new Cesium.PolylineGlowMaterialProperty({
            glowPower : 2.3,
            color : Cesium.Color.BLUE,
            // color : Cesium.Color.YELLOW.withAlpha(100),
            // taperPower: 0.1
          })
      }})
    }
    // Water(this.viewer
      // [
      //   121.93770628339514 ,
      //   30.90989525340411 ,
      //   0,
      //   121.94179304137732,
      //    30.909861693589566,
      //    0,
      //    121.94591833644154,
      //    30.90885409927493,
      //    0,
      //    121.94903081429607,
      //    30.907175070796296,
      //    0,
      //    121.95144180168687,
      //    30.90502646120125,
      //    0,
      //    121.95322902361073,
      //    30.902274455081354,
      //    0,
      //    121.95447033047725,
      //    30.898752043613865,
      //    0,
      //    121.95454497797425,
      //    30.895633591542385,
      //    0,
      //    121.95341472305923,
      //    30.892650524496407,
      //    0,
      //    121.95143000951653,
      //    30.889769143047925,
      //    0,
      //    121.94890259964873,
      //    30.88765908612741,
      //    0,
      //    121.94524935785677,
      //    30.885783931027714,
      //    0,
      //    121.94058704020226,
      //    30.88521479153862,
      //    0,
      //    121.93639094306872,
      //    30.885716934595568,
      //    0,
      //    121.93219395692941,
      //    30.88712314673071,
      //    0,
      //    121.9289275019642,
      //    30.890003512749026,
      //    0,
      //    121.92670846518199,
      //    30.893588747457514,
      //    0,
      //    121.92584812345648,
      //    30.8982152905379,
      //    0,
      //    121.92701090380825,
      //    30.902039452712483,
      //    0,
      //    121.92883613978637,
      //    30.905429153718934,
      //    0,
      //    121.93218071226671,
      //    30.90798085793282,
      //    0,
      //    121.93556566796289,
      //    30.90986161530055,
      //    0,
      //    121.93743383238098,
      //    30.910130366791957,
      //    0
      // ]
      // )
  }

  lookPoint(){
    const position = {
      lon: 121.49182292924358,
      lat: 31.2437783652702,
      alt: 500
    }
    // var center = Cesium.Cartesian3.fromRadians(2.4213211833389243, 0.6171926869414084, 3626.0426275055174);
    var center = Cesium.Cartesian3.fromDegrees(position.lon,position.lat,position.alt)
    var transform = Cesium.Transforms.eastNorthUpToFixedFrame(center);
    this.viewer.scene.camera.lookAtTransform(transform, new Cesium.HeadingPitchRange(0, -Math.PI/8, 290));
    
    this.viewer.clock.onTick.addEventListener((clock)=> {
      this.viewer.scene.camera.rotateRight(0.005);
    });
  }

}
