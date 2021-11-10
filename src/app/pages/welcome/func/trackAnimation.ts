declare var Cesium :any;

export class TrackAnimation{
    public viewer;
    public pathPositions;   
    public handleEntity;  
    public startTime;
    public stopTime;
    public isPathLine = true;
    constructor(options){
        const { viewer,pathArr,entity,isPathLine } = options;
        this.viewer = viewer;
        this.pathPositions = pathArr;
        this.handleEntity = entity;
        if (typeof(isPathLine) != 'undefined') this.isPathLine = isPathLine;
        this._init();
    }
    _init(){
            //设置随机种子使随机数一致
            Cesium.Math.setRandomNumberSeed(3);
        this._setTimeExtent();
        this._setProperty();
    }
    _setTimeExtent(){
        // 起始时间
        this.startTime = Cesium.JulianDate.fromDate(new Date());
        // 结束时间
        this.stopTime = Cesium.JulianDate.addSeconds(this.startTime, 360, new Cesium.JulianDate());
        // 设置始时钟始时间
        this.viewer.clock.startTime = this.startTime.clone();
        // 设置时钟当前时间
        this.viewer.clock.currentTime = this.startTime.clone();
        // 设置始终停止时间
        this.viewer.clock.stopTime  = this.stopTime.clone();
        // 时间速率，数字越大时间过的越快
        this.viewer.clock.multiplier = 100;
        // 循环执行
        this.viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP;
    }
    _getProperty(){
        const property = new Cesium.SampledPositionProperty();
        this.pathPositions.forEach((element,index) => {
            const time = Cesium.JulianDate.addSeconds(this.startTime, index, new Cesium.JulianDate);
            const position = Cesium.Cartesian3.fromDegrees(element.lng, element.lat,element.alt);
            property.addSample(time, position);
        });
        return property
    }
    _setProperty(){
        this.handleEntity.availability = new Cesium.TimeIntervalCollection([
            new Cesium.TimeInterval({ start : this.startTime,stop : this.stopTime})
        ]);
        this.handleEntity.position = this._getProperty();
        this.handleEntity.orientation = new Cesium.VelocityOrientationProperty(this._getProperty())
        if (this.isPathLine){
            this.handleEntity.path = {
                resolution : 0.1,
                material : new Cesium.PolylineGlowMaterialProperty({
                    glowPower : 0.1,
                    color : Cesium.Color.YELLOW
                }),
                width :3
            }
        }
        this.viewer.scene.preRender.addEventListener(this._followCameraCallBack, this)
    }
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
    // 取消相机跟随
    removeFollowCamera(){
        this.viewer.trackedEntity = undefined;
        this.viewer.scene.preRender.removeEventListener(this._followCameraCallBack, this)
    }
}