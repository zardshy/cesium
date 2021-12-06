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

// 缩放至model
export function zoomToModel(viewer,model){
    const controller = viewer.scene.screenSpaceCameraController;
    const r =2.0 * Math.max(model.boundingSphere.radius, viewer.scene.camera.frustum.near);
    controller.minimumZoomDistance = r * 0.5;

    const center = Cesium.Matrix4.multiplyByPoint(
      model.modelMatrix,
      model.boundingSphere.center,
      new Cesium.Cartesian3()
    );
    const heading = Cesium.Math.toRadians(230.0);
    const pitch = Cesium.Math.toRadians(-20.0);
    viewer.scene.camera.lookAt(
      center,
      new Cesium.HeadingPitchRange(heading, pitch, r * 100.0)
    );
}
