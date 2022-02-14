/*
 * @Author: your name
 * @Date: 2021-10-12 17:29:25
 * @LastEditTime: 2021-11-05 00:00:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ngcesium\src\app\pages\welcome\pages\add-entity\add-entity.component.ts
 */
import { Component, OnInit } from '@angular/core';
declare var Cesium:any;
import { createMarkerLayer } from '../../func/addMarker'
import diffCircle from '../../func/cavas/diffCircle'

@Component({
  selector: 'app-add-entity',
  templateUrl: './add-entity.component.html',
  styleUrls: ['./add-entity.component.css']
})
export class AddEntityComponent implements OnInit {
  public viewer;
  public polyLine;
  constructor() { }

  ngOnInit(): void {
  }

  mapLoaded(e){
    this.viewer = e;
    // 拾取实体
    // const handler = new Cesium.ScreenSpaceEventHandler(this.viewer.scene.canvas);
    // handler.setInputAction((movement)=>{
    //   const picked = this.viewer.scene.pick(movement.position);
      // if(picked){
      //   const entity = Cesium.defaultValue(picked.id, picked.primitive.id);
      //   if (entity instanceof Cesium.Entity) {
      //     console.log(entity)
      //     return entity;
      //   }
      // }
    // },Cesium.ScreenSpaceEventType.LEFT_CLICK)
  }


  // 实体集
  getEntities(){
    var entity =new Cesium.Entity({
      id:'zard',
      polygon : {
        hierarchy : Cesium.Cartesian3.fromDegreesArray([
          -109.080842,45.002073,
          -105.91517,45.002073,
          -104.058488,44.996596,
          -104.053011,43.002989,
          -104.053011,41.003906,
          -105.728954,40.998429,
          -107.919731,41.003906,
          -109.04798,40.998429,
          -111.047063,40.998429,
          -111.047063,42.000709,
          -111.047063,44.476286,
          -111.05254,45.002073]),
        height : 10,
        // material : Cesium.Color.RED.withAlpha(0.5), // 材质
        material: 'assets/IMG/aa.jpg',
        outline : true,
        outlineColor : Cesium.Color.BLACK
      }
    })
    // 通过ID获取实体
    var entity = this.viewer.entities.getById('zard');

    // 获取实体 如果不存在则创建
    var entity1 = this.viewer.entities.getOrCreateEntity('uniqueId');

    // 实体集监听
    // this.viewer.entities.collectionChanged.addEventListener(onChanged);
    // 添加
    this.viewer.entities.add(entity)
    // 删除
    this.viewer.entities.remove(entity) 
    // 删除实体通过ID
    this.viewer.entities.remove('zard') 
    // 删除所有
    this.viewer.entities.removeAll();
    // 获取实体
    this.viewer.entities.getById('zard');
    // 是否包含
    this.viewer.entities.contains(entity)

    // 实体集监听
    function onChanged(collection, added, removed, changed){
      var msg = 'Added ids';
      for(var i = 0; i < added.length; i++) {
        msg += '\n' + added[i].id;
      }
      console.log(msg);
    }

  }
  
  // 添加立方体
  addLFT(){
    var imgMaterial = new Cesium.ImageMaterialProperty({
      image:'/assets/IMG/aa.jpg',
      color: Cesium.Color.BLUE,
      repeat : new Cesium.Cartesian2(1, 1)
    })

    var redBox = this.viewer.entities.add({
      id:'entityid123',
      name : 'entityname123',
      position: Cesium.Cartesian3.fromDegrees(121.0, 31.0, 0.0),
      box : {
        // 尺寸
        dimensions : new Cesium.Cartesian3(300000.0, 300000.0, 200000.0),
        // 材质
        material : new Cesium.ImageMaterialProperty({
          color: Cesium.Color.BLUE,
          repeat : new Cesium.Cartesian2(1, 1)
        }),
        // material :imgMaterial,

        outline : true,
        outlineColor : Cesium.Color.BLACK
      },
      description:'描述信息',
      label : {
        text : 'Citizens Bank Park',
        font : '14pt monospace',
        style: Cesium.LabelStyle.FILL_AND_OUTLINE,
        outlineWidth : 2,
        verticalOrigin : Cesium.VerticalOrigin.BOTTOM,
        pixelOffset : new Cesium.Cartesian2(0, 1)
      }
    });
    this.viewer.zoomTo(this.viewer.entities);
    setTimeout(() => {
      // var entity = this.viewer.entities.getById('entityid');
      // this.viewer.entities.remove(entity) 
    }, 7000);
  }

  // 添加多边形
  addDBX(){
    var wyoming = this.viewer.entities.add({
      id:'zard',
      polygon : {
        hierarchy : Cesium.Cartesian3.fromDegreesArray([
          -109.080842,45.002073,
          -105.91517,45.002073,
          -104.058488,44.996596,
          -104.053011,43.002989,
          -104.053011,41.003906,
          -105.728954,40.998429,
          -107.919731,41.003906,
          -109.04798,40.998429,
          -111.047063,40.998429,
          -111.047063,42.000709,
          -111.047063,44.476286,
          -111.05254,45.002073]),
        height : 0,
        // material : Cesium.Color.RED.withAlpha(0.5), // 材质
        material: 'assets/IMG/aa.jpg',
        outline : true,
        outlineColor : Cesium.Color.BLACK
      }
    });
    this.viewer.zoomTo(wyoming);
  }

  // 添加折线
  addZX(){
    this.polyLine = this.viewer.entities.add({
      polyline : {
          positions : Cesium.Cartesian3.fromDegreesArray([121.1,31.1,122,32]),
          width : 5,
          // material : Cesium.Color.RED,

          color : Cesium.Color.RED,
          outlineWidth : 3,
          outlineColor : Cesium.Color.BLACK
    }});
    this.viewer.zoomTo(this.viewer.entities);
    // 发光
    // entity.polyline.material = new Cesium.PolylineGlowMaterialProperty({
    //   glowPower : 0.9,
    //   color : Cesium.Color.RED
    // });
  }

  addPlane(){
    let c = diffCircle()

    const position = Cesium.Cartesian3.fromDegrees(121,31,100);
    const canvas = document.createElement("canvas");
    canvas.width = 500;
    canvas.height = 150;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle="#000000";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    // 法线
    const normal = Cesium.Cartesian3.UNIT_Y;
    const board = this.viewer.entities.add({
      position: position,
      plane: {
          plane:new Cesium.Plane(normal,0),
          dimensions: new Cesium.Cartesian2(5, 1.5),
          material: new Cesium.ImageMaterialProperty({
              image: c,
              transparent: true //透明贴图
          })
      }
    });
    this.viewer.zoomTo(board);
  }

  updatepolyLine(){
    this.polyLine.polyline.material = new Cesium.PolylineGlowMaterialProperty({
      glowPower : 0.2,
      color : Cesium.Color.YELLOW,
      taperPower: 0.1
    });
  }

  addPoint(){
    let dataArr = [
      { lng:121.1,lat:31.1,alt:10,name:'zard1' },
      { lng:121.13,lat:31.13,alt:0,name:'zard2' }
    ]

    let billBoardConfig = {
      width: 30,
      height: 50,
      image: 'assets/IMG/aa.jpg',
      distanceDisplayCondition:[0,200000],
      scaleByDistance:[1, 1, 2e5, 1]
    }
    let layerConf = {
      dataArr,
      layerId:'markerlayer',
      fieldNameId:'name',
      isLabel:true,
      isBillBoard:true,
      billBoardConfig,
      isPoint:false,
      isZoomTo: true
    }
    createMarkerLayer(this.viewer,layerConf);

    function callBack(res){
      console.log(res)
    }
    let handler = this.addMarkerPick(callBack);
    setTimeout(() => {
      this.removeMarkerPick(handler)
    }, 5000);

      //this.viewer.dataSources.remove(this.viewer.dataSources.getByName('markerlayer')[0]); // 删除单个数据集
      // this.viewer.dataSources.removeAll() // 删除所有数据集
  }


  addMarkerPick(callBack){
      const handler = new Cesium.ScreenSpaceEventHandler(this.viewer.scene.canvas);
      handler.setInputAction((movement)=>{
        const picked = this.viewer.scene.pick(movement.position);
        if (picked){
          const entity = Cesium.defaultValue(picked.id, picked.primitive.id);
          if (entity instanceof Cesium.Entity) {
            callBack(entity.attr)
          }
        }
      },Cesium.ScreenSpaceEventType.LEFT_CLICK)
      return handler
  }

  removeMarkerPick(handler){
    handler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_CLICK)
  }

  drawLine(){
    let pointArr = [];
    let handler = new Cesium.ScreenSpaceEventHandler(this.viewer.scene.canvas);
    handler.setInputAction((e)=>{

      let ray = this.viewer.camera.getPickRay(e.position);
      let position = this.viewer.scene.globe.pick(ray, this.viewer.scene);
      let cartographic = Cesium.Cartographic.fromCartesian(position);
      let lon = Cesium.Math.toDegrees(cartographic.longitude);
      let lat = Cesium.Math.toDegrees(cartographic.latitude);
      console.log(lon,lat)

      let pointPrimitives = null;
      pointPrimitives = this.viewer.scene.primitives.add(new Cesium.PointPrimitiveCollection());
      pointPrimitives.add({
        pixelSize: 10,
        color: Cesium.Color.RED,
        position: Cesium.Cartesian3.fromDegrees(lon, lat),
      });
 
      pointArr.push(lon)
      pointArr.push(lat)
      console.log(pointArr)
      this.viewer.entities.add({
        name: 'line',
        polyline: {
            positions: Cesium.Cartesian3.fromDegreesArray(pointArr),
            width: 2,
            material: Cesium.Color.YELLOW,
            clampToGround: true
        }
      })

    },Cesium.ScreenSpaceEventType.LEFT_CLICK)
  }


}
