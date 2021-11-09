declare var Cesium:any;


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