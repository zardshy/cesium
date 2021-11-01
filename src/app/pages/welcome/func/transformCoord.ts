// 世界坐标Cartesian3笛卡尔空间直角坐标系   new Cesium.Cartesian3(x, y, z)
// 屏幕坐标Cartesian2二维笛卡尔坐标系  new Cesium.Cartesian2(x, y)
// 地理坐标(经纬度)WGS84 经度[-180,180] 纬度[-90,90]  cesium中经纬度要计算为弧度 
// WGS84弧度坐标系Cartographic  new Cesium.Cartographic(longitude, latitude, height)

declare var Cesium :any;

export default class tfCoord{
    constructor(){}
    // 经纬度转换为世界坐标
    static lnglatToxyz(lng,lat,alt?,ellipsoid?){
        return Cesium.Cartesian3.fromDegrees(lng, lat, alt ,ellipsoid || Cesium.Ellipsoid.WGS84)
    }
    // 世界坐标转换为经纬度
    static xyzTolnglat(x,y,z){
        const ellipsoid = Cesium.Ellipsoid.WGS84
        const cartesian3= new Cesium.Cartesian3(x,y,z);
        const cartographic= ellipsoid.cartesianToCartographic(cartesian3);
        const lat=Cesium.Math.toDegrees(cartographic.latitude);
        const lng=Cesium.Math.toDegrees(cartographic.longitude);
        const alt=cartographic.height;
        return { lng,lat,alt }
    }
    // 经、纬度转弧度
    static degTorad(degrees){
        return Cesium.Math.toRadians(degrees)
    }
    // 弧度转经、纬度
    static redToDeg(radians){
        return Cesium.Math.toDegrees(radians)
    }
}
// 世界坐标转屏幕坐标
function xyzToScreen(cartesian3){
    return Cesium.SceneTransforms.wgs84ToWindowCoordinates(cartesian3)
}
