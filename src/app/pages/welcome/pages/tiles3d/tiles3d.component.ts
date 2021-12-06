import { Component, OnInit } from '@angular/core';
import { numberCity } from '../../func/numberCity'
declare var Cesium:any;

@Component({
  selector: 'app-tiles3d',
  templateUrl: './tiles3d.component.html',
  styleUrls: ['./tiles3d.component.css']
})
export class Tiles3dComponent implements OnInit {
  public viewer;
  public tileset;
  public nameOverlay;
  public handler;
  constructor() { }

    ngOnInit(): void {
    }

    mapLoaded(e){
      this.viewer = e;
      // this.add3dTiles();
      this.nameOverlay = document.createElement("div");
      this.viewer.container.appendChild(this.nameOverlay);
      this.nameOverlay.className = "backdrop";
      this.nameOverlay.style.display = "none";
      this.nameOverlay.style.position = "absolute";
      this.nameOverlay.style.bottom = "0";
      this.nameOverlay.style.left = "0";
      this.nameOverlay.style["pointer-events"] = "none";
      this.nameOverlay.style.padding = "4px";
      this.nameOverlay.style.color = "red";
      this.nameOverlay.style.backgroundColor = "black";
    }

    add3dTiles(){
      var longitude = 121.8252503;
      var latitude = 30.9215641;
      var height = -50;
      var rotation = 0;   //旋转度
      var url = "assets/models/3dtiles/buildings/tileset.json";
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

        this.zoomTo3dTiles(tileset)
      }).otherwise(function(error){
        console.log(error);
      });


      this.tileset.allTilesLoaded.addEventListener(()=> {
        console.log('tileset loaded');
      });

    }

    setColorByAttr(){
      // this.tileset.style = new Cesium.Cesium3DTileStyle({
      //   color: {
      //       conditions: [
      //           ['${id} >= 300', 'rgba(45, 0, 75, 0.5)'],
      //           ['${id} >= 200', 'rgb(102, 71, 151)'],
      //           ['${id} >= 100', 'rgb(170, 162, 204)'],
      //           ['${id} >= 50', 'rgb(224, 226, 238)'],
      //           ['${id} >= 25', 'rgb(252, 230, 200)'],
      //           ['${id} >= 10', 'rgb(248, 176, 87)'],
      //           ['${id} >= 5', 'rgb(198, 106, 11)'],
      //           ['true', 'rgb(127, 59, 8)']
      //       ]
      //   }
      // });
      this.tileset.style = new Cesium.Cesium3DTileStyle({
        color : "(regExp('3').test(String(${id}))) ? color('cyan', 0.9) : color('purple', 0.5)"
      });
      // this.tileset.style = new Cesium.Cesium3DTileStyle({
      //   show : '${height} > 200'
      // });
      // this.tileset.style = new Cesium.Cesium3DTileStyle({
       //  color: "rgba(255, 255, 255, 0.5)",
      //   show : true
      // });
    }


    selectFeatrue(){
      // 边缘检测
      var silhouetteBlue = Cesium.PostProcessStageLibrary.createEdgeDetectionStage();
      silhouetteBlue.enabled = true;
      silhouetteBlue.uniforms.color = Cesium.Color.BLUE;
      silhouetteBlue.uniforms.length = 0.01;
      silhouetteBlue.selected = [];

      this.viewer.scene.postProcessStages.add(
        Cesium.PostProcessStageLibrary.createSilhouetteStage([
          silhouetteBlue
        ])
      );

      // Cesium.ScreenSpaceEventType.LEFT_CLICK //鼠标左击事件
      // Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK //鼠标左键双击事件
      // Cesium.ScreenSpaceEventType.LEFT_DOWN //左键鼠标按下事件
      // Cesium.ScreenSpaceEventType.LEFT_UP //左键鼠标抬起事件
      // Cesium.ScreenSpaceEventType.MIDDLE_CLICK //中键单机
      // Cesium.ScreenSpaceEventType.MIDDLE_DOWN //中键按下
      // Cesium.ScreenSpaceEventType.MIDDLE_UP //中键抬起
      // Cesium.ScreenSpaceEventType.MOUSE_MOVE //鼠标移动
      // Cesium.ScreenSpaceEventType.PINCH_END //表示两指事件在触摸面上的结束。
      // Cesium.ScreenSpaceEventType.PINCH_MOVE //两指移动
      // Cesium.ScreenSpaceEventType.PINCH_START //表示在触摸面上发生两指事件的开始。
      // Cesium.ScreenSpaceEventType.RIGHT_CLICK //鼠标右击事件
      // Cesium.ScreenSpaceEventType.RIGHT_DOWN  //鼠标右键按下
      // Cesium.ScreenSpaceEventType.RIGHT_UP    //鼠标右键抬起
      // Cesium.ScreenSpaceEventType.WHEEL //鼠标滚轮事件

      this.handler = new Cesium.ScreenSpaceEventHandler(this.viewer.scene.canvas);
      this.handler.setInputAction((movement)=>{
        silhouetteBlue.selected = [];
        const picked = this.viewer.scene.pick(movement.endPosition);
        if(!Cesium.defined(picked)){
          this.nameOverlay.style.display = "none";
          return
        }
        this.changeOverlay(movement,picked)
        silhouetteBlue.uniforms.color = Cesium.Color.BLUE;
        silhouetteBlue.selected = [picked];
      },Cesium.ScreenSpaceEventType.MOUSE_MOVE)

      this.handler.setInputAction((movement)=>{
        silhouetteBlue.selected = [];
        const picked = this.viewer.scene.pick(movement.position);
        if(!Cesium.defined(picked)){
          return
        }
        console.log(picked)
        console.log(picked.getPropertyNames())
        silhouetteBlue.uniforms.color = Cesium.Color.RED;
        silhouetteBlue.selected = [picked];
      },Cesium.ScreenSpaceEventType.LEFT_CLICK)
    }

    removeEvent(){
      this.handler.removeInputAction(Cesium.ScreenSpaceEventType.MOUSE_MOVE)
      this.handler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_CLICK)
    }

    changeOverlay(movement,picked){
      this.nameOverlay.style.display = "block";
      this.nameOverlay.style.bottom =this.viewer.canvas.clientHeight - movement.endPosition.y + "px";
      this.nameOverlay.style.left = movement.endPosition.x + 300 + "px";
      // var name = picked.getProperty("id");
      var name = picked.pickId.key;
      this.nameOverlay.textContent = name.toString();
    }

    zoomTo3dTiles(tileset){
      // this.viewer.zoomTo(tileset, new Cesium.HeadingPitchRange(0, -0.5, 0));
      this.viewer.zoomTo(tileset, new Cesium.HeadingPitchRange(0.5, -0.2, tileset.boundingSphere.radius * 1.0));
      // this.viewer.camera.viewBoundingSphere(tileset.boundingSphere, new Cesium.HeadingPitchRange(0, -0.5, 0));
    }


    updateSym(){
      this.tileset.style = undefined
      numberCity(this.viewer,this.tileset)
    }

    updateHeight(){
        const cartographic = Cesium.Cartographic.fromCartesian(this.tileset.boundingSphere.center);
        const surface = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 0.0);
        const offset = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 500);
        const translation = Cesium.Cartesian3.subtract(offset, surface, new Cesium.Cartesian3());
        this.tileset.modelMatrix = Cesium.Matrix4.fromTranslation(translation);
    }

  }