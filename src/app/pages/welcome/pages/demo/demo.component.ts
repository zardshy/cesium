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
  }

  mapLoaded(e){
    this.viewer = e;
    this.clickCoord();
    this.add3Dtiles();
    // this.addGroundScanLine()
    this.createCar()
    this.addWater()
    this.addPolyLine();
    this.createFlyLine()
    this.addWall();

    this.addjuhe()
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
            121.93770628339514 ,
            30.90989525340411 ,
            666,
            121.94179304137732,
             30.909861693589566,
             666,
             121.94591833644154,
             30.90885409927493,
             666,
             121.94903081429607,
             30.907175070796296,
             666,
             121.95144180168687,
             30.90502646120125,
             666,
             121.95322902361073,
             30.902274455081354,
             666,
             121.95447033047725,
             30.898752043613865,
             666,
             121.95454497797425,
             30.895633591542385,
             666,
             121.95341472305923,
             30.892650524496407,
             666,
             121.95143000951653,
             30.889769143047925,
             666,
             121.94890259964873,
             30.88765908612741,
             666,
             121.94524935785677,
             30.885783931027714,
             666,
             121.94058704020226,
             30.88521479153862,
             666,
             121.93639094306872,
             30.885716934595568,
             666,
             121.93219395692941,
             30.88712314673071,
             666,
             121.9289275019642,
             30.890003512749026,
             666,
             121.92670846518199,
             30.893588747457514,
             666,
             121.92584812345648,
             30.8982152905379,
             666,
             121.92701090380825,
             30.902039452712483,
             666,
             121.92883613978637,
             30.905429153718934,
             666,
             121.93218071226671,
             30.90798085793282,
             666,
             121.93556566796289,
             30.90986161530055,
             666,
             121.93743383238098,
             30.910130366791957,
             666
          ]),
          material: new DynamicWallMaterialProperty( 100,undefined)
      }
    })
  }

  createFlyLine(){
    let point1 = [121.8142, 30.8649],
    point2 = [121.8142, 30.9098],
    h = 3000;
    flyLine(this.viewer,point1,point2,h,2)
  }

  addPolyLine(){
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
    var height = -50;
    var rotation = 0;   //旋转度
    var url = "assets/models/3dtiles/buildings/tileset.json";
    // var url = "assets/models/3dtiles/sh/tileset.json";
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


      this.viewer.zoomTo(tileset, new Cesium.HeadingPitchRange(0.5, -0.2, tileset.boundingSphere.radius * 1.0));
    }).otherwise(function(error){
      console.log(error);
    });
  }

  addGroundScanLine(){
    var CartographicCenter = new Cesium.Cartographic(Cesium.Math.toRadians(121.93986486144715), Cesium.Math.toRadians(30.897897442589816), 300);
    var scanColor = new Cesium.Color(1.0, 0.0, 0.0, 0.1);
    GroundScanLine(this.viewer, CartographicCenter, 5500, scanColor, 10000);
  }

  createCar(){
    const model = this.viewer.entities.add({
      id:'ZARD_CAR',
      model: {
          uri: 'assets/models/gltf/Car1120.gltf',
          minimumPixelSize: 88,
      },
      point: {
        pixelSize: 1,
        color: new Cesium.Color(1.0, 1.0, 1.0, 1.0, 0)
      }
    });
    const startTime = Cesium.JulianDate.fromDate(new Date());
    const time = Cesium.JulianDate.addSeconds(startTime, 4, new Cesium.JulianDate());
    const dataArr1 = [
      { lng: 121.72881292050941,
         lat:30.88552725737092,
      alt:100 },
      { lng: 121.76061292381067,
        lat:30.885676115772853,
      alt:100 },
      { lng: 121.7827129387377,
        lat:30.88358466647911,
      alt:100 },
      { lng: 121.79796665045723,
        lat:30.881991804362695,
      alt:100 },
      { lng: 121.8504135761098,
        lat:30.883759166283575,
      alt:100 },
      { lng: 121.86320964198397,
        lat:30.886818896419854,
      alt:100 },
      { lng: 121.8728227418074,
        lat:30.89522948969958,
      alt:100 },
      { lng: 121.87884732499721,
        lat:30.941891461472625,
      alt:100 },
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
          minimumPixelSize: 88,
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
    Water(this.viewer,
      [
        121.93770628339514 ,
        30.90989525340411 ,
        0,
        121.94179304137732,
         30.909861693589566,
         0,
         121.94591833644154,
         30.90885409927493,
         0,
         121.94903081429607,
         30.907175070796296,
         0,
         121.95144180168687,
         30.90502646120125,
         0,
         121.95322902361073,
         30.902274455081354,
         0,
         121.95447033047725,
         30.898752043613865,
         0,
         121.95454497797425,
         30.895633591542385,
         0,
         121.95341472305923,
         30.892650524496407,
         0,
         121.95143000951653,
         30.889769143047925,
         0,
         121.94890259964873,
         30.88765908612741,
         0,
         121.94524935785677,
         30.885783931027714,
         0,
         121.94058704020226,
         30.88521479153862,
         0,
         121.93639094306872,
         30.885716934595568,
         0,
         121.93219395692941,
         30.88712314673071,
         0,
         121.9289275019642,
         30.890003512749026,
         0,
         121.92670846518199,
         30.893588747457514,
         0,
         121.92584812345648,
         30.8982152905379,
         0,
         121.92701090380825,
         30.902039452712483,
         0,
         121.92883613978637,
         30.905429153718934,
         0,
         121.93218071226671,
         30.90798085793282,
         0,
         121.93556566796289,
         30.90986161530055,
         0,
         121.93743383238098,
         30.910130366791957,
         0
      ])
  }

}
