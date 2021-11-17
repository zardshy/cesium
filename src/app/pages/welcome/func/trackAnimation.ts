declare var Cesium :any;

export class TrackAnimation{
    public viewer;
    public pathPositions;   
    public handleEntity;  
    public startTime;
    public stopTime;
    public entityRunTime;
    public multiplier = 0.5;
    public ifPathLine = true;
    public ifPathPoint = true;
    constructor(options){
        const { viewer,pathArr,entity,runTime,ifPathLine,ifPathPoint } = options;
        this.viewer = viewer;
        this.pathPositions = pathArr;
        this.handleEntity = entity;
        this.entityRunTime = runTime;
        if (typeof(ifPathLine) != 'undefined') this.ifPathLine = ifPathLine;
        if (typeof(ifPathPoint) != 'undefined') this.ifPathPoint = ifPathPoint;
        this._init();
    }
    _init(){
        //设置随机种子使随机数一致
        Cesium.Math.setRandomNumberSeed(888);
        this._setTimeExtent();
        this._setProperty();
    }
    _setTimeExtent(){
        this.startTime = Cesium.JulianDate.fromDate(new Date());
        this.stopTime = Cesium.JulianDate.addSeconds(this.startTime, 360, new Cesium.JulianDate());
        // this.stopTime = Cesium.JulianDate.addSeconds(this.startTime, this.pathPositions.length-1, new Cesium.JulianDate);
        this.stopTime = Cesium.JulianDate.addSeconds(this.startTime, 360, new Cesium.JulianDate);
        // 设置始时钟始时间
        this.viewer.clock.startTime = this.startTime.clone();
        this.viewer.clock.currentTime = this.startTime.clone();
        this.viewer.clock.stopTime  = this.stopTime.clone();
        // 时间速率，数字越大时间过的越快 
        this.viewer.clock.multiplier = this.multiplier;
        // SYSTEM_CLOCK 将时钟设置为当前系统时间；忽略所有其他设置 
        // SYSTEM_CLOCK_MULTIPLIER  系统时间*multiplier
        // TICK_DEPENDENT   提前固定时间
        this.viewer.clock.clockStep  = Cesium.ClockStep.SYSTEM_CLOCK_MULTIPLIER
        // 循环执行
        this.viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP;
    }
    // 计算位置property
    _getProperty(){
        function getEndPoint (time, result) {
            console.log(time)
            console.log(result)
            return result
        }
        const property = new Cesium.SampledPositionProperty();
        this.pathPositions.forEach((element,index) => {
            // const time = Cesium.JulianDate.addSeconds(this.startTime, index, new Cesium.JulianDate);
            const time = Cesium.JulianDate.addSeconds(this.entityRunTime, index, new Cesium.JulianDate);
            const position = Cesium.Cartesian3.fromDegrees(element.lng, element.lat,element.alt);
            property.addSample(time, position);
            // property.getValueInReferenceFrame(getEndPoint);
            // 修改停止时间 确保每个entiry轨迹完整
            if (index === this.pathPositions.length-1){
                this.viewer.clock.stopTime  = Cesium.JulianDate.addSeconds(this.entityRunTime, index, new Cesium.JulianDate)
            }
            if (this.ifPathPoint){
                this.viewer.entities.add({
                    position: position,
                    point: {
                      pixelSize: 8,
                      color: Cesium.Color.TRANSPARENT,
                      outlineColor: Cesium.Color.RED,
                      outlineWidth: 3,
                    },
                })
            }
        });
        return property 
    }
    _setProperty(){
        const satellitePosition = this._getProperty();
        // 设置运动时间间隔
        this.handleEntity.availability = new Cesium.TimeIntervalCollection([
            new Cesium.TimeInterval({ start : this.startTime,stop : this.stopTime})
        ]);
        // 模型矩阵
        this.handleEntity.position = satellitePosition;
        // 基于位置移动自动计算方向
        this.handleEntity.orientation = new Cesium.VelocityOrientationProperty(satellitePosition)
        if (this.ifPathLine){
            this.handleEntity.path = {
                resolution : 0.1,
                material : new Cesium.PolylineGlowMaterialProperty({
                    glowPower : 0.1,
                    color : Cesium.Color.YELLOW
                }),
                width :3
            }
        }
        this._setInterpolation(1);
        this.sideView()
    }
    // 插值器
    _setInterpolation(type){
        switch (type) {
            case 1:
                // 线性插值
                this.handleEntity.position.setInterpolationOptions({
                    interpolationDegree: 1,
                    interpolationAlgorithm: Cesium.LinearApproximation,
                });
                break;
            case 2:
                // 拉格朗日插值
                this.handleEntity.position.setInterpolationOptions({
                    interpolationDegree: 5,
                    interpolationAlgorithm:Cesium.LagrangePolynomialApproximation,
                });
                break;
            case 3:
                // 埃尔米特插值
                this.handleEntity.position.setInterpolationOptions({
                    interpolationDegree: 2,
                    interpolationAlgorithm: Cesium.HermitePolynomialApproximation,
                });
                break;
            default:
                break;
        }
    }
    // 计算模型矩阵 相机视角锁定
    _followCameraCallBack(){
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
        let scratch = new Cesium.Matrix4();
        getModelMatrix(this.handleEntity, this.viewer.clock.currentTime, scratch)
        this.viewer.scene.camera.lookAtTransform(scratch, new Cesium.Cartesian3(-50, 0, 10))
    }
    // 切换相机跟随模式
    _changeCameraMode(type){
        this.removeFollowCamera();
        switch(type){
            case 1:
                this.viewer.scene.preRender.addEventListener(this._followCameraCallBack, this)
                break;
            case 3:
                this.viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY)
                this.viewer.trackedEntity = this.handleEntity;
                break;
        }
    }
    // 播放
    play(){
        this.viewer.clock.shouldAnimate = true;
    }
    //　暂停
    pause(){
        this.viewer.clock.shouldAnimate = false;
    }
    // 第一人称视角锁定
    firstPerson(){
        this._changeCameraMode(1)
    }
    // 第三人称自由视角
    thirdPerson(){
        this._changeCameraMode(3)
    }
    // 头顶视角
    topView(){
        this.viewer.trackedEntity = undefined;
        this.viewer.zoomTo(this.viewer.entities, new Cesium.HeadingPitchRange(0, Cesium.Math.toRadians(-90)));
    }
    // 侧边视角
    sideView(){
        this.viewer.trackedEntity = undefined;
        this.viewer.zoomTo(this.viewer.entities, new Cesium.HeadingPitchRange(Cesium.Math.toRadians(-90), Cesium.Math.toRadians(-15), 12500));
    }
    // 取消相机跟随
    removeFollowCamera(){
        this.viewer.trackedEntity = undefined;
        this.viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY)
        this.viewer.scene.preRender.removeEventListener(this._followCameraCallBack, this)
    }
}