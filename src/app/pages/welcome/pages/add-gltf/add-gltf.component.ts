import { Component, OnInit } from '@angular/core';
declare var Cesium:any;
declare var turf:any;
import flyConf from '../track/flyPath'
import { TrackAnimation } from '../../func/trackAnimation'

@Component({
  selector: 'app-add-gltf',
  templateUrl: './add-gltf.component.html',
  styleUrls: ['./add-gltf.component.css']
})
export class AddGltfComponent implements OnInit {
  public viewer;
  public model;
  constructor() { }

  ngOnInit(): void {
  }

  mapLoaded(e){
    this.viewer = e;
    // var bloom = this.viewer.scene.postProcessStages.bloom;
    // bloom.enabled = true;
    // bloom.uniforms.glowOnly = false;
    // bloom.uniforms.contrast = 128;
    // bloom.uniforms.brightness = -0.3;
    // bloom.uniforms.delta = 1;
    // bloom.uniforms.sigma = 2;
    // bloom.uniforms.stepSize = 1
  }

  mouseSelect(){
    // 边缘检测
    var silhouetteBlue = Cesium.PostProcessStageLibrary.createEdgeDetectionStage();
    silhouetteBlue.enabled = true;
    silhouetteBlue.uniforms.color = Cesium.Color.BLUE;
    silhouetteBlue.uniforms.length = 0.05;
    silhouetteBlue.selected = [];

    this.viewer.scene.postProcessStages.add(
      Cesium.PostProcessStageLibrary.createSilhouetteStage([
        silhouetteBlue
      ])
    );

    var handler = new Cesium.ScreenSpaceEventHandler(this.viewer.scene.canvas);
    handler.setInputAction((event)=> {
      silhouetteBlue.selected = [];
      var picked = this.viewer.scene.pick(event.position);
      if(!Cesium.defined(picked)){
        return
      }
      console.log(picked)
      if (picked.id){
        silhouetteBlue.selected = [picked.primitive];
      }
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
  }

  // 通过entity 添加模型
  addGltfModel_entity(){
    var position = Cesium.Cartesian3.fromDegrees(121.1, 31.1);
    var heading = Cesium.Math.toRadians(100);
    var pitch = Cesium.Math.toRadians(0);
    var roll = Cesium.Math.toRadians(0.0);
    // 仰俯角、偏转角、翻滚角  注意旋转中心是建模时的模型中心而不是笛卡尔坐标系
    var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
    // 模型姿态
    var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
    var entity = this.viewer.entities.add({
      id:'zard',
      position : position,
      orientation : orientation,
      label : {
        text : '测试名称\n 123',
        // font : '14pt Source Han Sans CN',
        font : '14pt monospace',
        fillColor:new Cesium.Color.fromCssColorString("rgba(255, 255, 255,1)"),   //字体颜色
        scale: 0.8,
        backgroundColor: new Cesium.Color.fromCssColorString("rgba(28, 28, 28, 1)"),    //背景颜色
        backgroundPadding:new Cesium.Cartesian2(20,10) ,
        showBackground: true,                //是否显示背景颜色
        style: Cesium.LabelStyle.FILL_AND_OUTLINE,        //label样式
        outlineWidth : 2,                    
        verticalOrigin : Cesium.VerticalOrigin.TOP,//垂直位置
        // horizontalOrigin :Cesium.HorizontalOrigin.LEFT,//水平位置
        // pixelOffset: Cesium.Cartesian2.ZERO,        
        // eyeOffset: Cesium.Cartesian3.ZERO,
        heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
        eyeOffset: new Cesium.Cartesian3(0, 120,0),
        distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 2000),
      },
      point: {
        pixelSize: 10,
        color: Cesium.Color.YELLOW,
        distanceDisplayCondition: new Cesium.DistanceDisplayCondition(8000, 2000000000),
      },
      billboard : {
        image : 'assets/IMG/aa.jpg',
        width : 31,
        height : 31,
        distanceDisplayCondition: new Cesium.DistanceDisplayCondition(4000,8000)
      },
      model : {
          // color: new Cesium.Color(0 ,224 ,0,0.001),
          uri : 'assets/models/gltf/Car1120.gltf',
          scale : 50,
          distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 4000)
      }
    })
    this.viewer.zoomTo(entity);
  }

  // 通过primitive 添加模型
  addGltfModel_primitives(){
    const position = Cesium.Cartesian3.fromDegrees(121.62898254394531, 31.02804946899414, 0)
    // 模型矩阵
    const modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(position)
    
    this.model = this.viewer.scene.primitives.add(
      Cesium.Model.fromGltf({  
        // distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 2000),
      id:'zardModel',
      show: true,
      url: 'assets/models/gltf/Car1120.gltf',
      // basePath:'assets/models/gltf/Car1120.gltf',
      modelMatrix,
      allowPicking : false,  // 是否可选取
      scale : 50 ,  // 缩放比例
      minimumPixelSize: 128, // 最小像素大小
      maximumScale: 20000, // 模型的最大比例尺大小。 minimumPixelSize的上限,
      // shadows:
      // color: new Cesium.Color(1,2,3,1), // 混合渲染色  
      // ColorBlendMode :10,
      // colorBlendAmount: 1,
      // lightColor:new Cesium.Color(1,2,3,1),
      showOutline: true, //是否扩展轮廓
      incrementallyLoadTextures: true, // 加载模型后纹理是否可以继续流入
      runAnimations: true, // 是否应启动模型中指定的glTF动画
      clampAnimations: true, // 指定glTF动画是否应在没有关键帧的持续时间内保持最后一个姿势
      debugShowBoundingVolume : false, // 调试球体边界
      debugWireframe: false // 调试线框

    }));  

    //延X轴放大2倍
    //延Y轴放大3倍
    //延Z轴放大4倍
    // const scale=Cesium.Matrix4.fromScale(new Cesium.Cartesian3(2,3,4),new Cesium.Matrix4)
    // this.model.modelMatrix=Cesium.Matrix4.multiply(this.model.modelMatrix,scale,this.model.modelMatrix)


     // 模型平移 延Y轴平移100m
    const translation=Cesium.Matrix4.fromTranslation(new Cesium.Cartesian3(0,1000,0))
    Cesium.Matrix4.multiply(this.model.modelMatrix,translation, this.model.modelMatrix)

    // 模型旋转 延Z轴旋转90度
    const angel=Cesium.Matrix3.fromRotationZ(Cesium.Math.toRadians(90))
    const rotation=Cesium.Matrix4.fromRotationTranslation(angel)
    Cesium.Matrix4.multiply(this.model.modelMatrix,rotation,this.model.modelMatrix)

    Cesium.when(this.model.readyPromise).then((model) =>{
      // model.activeAnimations.addAll({
      //     loop : Cesium.ModelAnimationLoop.REPEAT
      // });
      this.viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(121.62898254394531, 31.02804946899414, 1000),
        orientation: {
          heading :Cesium.Math.toRadians(0.0), // 方向
          pitch :Cesium.Math.toRadians(-45.0),// 倾斜角度
          roll :0
        }
      });
    });
  }

  run(){
     this.viewer.clock.shouldAnimate =true;
      // const dataArr = [
      //   { lng: 121.1, lat:31.1, alt:100 },
      //   { lng: 121.2, lat:31.2, alt:100 },
      //   { lng: 121.2, lat:31.1, alt:100 },
      //   { lng: 121.1, lat:31.3, alt:100 },
      // ]
      const dataArr = flyConf[0].pathPositionArr;

    // this.viewer.scene.globe.depthTestAgainstTerrain = true;
    //设置随机数种子以获得一致的结果
    Cesium.Math.setRandomNumberSeed(3);
    // 起始时间
    let start = Cesium.JulianDate.fromDate(new Date());
    // 结束时间
    let stop = Cesium.JulianDate.addSeconds(start, 360, new Cesium.JulianDate());

    // 设置始时钟始时间
    this.viewer.clock.startTime = start.clone();
    // 设置时钟当前时间
    this.viewer.clock.currentTime = start.clone();
    // 设置始终停止时间
    this.viewer.clock.stopTime  = stop.clone();
    // 时间速率，数字越大时间过的越快
    this.viewer.clock.multiplier = 100;
    // 时间轴 
    // view.timeline.zoomTo(start,stop);
    // 循环执行
    this.viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP;
      const property = new Cesium.SampledPositionProperty();
      for (let i=0; i<dataArr.length; i++){
        let time = Cesium.JulianDate.addSeconds(start, i, new Cesium.JulianDate);
        let position = Cesium.Cartesian3.fromDegrees(dataArr[i].lng, dataArr[i].lat,dataArr[i].alt);
        property.addSample(time, position);
      }

      const model = this.viewer.entities.add({
        id:'zardcar',
        // model: {
        //     uri: 'assets/models/gltf/Car1120.gltf',
        //     minimumPixelSize: 200, // 最小像素大小
        //     maximumScale: 200, // 模型的最大比例尺大小。 minimumPixelSize的上限,
        // }
        availability:new Cesium.TimeIntervalCollection([new Cesium.TimeInterval({ start : start,stop : stop})]),
        point: {
          pixelSize: 1,
          color: new Cesium.Color(1.0, 1.0, 1.0, 1.0, 0)
        },
        position: property,
        orientation: new Cesium.VelocityOrientationProperty(property),
      });

    // 将路径显示为以0.1秒为增量采样的路径线
    // model.path=  {
    //   resolution : 0.1,
    //   material : new Cesium.PolylineGlowMaterialProperty({
    //       glowPower : 0.1,
    //       color : Cesium.Color.YELLOW
    //   }),
    //   width :3
    // }
    model.billboard = {
        "image" : "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTgzNDY3MTIyNzY1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjM2MDMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTc5LjQ2MzUyOSAyMDYuMDA0NzA2Yy0zMC4xMTc2NDctMTQ2Ljk3NDExOC02MC4yMzUyOTQtMTYyLjYzNTI5NC02MC4yMzUyOTQtMTYyLjYzNTI5NC00LjgxODgyNC00LjgxODgyNC0xMC44NDIzNTMtNC44MTg4MjQtMTUuNjYxMTc2IDAgMCAwLTMwLjExNzY0NyAxNS42NjExNzYtNjAuMjM1Mjk0IDE2Mi42MzUyOTQgMCAwLTE5LjI3NTI5NCAxMDIuNC0xOS4yNzUyOTQgMTg1LjUyNDcwNlY1NTQuMTY0NzA2YzAgNDUuNzc4ODI0IDE3NC42ODIzNTMgNDAuOTYgMTc0LjY4MjM1MyAzLjYxNDExOFYzOTEuNTI5NDEyYzEuMjA0NzA2LTgzLjEyNDcwNi0xOS4yNzUyOTQtMTg1LjUyNDcwNi0xOS4yNzUyOTUtMTg1LjUyNDcwNnpNNTY2LjIxMTc2NSAzMTAuODE0MTE4YzAgNi4wMjM1MjktMS4yMDQ3MDYgNC44MTg4MjQtNi4wMjM1MyA2LjAyMzUyOWgtMTAuODQyMzUzcy0xNC40NTY0NzEtMTc4LjI5NjQ3MS0yNy43MDgyMzUtMjMzLjcxMjk0MWMwIDAgNDguMTg4MjM1IDEyMS42NzUyOTQgNDQuNTc0MTE4IDIyNy42ODk0MTJ6TTQ1NC4xNzQxMTggODM2LjA2NTg4Mmw3LjIyODIzNS0yMDkuNjE4ODIzYy02LjAyMzUyOS0yLjQwOTQxMi0xMC44NDIzNTMtNC44MTg4MjQtMTUuNjYxMTc3LTcuMjI4MjM1bDguNDMyOTQyIDIxNi44NDcwNTh6TTQzMS4yODQ3MDYgNzQ4LjEyMjM1M2w0LjgxODgyMy0xMzYuMTMxNzY1Yy0zLjYxNDExOC0zLjYxNDExOC03LjIyODIzNS03LjIyODIzNS05LjYzNzY0Ny0xMi4wNDcwNTlsNC44MTg4MjQgMTQ4LjE3ODgyNHpNNDgzLjA4NzA1OSA4OTUuMDk2NDcxbDkuNjM3NjQ3LTI2MS40MjExNzdjLTYuMDIzNTI5IDAtMTIuMDQ3MDU5LTEuMjA0NzA2LTE2Ljg2NTg4Mi0yLjQwOTQxMmw3LjIyODIzNSAyNjMuODMwNTg5ek01NzMuNDQgODMyLjQ1MTc2NWw3LjIyODIzNS0yMTUuNjQyMzUzYy0zLjYxNDExOCAzLjYxNDExOC04LjQzMjk0MSA2LjAyMzUyOS0xNC40NTY0NyA4LjQzMjk0MWw3LjIyODIzNSAyMDcuMjA5NDEyek01MDMuNTY3MDU5IDYzNC44OGw5LjYzNzY0NyAzNTAuNTY5NDEyIDkuNjM3NjQ3LTM1MC41Njk0MTJjLTYuMDIzNTI5IDAtMTMuMjUxNzY1IDEuMjA0NzA2LTE5LjI3NTI5NCAwek01OTIuNzE1Mjk0IDc1Mi45NDExNzZsNC44MTg4MjQtMTQ5LjM4MzUyOWMtMi40MDk0MTIgMy42MTQxMTgtNi4wMjM1MjkgNi4wMjM1MjktOS42Mzc2NDcgOS42Mzc2NDdsNC44MTg4MjMgMTM5Ljc0NTg4MnpNNTQ0LjUyNzA1OSA4OTAuMjc3NjQ3bDkuNjM3NjQ3LTI2MC4yMTY0NzEtMTguMDcwNTg4IDMuNjE0MTE4IDguNDMyOTQxIDI1Ni42MDIzNTN6IiBwLWlkPSIzNjA0IiBmaWxsPSIjZDgxZTA2Ij48L3BhdGg+PC9zdmc+",
        "scale" : 1,
        "alignedAxis" : new Cesium.VelocityVectorProperty(property, true)
    }
    // model.viewFrom = new Cesium.Cartesian3.fromDegrees(121.1,31.1,100)
    this.viewer.trackedEntity = model;


    function handeFollowCb(e) {
       function getModelMatrix(entity, time, result){
        let matrix3Scratch = new Cesium.Matrix3()
        let positionScratch = new Cesium.Cartesian3()
        let orientationScratch = new Cesium.Quaternion()
        let position = Cesium.Property.getValueOrUndefined(entity.position, time, positionScratch)
        if (!Cesium.defined(position)) {
          return undefined
        }
        let orientation = Cesium.Property.getValueOrUndefined(entity.orientation, time, orientationScratch)
        if (!Cesium.defined(orientation)) {
          result = Cesium.Transforms.eastNorthUpToFixedFrame(position, undefined, result)
        } else {
          result = Cesium.Matrix4.fromRotationTranslation(Cesium.Matrix3.fromQuaternion(orientation, matrix3Scratch), position, result)
        }
        return result
      }
      let scratch = new Cesium.Matrix4()
      getModelMatrix(model, this.viewer.clock.currentTime, scratch)
      this.viewer.scene.camera.lookAtTransform(scratch, new Cesium.Cartesian3(-50, 0, 10))
    }

    // this.viewer.scene.preRender.addEventListener(handeFollowCb, this)


    setTimeout(() => {
      this.viewer.scene.preRender.removeEventListener(handeFollowCb, this)
      this.viewer.trackedEntity = undefined
      this.viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY)
      this.viewer.trackedEntity = model;
    }, 5*1000);


  }


  run1(){
    const model = this.viewer.entities.add({
      id:'zardcar',
      model: {
          uri: 'assets/models/gltf/Car1120.gltf',
          minimumPixelSize: 200, // 最小像素大小
          maximumScale: 200, // 模型的最大比例尺大小。 minimumPixelSize的上限,
      },
      point: {
        pixelSize: 1,
        color: new Cesium.Color(1.0, 1.0, 1.0, 1.0, 0)
      }
    });
    const dataArr = flyConf[0].pathPositionArr;
    let tkAnim = new TrackAnimation({
      viewer: this.viewer,
      pathArr: dataArr,
      entity: model
    });
    tkAnim.play();
  }


}
