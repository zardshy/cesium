/*
 * @Author: your name
 * @Date: 2021-10-12 17:09:01
 * @LastEditTime: 2021-10-13 18:04:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ngcesium\src\app\pages\welcome\pages\init-cesium\init-cesium.component.ts
 */
import { Component, OnInit,Output, EventEmitter  } from '@angular/core';
import addBaseMap from '../../func/baseMap'
declare var Cesium:any;
@Component({
  selector: 'app-init-cesium',
  templateUrl: './init-cesium.component.html',
  styleUrls: ['./init-cesium.component.css']
})
export class InitCesiumComponent implements OnInit {
  @Output() mapLoaded = new EventEmitter();
  public viewer;
  constructor() { }

  ngOnInit(): void {
    this.initCesium();
  }

  initCesium(){
    const controlConf ={
      geocoder:false,  // 查找位置
      homeButton:false,  // 首页
      sceneModePicker:false, // 选择视角模式 3d/2d
      baseLayerPicker:false,  // 底图选择
      navigationHelpButton:false, // 导航帮助
      animation:false,  // 动画器件控制视图动画的播放速度
      CreditsDisplay: false, // 商标版权
      timeline:false, //时间轴
      fullscreenButton:false, // 全屏
      vrButton:false, //vr
      infoBox:false, // 信息框
      selectionIndicator: false,  // 要素选择框
      shouldAnimate:false,  // 模型动画
    }
    this.viewer = new Cesium.Viewer('appCesium',controlConf);
    // fps
    this.viewer.scene.debugShowFramesPerSecond = true;
    // logo
    this.viewer.cesiumWidget.creditContainer.style.display = "none"
    // 相机是否允许进入地下
    this.viewer.scene.screenSpaceCameraController.enableCollisionDetection = false;
    // 光照
    this.viewer.scene.globe.enableLighting = false;
    // 阴影
    this.viewer.shadows= false

    addBaseMap(this.viewer)
    this.mapLoaded.emit(this.viewer);

    
    // this.setImgBg()
    // this.addLayer();

    // setTimeout(() => {
    //    this.flyToSH();
    //    this.viewer.scene.globe.enableLighting = false;
    //    this.viewer.scene.globe.depthTestAgainstTerrain = true;
    //    this.viewer.scene.globe.showGroundAtmosphere = false;
    //    var CartographicCenter = new Cesium.Cartographic(Cesium.Math.toRadians(121.16), Cesium.Math.toRadians(31.11), 0);
    //    var scanColor = new Cesium.Color(1.0, 0.0, 0.0, 1);
    //    this.addRedMoveLine(this.viewer, CartographicCenter, 11500, scanColor, 4000);
    // }, 2000);
  }


  flyToSH(){
    this.viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(121.16, 31.11, 375000.0),
    });
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

  // 添加立方体
  addLFT(){
    var redBox = this.viewer.entities.add({
      id:'entityid',
      name : 'Red box with black outline',
      position: Cesium.Cartesian3.fromDegrees(121.0, 31.0, 0.0),
      box : {
        // 尺寸
        dimensions : new Cesium.Cartesian3(300000.0, 300000.0, 200000.0),
        // 材质
        material : new Cesium.ImageMaterialProperty({
          color: Cesium.Color.BLUE,
          repeat : new Cesium.Cartesian2(1, 1)
        }),
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

  // 设置材质
  setImgBg(){
    var imgMaterial = new Cesium.ImageMaterialProperty({
      image:'/assets/IMG/aa.jpg',
      color: Cesium.Color.BLUE,
      repeat : new Cesium.Cartesian2(1, 1)
    })
    var entity = this.viewer.entities.add({
      id:'ceshi1',
      name:'haha',
      type:'23333',
      position: Cesium.Cartesian3.fromDegrees(-103.0, 40.0),
      ellipse : {
        semiMinorAxis : 250000.0,
        semiMajorAxis : 400000.0,
        // material : Cesium.Color.BLUE.withAlpha(0.5)//可设置不同的MaterialProperty
        material:imgMaterial
      }
    });
    // this.viewer.zoomTo(this.viewer.entities);
  }



  addLayer(){
    // 加载底图
    var image_Source = new Cesium.UrlTemplateImageryProvider({
      //url: 'http://mt0.google.cn/vt/lyrs=t,r&hl=zh-CN&gl=cn&x={x}&y={y}&z={z}',
      //url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      url: "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}",
      //tilingScheme : new Cesium.GeographicTilingScheme(),
      credit: ''
    });

    // 加载arcgis wms
    var provider = new Cesium.ArcGisMapServerImageryProvider ({
      // url : 'https://sampleserver1.arcgisonline.com/ArcGIS/services/Specialty/ESRI_StatesCitiesRivers_USA/MapServer',
      url: 'http://tilemap.smart-sdc.com/arcgis/rest/services/YC_DSFHQ_Wastewater_Area_GCJ02/MapServer',
      layers : '0',
      proxy: new Cesium.DefaultProxy('/proxy/')
    });
    this.viewer.imageryLayers.addImageryProvider(provider);

    // 加载geoserver wms
    var geoserverUrl = 'http://localhost:8080/geoserver/WebGIS';
    var wms = new Cesium.WebMapServiceImageryProvider({
        url: geoserverUrl+'/wms',
        layers: 'WebGIS:testLayer',
        parameters: {
        service : 'WMS',
        format: 'image/png',
        transparent: true,
      }
    });
    // this.viewer.imageryLayers.addImageryProvider(wms);
  }

}
