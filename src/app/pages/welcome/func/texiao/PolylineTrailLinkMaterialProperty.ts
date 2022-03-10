declare var Cesium:any;

export class PolylineTrailLinkMaterialProperty {
    duration;
    _color;
    color;
    _time;
    _definitionChanged;
    constructor(duration,color){
        this.duration = duration
        this._color = undefined;
        this.color = color;
        this._time = (new Date()).getTime()
        this._definitionChanged = new Cesium.Event()
        this.init()
    }
    init(){
        Cesium.Material.PolylineTrailLinkType = 'PolylineTrailLink';
        // Cesium.Material.PolylineTrailLinkImage = 'assets/materia/linecyan.png'
        Cesium.Material.PolylineTrailLinkImage = 'assets/materia/polylineLineFlowMaterial.png'
        // // 不显示轨迹线(传入颜色)
        // Cesium.Material.PolylineTrailLinkSource =
        // `czm_material czm_getMaterial(czm_materialInput materialInput)\n\
        //     {\n\
        //         czm_material material = czm_getDefaultMaterial(materialInput);\n\
        //         vec2 st = materialInput.st;\n\
        //         vec4 colorImage = texture2D(image, vec2(fract(st.s - time), st.t));\n\
        //         material.alpha = colorImage.a;\n\
        //         material.diffuse = color.rgb;\n\
        //         return material;\n\
        // }`
            // 白色光斑运动 红色线
        // Cesium.Material.PolylineTrailLinkSource =
        // `czm_material czm_getMaterial(czm_materialInput materialInput)\n\
        //     {\n\
        //         czm_material material = czm_getDefaultMaterial(materialInput);\n\
        //         vec2 st = materialInput.st;\n\
        //         vec4 colorImage = texture2D(image, vec2(fract(st.s - time), st.t));\n\
        //         material.alpha = color.a;\n\
        //         material.diffuse = colorImage.rgb;\n\
        //         return material;\n\
        //     }`;
            // 不显示轨迹线(图片颜色和传入颜色混合)
    Cesium.Material.PolylineTrailLinkSource =
        `czm_material czm_getMaterial(czm_materialInput materialInput)\n\
            {\n\
                    czm_material material = czm_getDefaultMaterial(materialInput);\n\
                    vec2 st = materialInput.st;\n\
                    vec4 colorImage = texture2D(image, vec2(fract(st.s - time), st.t));\n\
                    material.alpha = colorImage.a * color.a;\n\
                    material.diffuse = (colorImage.rgb+color.rgb)/2.0;\n\
                    return material;\n\
                }`;
        Cesium.Material._materialCache.addMaterial(Cesium.Material.PolylineTrailLinkType, {
            fabric: {
              type: Cesium.Material.PolylineTrailLinkType,
              uniforms: {
                color: new Cesium.Color(1.0, 0.0, 0.0, 1),
                image: Cesium.Material.PolylineTrailLinkImage,
                time: 50,
                // repeat: new Cesium.Cartesian2(1, 1),
                // axisY: false
              },
              source: Cesium.Material.PolylineTrailLinkSource
            },
            translucent: function(material) {
              return true
            }
          })
    }
    getType() {
        return 'PolylineTrailLink'
    }
    getValue(time, result) {
        if (!Cesium.defined(result)) {
            result = {}
        }
        result.color = Cesium.Property.getValueOrClonedDefault(this._color, time, Cesium.Color.WHITE, result.color)
        result.image = Cesium.Material.PolylineTrailLinkImage
        result.time = (((new Date()).getTime() - this._time) % this.duration) / this.duration
        return result
    }
    equals(other) {
        return this === other || (other instanceof PolylineTrailLinkMaterialProperty && Cesium.Property.equals(this._color, other._color))
    }
    get isConstant() {
        return false
    }
    get definitionChanged() {
        return this._definitionChanged
    }
}

Object.defineProperties(PolylineTrailLinkMaterialProperty.prototype, {
    color: Cesium.createPropertyDescriptor('color')
})