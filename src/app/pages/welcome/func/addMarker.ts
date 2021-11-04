/*
 * @Author: your name
 * @Date: 2021-11-04 22:43:42
 * @LastEditTime: 2021-11-05 00:02:18
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ngcesium\src\app\pages\welcome\func\addMarker.ts
 */
declare var Cesium:any;

export function createMarkerLayer(viewer,options){
    const { dataArr,layerId,isLabel,isBillBoard,billBoardConfig,isPoint} = options;
    const layer = new Cesium.CustomDataSource(layerId);
    viewer.dataSources.add(layer);
    dataArr.forEach((element,index) => {    
        const entitiesId =  element.name;
        const position = Cesium.Cartesian3.fromDegrees(element.lng,element.lat,element.alt || 0);
        const label = {
            show: isLabel,
            text : entitiesId,
            font : '14pt monospace',
            style: Cesium.LabelStyle.FILL_AND_OUTLINE,
            outlineWidth : 2,
            verticalOrigin : Cesium.VerticalOrigin.BASELINE   ,  // 垂直位置
            horizontalOrigin :Cesium.HorizontalOrigin.CENTER,// 水平位置 RIGHT  CENTER  LEFT 
            pixelOffset : new Cesium.Cartesian2(0, -Number(billBoardConfig.height)+10)
            // eyeOffset :new Cesium.Cartesian3(0.0, 500.0, 0.0)
        };
        const billboard = {
            show: isBillBoard,
            image : billBoardConfig.image,
            width : billBoardConfig.width,
            height : billBoardConfig.height,
            distanceDisplayCondition: new Cesium.DistanceDisplayCondition(billBoardConfig.DDC_start || 0,billBoardConfig.DDC_end || 200000)
        };
        const point = {
            show:isPoint,
            pixelSize : 5,
            color : Cesium.Color.RED,
            outlineColor : Cesium.Color.WHITE,
            outlineWidth : 2
        };
        layer.entities.add({
            id: entitiesId,
            position,
            label,
            billboard,
            point
        });
    });
    viewer.zoomTo(layer);
    return layer
}