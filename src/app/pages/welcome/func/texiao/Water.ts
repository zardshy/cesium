declare var Cesium:any;

export default function addWaterAnimation(viewer,coordinates) {
    const primitive = new Cesium.Primitive({
      show: true,
      geometryInstances: new Cesium.GeometryInstance({
        geometry: new Cesium.PolygonGeometry({
          polygonHierarchy: new Cesium.PolygonHierarchy(Cesium.Cartesian3.fromDegreesArrayHeights(coordinates)),
          vertexFormat: Cesium.EllipsoidSurfaceAppearance.VERTEX_FORMAT,
          extrudedHeight: 0, // 只显示水面
          height: 10
        })
      }),
      appearance: new Cesium.EllipsoidSurfaceAppearance({
        aboveGround: true,
        material: new Cesium.Material({
          fabric: {
            type: 'Water',
            uniforms: {
              normalMap: 'assets/materia/water.jpg',
              frequency: 100.0,
              animationSpeed: 0.01,
              amplitude: 100.0
            }
          }
        }),
     // 水透明化
  
//         fragmentShaderSource:
//         `varying vec3 v_positionMC;\n\
//           varying vec3 v_positionEC;\n\
//           varying vec2 v_st;\n\
//           \n\
//           void main()\n\
//           {\n\
//               czm_materialInput materialInput;\n\
//               vec3 normalEC = normalize(czm_normal3D * czm_geodeticSurfaceNormal(v_positionMC, vec3(0.0), vec3(1.0)));\n\
//           #ifdef FACE_FORWARD\n\
//               normalEC = faceforward(normalEC, vec3(0.0, 0.0, 1.0), -normalEC);\n\
//           #endif\n\
//               materialInput.s = v_st.s;\n\
//               materialInput.st = v_st;\n\
//               materialInput.str = vec3(v_st, 0.0);\n\
//               materialInput.normalEC = normalEC;\n\
//               materialInput.tangentToEyeMatrix = czm_eastNorthUpToEyeCoordinates(v_positionMC, materialInput.normalEC);\n\
//               vec3 positionToEyeEC = -v_positionEC;\n\
//               materialInput.positionToEyeEC = positionToEyeEC;\n\
//               czm_material material = czm_getMaterial(materialInput);\n\
//           #ifdef FLAT\n\
//               gl_FragColor = vec4(material.diffuse + material.emission, material.alpha);\n\
//           #else\n\
//               gl_FragColor = czm_phong(normalize(positionToEyeEC), material);\n\
//               gl_FragColor.a = 0.5;\n\
//           #endif\n\
//           }\n\
// `
fragmentShaderSource: 'varying vec3 v_positionMC;\n' +
    'varying vec3 v_positionEC;\n' +
    'varying vec2 v_st;\n' +
    'void main()\n' +
    '{\n' +
    'czm_materialInput materialInput;\n' +
    'vec3 normalEC = normalize(czm_normal3D * czm_geodeticSurfaceNormal(v_positionMC, vec3(0.0), vec3(1.0)));\n' +
    '#ifdef FACE_FORWARD\n' +
    'normalEC = faceforward(normalEC, vec3(0.0, 0.0, 1.0), -normalEC);\n' +
    '#endif\n' +
    'materialInput.s = v_st.s;\n' +
    'materialInput.st = v_st;\n' +
    'materialInput.str = vec3(v_st, 0.0);\n' +
    'materialInput.normalEC = normalEC;\n' +
    'materialInput.tangentToEyeMatrix = czm_eastNorthUpToEyeCoordinates(v_positionMC, materialInput.normalEC);\n' +
    'vec3 positionToEyeEC = -v_positionEC;\n' +
    'materialInput.positionToEyeEC = positionToEyeEC;\n' +
    'czm_material material = czm_getMaterial(materialInput);\n' +
    '#ifdef FLAT\n' +
    'gl_FragColor = vec4(material.diffuse + material.emission, material.alpha);\n' +
    '#else\n' +
    'gl_FragColor = czm_phong(normalize(positionToEyeEC), material, czm_lightDirectionEC);\n' +
    'gl_FragColor.a=0.65;\n' +
    '#endif\n' +
    '}\n'

      })
    })
    viewer.scene.primitives.add(primitive)
  }
  