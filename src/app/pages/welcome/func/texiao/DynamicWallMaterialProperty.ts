declare var Cesium:any;

export class DynamicWallMaterialProperty {
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
        Cesium.DynamicWallMaterialProperty = DynamicWallMaterialProperty;
        Cesium.Material.DynamicWallMaterialProperty = 'DynamicWallMaterialProperty';
        // Cesium.Material.WallImage1 = "./images/WallImage1.png";
        // Cesium.Material.WallImage2 = "./images/WallImage2.png";
        Cesium.Material.WallImage1 = 'assets/materia/colors.png'
        Cesium.Material.WallImage2 = 'assets/materia/polylineTrailLinkMaterial.png'
        Cesium.Material.WallSource = "czm_material czm_getMaterial(czm_materialInput materialInput)\n\
        {\n\
            czm_material material = czm_getDefaultMaterial(materialInput);\n\
            vec2 st = materialInput.st;\n\
            vec4 colorImage = texture2D(image, vec2(0.8-st.t, st.s));\n\
            vec4 colorImage2 = texture2D(image2, vec2(st.s, fract(st.t*1.0- time)));\n\
            material.alpha = colorImage.a * color.a + 0.5*colorImage2.r;\n\
            material.diffuse = color.rgb;\n\
            material.emission = vec3(0.4);\n\
            return material;\n\
        }"
        Cesium.Material._materialCache.addMaterial(Cesium.Material.DynamicWallMaterialProperty, {
            fabric: {
                type: Cesium.Material.DynamicWallMaterialProperty,
                uniforms: {
                    color: new Cesium.Color(0.5, 0.5, 0.5, 1.0),
                    image: Cesium.Material.WallImage1,
                    image2: Cesium.Material.WallImage2,
                    time: 0
                },
                source: Cesium.Material.WallSource
            },
            translucent: function(material) {
                return material.uniforms.color.alpha <= 1.0;;
            }
        });
    }
    getType(){
        return 'DynamicWallMaterialProperty'
    }
    getValue(time, result) {
        if (!Cesium.defined(result)) {
            result = {};
        }
        result.color = resultcolor((((new Date()).getTime() - this._time)) % (this.duration * 35) / (this.duration * 35));
        result.time = (((new Date()).getTime() - this._time)) / this.duration;
        return result;

        function resultcolor(p) {
            var a = p;
            //var a = p / (scale * 7);//0-1
            var r = 1;
            var g = 1;
            var b = 1;
            if (a >= 0 && a < 0.14) {
                g = a / 0.28;
                b = 0;
            } else if (a >= 0.14 && a < 0.28) {
                g = (a - 0.14) / 0.28 + 0.5
                b = 0;
            } else if (a >= 0.28 && a < 0.42) {
                r = 1 - (a - 0.28) / 0.14;
                b = 0
            } else if (a >= 0.42 && a < 0.56) {
                r = 0;
                b = (a - 0.42) / 0.14
            } else if (a >= 0.56 && a < 0.7) {
                r = 0;
                g = 1 - (a - 0.56) / 0.14
            } else if (a >= 0.7 && a < 0.84) {
                r = (a - 0.7) / 0.14;
                g = 0;
            } else if (a >= 0.84 && a < 1) {
                g = 0;
                b = 1 - (a - 0.84) / 0.16
            }

            r = r > 1 ? 1 : r;
            g = g > 1 ? 1 : g;
            b = b > 1 ? 1 : b;
            return new Cesium.Color(r, g, b);
        }
    }
    equals(other) {
        return this === other || (other instanceof DynamicWallMaterialProperty && Cesium.Property.equals(this._color, other._color))
    }
}

Object.defineProperties(DynamicWallMaterialProperty.prototype, {
    isConstant: {
        get: function() {
            return false;
        }
    },
    definitionChanged: {
        get: function() {
            return this._definitionChanged;
        }
    },
    color: Cesium.createPropertyDescriptor('color')
});