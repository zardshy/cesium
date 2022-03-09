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


  julianDateFunc(){
    // 天文朱利安日期 与js Date() 相差8h，朱利安时间=UTC=GMT 北京时间=UTC+8=GMT+8
    let str = '2000-01-01 12:00:00'
    let julianDate = Cesium.JulianDate.fromDate(new Date(str),new Cesium.JulianDate())
    
    
    let fmJulian = julianDate.toString().replace(/T/, ' ').replace(/Z/, '').replace(/\.\d+/g, '');
    console.log(julianDate);

    // 添加时间
    let addDays= Cesium.JulianDate.addDays(julianDate,1,new Cesium.JulianDate());
    console.log("添加天数：",addDays.dayNumber,addDays.secondsOfDay);
    let addHours= Cesium.JulianDate.addHours(julianDate,1,new Cesium.JulianDate());
    console.log("添加小时：",addHours.dayNumber,addHours.secondsOfDay);
    let addSeconds= Cesium.JulianDate.addSeconds(julianDate,1,new Cesium.JulianDate());
    console.log("添加秒数：",addSeconds.dayNumber,addSeconds.secondsOfDay);

    // 时间差
    let diffDays=Cesium.JulianDate.daysDifference (addDays, addHours);
    console.log("相差天数：",diffDays);
    let diffSeconds= Cesium.JulianDate.secondsDifference(addHours,addSeconds);
    console.log("相差秒数：",diffSeconds);
  }

  scanLine(){
    this.viewer.scene.globe.enableLighting = true; // 光照
    this.viewer.scene.globe.depthTestAgainstTerrain = true;  // 深度检测
    this.viewer.scene.globe.showGroundAtmosphere = false; // 地球大气
    
    var CartographicCenter = new Cesium.Cartographic(Cesium.Math.toRadians(121.73584007025329), Cesium.Math.toRadians(30.88262548999319),1000);
    var scanColor = new Cesium.Color(1.0, 0.0, 0.0, 1);
    this.addRedMoveLine(this.viewer, CartographicCenter, 100, scanColor, 1000);
  }  

    /*
    添加扫描线 depth关闭   lon:-74.01296152309055 lat:40.70524201566827 height:129.14366696393927
    viewer
    cartographicCenter 扫描中心
    maxRadius 最大半径 米
    scanColor 扫描颜色
    duration 持续时间 毫秒
  */
    addRedMoveLine(viewer,cartographicCenter,maxRadius,scanColor,duration){
      var ScanSegmentShader =
      "uniform sampler2D colorTexture;\n" +
      "uniform sampler2D depthTexture;\n" +
      "varying vec2 v_textureCoordinates;\n" +
      "uniform vec4 u_scanCenterEC;\n" +
      "uniform vec3 u_scanPlaneNormalEC;\n" +
      "uniform float u_radius;\n" +
      "uniform vec4 u_scanColor;\n" +
      "vec4 toEye(in vec2 uv, in float depth)\n" +
      " {\n" +
        " vec2 xy = vec2((uv.x * 2.0 - 1.0),(uv.y * 2.0 - 1.0));\n" +
        " vec4 posInCamera =czm_inverseProjection * vec4(xy, depth, 1.0);\n" +
        " posInCamera =posInCamera / posInCamera.w;\n" +
        " return posInCamera;\n" +
      " }\n" +
      "vec3 pointProjectOnPlane(in vec3 planeNormal, in vec3 planeOrigin, in vec3 point)\n" +
      "{\n" +
          "vec3 v01 = point -planeOrigin;\n" +
          "float d = dot(planeNormal, v01) ;\n" +
          "return (point - planeNormal * d);\n" +
       "}\n" +
       "float getDepth(in vec4 depth)\n" +
       "{\n" +
          "float z_window = czm_unpackDepth(depth);\n" +
          "z_window = czm_reverseLogDepth(z_window);\n" +
          "float n_range = czm_depthRange.near;\n" +
          "float f_range = czm_depthRange.far;\n" +
          "return (2.0 * z_window - n_range - f_range) / (f_range - n_range);\n" +
       "}\n" +
       "void main()\n" +
       "{\n" +
          "gl_FragColor = texture2D(colorTexture, v_textureCoordinates);\n" +
          "float depth = getDepth( texture2D(depthTexture, v_textureCoordinates));\n" +
          "vec4 viewPos = toEye(v_textureCoordinates, depth);\n" +
          "vec3 prjOnPlane = pointProjectOnPlane(u_scanPlaneNormalEC.xyz, u_scanCenterEC.xyz, viewPos.xyz);\n" +
          "float dis = length(prjOnPlane.xyz - u_scanCenterEC.xyz);\n" +
          "if(dis < u_radius)\n" +
              "{\n" +
              "float f = 1.0 -abs(u_radius - dis) / u_radius;\n" +
              "f = pow(f, 4.0);\n" +
              "gl_FragColor = mix(gl_FragColor, u_scanColor, f);\n" +
           "}\n" +
        "}\n";
        var _Cartesian3Center = Cesium.Cartographic.toCartesian(cartographicCenter);
        var _Cartesian4Center = new Cesium.Cartesian4(_Cartesian3Center.x, _Cartesian3Center.y, _Cartesian3Center.z, 1);
        var _CartographicCenter1 = new Cesium.Cartographic(cartographicCenter.longitude, cartographicCenter.latitude, cartographicCenter.height + 500);
        var _Cartesian3Center1 = Cesium.Cartographic.toCartesian(_CartographicCenter1);
        var _Cartesian4Center1 = new Cesium.Cartesian4(_Cartesian3Center1.x, _Cartesian3Center1.y, _Cartesian3Center1.z, 1);
        var _time = (new Date()).getTime();
        var _scratchCartesian4Center = new Cesium.Cartesian4();
        var _scratchCartesian4Center1 = new Cesium.Cartesian4();
        var _scratchCartesian3Normal = new Cesium.Cartesian3();
        var ScanPostStage = new Cesium.PostProcessStage({
            fragmentShader: ScanSegmentShader,
            uniforms: {
                u_scanCenterEC: function () {
                    return Cesium.Matrix4.multiplyByVector(viewer.camera._viewMatrix, _Cartesian4Center, _scratchCartesian4Center);
                },
                u_scanPlaneNormalEC: function () {
                    var temp = Cesium.Matrix4.multiplyByVector(viewer.camera._viewMatrix, _Cartesian4Center, _scratchCartesian4Center);
                    var temp1 = Cesium.Matrix4.multiplyByVector(viewer.camera._viewMatrix, _Cartesian4Center1, _scratchCartesian4Center1);
                    _scratchCartesian3Normal.x = temp1.x - temp.x;
                    _scratchCartesian3Normal.y = temp1.y - temp.y;
                    _scratchCartesian3Normal.z = temp1.z - temp.z;
                    Cesium.Cartesian3.normalize(_scratchCartesian3Normal, _scratchCartesian3Normal);
                    return _scratchCartesian3Normal;
                },
                u_radius: function () {
                    return maxRadius * (((new Date()).getTime() - _time) % duration) / duration;
                },
                u_scanColor: scanColor
            }
        });
        viewer.scene.postProcessStages.add(ScanPostStage);
    }

  createObj1(){
    this.julianDateFunc()
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

    let  trackObj1= new TrackAnimation({
      viewer: this.viewer,
      pathArr: dataArr1,
      entity: model1,
      runTime: time
    });
  }


  createObj(){
    var pathPosition = new Cesium.SampledPositionProperty();
    var entityPath = this.viewer.entities.add({
      position : pathPosition,
      name : 'path',
      path : {
          show : true,
          leadTime : 0,
          trailTime : 60,
          width : 10,
          resolution : 1,
          material : new Cesium.PolylineGlowMaterialProperty({
              glowPower : 0.3,
              color : Cesium.Color.PALEGOLDENROD
          })
      }
    });
    let lng = 121.1;
    let lat = 31.1;
    let alt = 1;
    this.viewer.trackedEntity = entityPath;
    this.viewer.clock.shouldAnimate = true;


    // setInterval(()=>{
    //   const position = Cesium.Cartesian3.fromDegrees(lng, lat,alt);
    //   entityPath.position.addSample(Cesium.JulianDate.now(), position);
    //   lng+= 0.001;
    //   lat+= 0.001;
    //   alt+= 0.001;
    // },100)

 
      // lng = 121.2;
      // lat = 31.2;
      // alt =11;
      // let addSeconds= Cesium.JulianDate.addSeconds(Cesium.JulianDate.now(),3,new Cesium.JulianDate());
      // const position = Cesium.Cartesian3.fromDegrees(lng, lat,alt);
      // entityPath.position.addSample(addSeconds, position);
 

    // this.viewer.scene.preUpdate.addEventListener((scene, time)=>{
    //   // let speedVector = Cesium.Cartesian3.multiplyByScalar(Cesium.Cartesian3.UNIT_X, speed / 10, speedVector);
    //   // let position = Cesium.Matrix4.multiplyByPoint(planePrimitive.modelMatrix, speedVector, position);
    //   const position = Cesium.Cartesian3.fromDegrees(lng, lat,alt);
    //   entityPath.position.addSample(Cesium.JulianDate.now(), position);
    //   // Cesium.Transforms.headingPitchRollToFixedFrame(position, hpRoll, Cesium.Ellipsoid.WGS84, fixedFrameTransform, planePrimitive.modelMatrix);
    //   lng+= 0.001;
    //   lat+= 0.001;
    //   alt+= 0.001;
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
