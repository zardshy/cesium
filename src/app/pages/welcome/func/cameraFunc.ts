declare var Cesium:any;

// 初始化相机位置
export function initCameraView(viewer,options,isFly=true){
    const { x, y, z, h, p, r } = options;
    const destination = new Cesium.Cartesian3(x,y,z);
    const orientation = {
        heading: h,
        pitch: p,
        roll: r
    };
    const cameraView = {
        destination,
        orientation
    };
    if (isFly){
        viewer.camera.flyTo(cameraView)
    }else{
        viewer.scene.camera.setView(cameraView);
    }
}

// 获取当前相机参数
export function getCameraXyzHpr(viewer){
    const CameraXyzHpr:any = {};
    const position = viewer.scene.camera.position;
    CameraXyzHpr.x = position.x;
    CameraXyzHpr.y = position.y;
    CameraXyzHpr.z = position.z;
    CameraXyzHpr.h = viewer.scene.camera.heading
    CameraXyzHpr.p = viewer.scene.camera.pitch
    CameraXyzHpr.r = viewer.scene.camera.roll
    return CameraXyzHpr
}