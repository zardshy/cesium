declare var Cesium:any;

// 适用于海量数据渲染 同批次绘制增加性能
export function createModelsCollection(viewer){
    const temp = [{lng:121.1,lat:31.1,alt:1,h:0,p:0,r:0}]
    const instances = [];
    const scale = 1;
    function createInstances(){
        for(let item of temp){
            const origin = Cesium.Cartesian3.fromDegrees(item.lng,item.lat,item.alt);
            const hpr = new Cesium.HeadingPitchRoll(Cesium.Math.toRadians(item.h),Cesium.Math.toRadians(item.p),Cesium.Math.toRadians(item.r));
            const modelMatrix =Cesium.Transforms.headingPitchRollToFixedFrame(origin,hpr);
            Cesium.Matrix4.multiplyByUniformScale(modelMatrix,scale,modelMatrix);
            instances.push({ modelMatrix: modelMatrix });
        }
    }
    createInstances()
    const collection = viewer.scene.primitives.add(
        new Cesium.ModelInstanceCollection({
          url: 'assets/models/gltf/Car1120.gltf',
          instances: instances,
        })
    );
    collection.readyPromise
        .then( (collection)=> {
            console.log(collection)
        })
        .otherwise(function (error) {
            console.error(error)
        });
}

export function createModelByPrimitive(viewer,options?,callBack?){
    const { lng,lat,alt,h,p,r,url } = options || {};
    let model = null;

    const origin = Cesium.Cartesian3.fromDegrees(lng | 121.1, lat | 31.1,alt | 0);
    // 航向角 0默认向东, 向北为-
    const _h= Cesium.Math.toRadians(h | 0.0);
    // 俯仰角 向下为-
    const _p= Cesium.Math.toRadians(p | 0.0);
    // 翻滚角 向左为-
    const _r= Cesium.Math.toRadians(r | 0.0);
    // 模型姿态 (欧拉角euler)
    const hpr = new Cesium.HeadingPitchRoll(_h,_p,_r);
    // 模型矩阵
    const modelMatrix =Cesium.Transforms.headingPitchRollToFixedFrame(origin,hpr);

    model = viewer.scene.primitives.add(
        Cesium.Model.fromGltf({
          url: url || 'assets/models/gltf/Car1120.gltf',
          modelMatrix: modelMatrix,
        //   allowPicking : true,  // 是否可选取
        //   scale : 50 ,  // 缩放比例
          minimumPixelSize: 128, // 最小像素大小
        //   maximumScale: 20000, // 模型的最大比例尺大小。 minimumPixelSize的上限
        //   color: new Cesium.Color(1,0.4,0.5,1),
        //   ColorBlendMode :10,
        //   colorBlendAmount: 1,
        //   lightColor:new Cesium.Color(1,2,3,1),
        //   silhouetteColor :Cesium.Color.RED,
        //   silhouetteSize  :2,
        //   showOutline: false, //是否扩展轮廓
        //   incrementallyLoadTextures: true, // 加载模型后纹理是否可以继续流入
        //   runAnimations: true, // 是否应启动模型中指定的glTF动画
        //   clampAnimations: true, // 指定glTF动画是否应在没有关键帧的持续时间内保持最后一个姿势
        //   debugShowBoundingVolume : false, // 调试球体边界
        //   debugWireframe: false // 调试线框
        })
    );

    model.readyPromise
      .then(function(model){
        callBack(model)
      })
      .otherwise(function (error) {
        console.error(error)
      });
    
    return model
}

export function createModelByEntity(viewer,options?){
    const { lng,lat,alt,h,p,r,url } = options || {};
    let entity = null;
    const origin = Cesium.Cartesian3.fromDegrees(lng | 121.1, lat | 31.1,alt | 0);
    const _h= Cesium.Math.toRadians(h | 0.0);
    const _p= Cesium.Math.toRadians(p | 0.0);
    const _r= Cesium.Math.toRadians(r | 0.0);
    const hpr = new Cesium.HeadingPitchRoll(_h,_p,_r);
    const orientation = Cesium.Transforms.headingPitchRollQuaternion(origin, hpr);
    entity = viewer.entities.add({
        position : origin,
        orientation : orientation,
        label : {
          text : '测试名称\n 123',
          // font : '14pt Source Han Sans CN',
          font : '14pt monospace',
          // fillColor:new Cesium.Color.fromCssColorString("rgba(255, 255, 255,1)"),   //字体颜色
         //   fillColor:fadeColor,
          scale: 0.8,
          backgroundColor: new Cesium.Color.fromCssColorString("rgba(28, 28, 28, 1)"),    //背景颜色
          backgroundPadding:new Cesium.Cartesian2(20,10) ,
          showBackground: true,  //是否显示背景颜色
          style: Cesium.LabelStyle.FILL_AND_OUTLINE,  //label样式
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
            uri : url || 'assets/models/gltf/Car1120.gltf',
            scale : 50,
            // color:getLineColorCallbackProperty(Cesium.Color.RED),
            // silhouetteColor :Cesium.Color.RED.withAlpha(10),
            // silhouetteSize  :fadeWidth,
            distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 4000)
        }
    })
    return entity
}