import { Component, OnInit } from '@angular/core';
declare var Cesium:any;
import { initCameraView,getCameraXyzHpr } from '../../func/cameraFunc';

@Component({
  selector: 'app-model-material',
  templateUrl: './model-material.component.html',
  styleUrls: ['./model-material.component.css']
})
export class ModelMaterialComponent implements OnInit {
  public viewer;
  public model;
  constructor() { }

  ngOnInit(): void {
  }
  mapLoaded(e){
    this.viewer = e;
  }

  addModel(){

    var modelMatrix1 = Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(102.73, 25.04,  16));
    var model = this.viewer.scene.primitives.add(Cesium.Model.fromGltf({
        url : 'assets/models/gltf/model1.gltf',
              // url:'assets/models/gltf/board_t0_s2_3.gltf',
        modelMatrix : modelMatrix1,
        scale : 10.0,
        minimumPixelSize: 256, 
        maximumScreenSpaceError: 16 // default value


      
    }));
    this.viewer.camera.flyTo({
        destination : Cesium.Cartesian3.fromDegrees(102.73, 25.04, 2631.082799425431)
    });

  return
    const position = Cesium.Cartesian3.fromDegrees(121.62898254394531, 31.02804946899414, 1000)
    // const modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(position)
    const _h= Cesium.Math.toRadians(150.0);
    const _p= Cesium.Math.toRadians(0.0);
    const _r= Cesium.Math.toRadians(0.0);
    const hpr = new Cesium.HeadingPitchRoll(_h,_p,_r);
    const modelMatrix =Cesium.Transforms.headingPitchRollToFixedFrame(position,hpr);
    this.model = this.viewer.scene.primitives.add(
      Cesium.Model.fromGltf({  
      // url: 'assets/models/gltf/cdd.gltf',
      // url:'assets/models/gltf/board_t0_s2_3.gltf',
      url:'assets/models/gltf/model.gltf',
      modelMatrix,
      minimumPixelSize: 256, 
      maximumScale: 20000,
      incrementallyLoadTextures : true
    })); 
    this.model.readyPromise.then((model)=> {
      // let pos = {
      //   h: 1.6893926057801423,
      //   p: -0.12650622795107025,
      //   r: 6.282761840558771,
      //   x: -2845549.171487844,
      //   y: 4678327.718380809,
      //   z: 3274117.9875054574
      // }
      // initCameraView(this.viewer,pos)
      // return
      var camera = this.viewer.camera;
      var controller = this.viewer.scene.screenSpaceCameraController;
      var r = 2.0 * Math.max(model.boundingSphere.radius, camera.frustum.near);
      controller.minimumZoomDistance = r * 0.5;

      var center = Cesium.Matrix4.multiplyByPoint(model.modelMatrix, model.boundingSphere.center, new Cesium.Cartesian3());
      var heading = Cesium.Math.toRadians(230.0);
      var pitch = Cesium.Math.toRadians(-20.0);
      camera.lookAt(center, new Cesium.HeadingPitchRange(heading, pitch, r * 5.0));
    })
  }

  updateModelMaterial(){
    Cesium.when(this.model.readyPromise).then((model)=> {
      let materialName1 = 'board_t0_s2_5_j';
      this.changeModelMaterial(model,materialName1)
      let materialName = 'FONT_BOTTOM_256_128';
      this.changeModelMaterial1(model,materialName)
    })
  }

  changeModelMaterial(model,materialName){
    const materia = model.getMaterial(materialName);
    //红 Cesium.Cartesian3.UNIT_X
    //绿 Cesium.Cartesian3.UNIT_Y
    //黄 new Cesium.Cartesian3(1.0, 1.0, 0.0)
    materia.setValue('emissiveFactor', Cesium.Cartesian3.UNIT_Y)
  }

  changeModelMaterial1(model,materialName){
    let cavas = this.createCavas();
    let texture = model.getMaterial(materialName).getValue('baseColorTexture')
    console.log(texture)
    texture._hasMipmap = true;
    console.log(texture)
    setTimeout(() => {
      texture.copyFrom(cavas)
      texture.generateMipmap()
    }, 1000);
  }

  createCavas(){
    const cavas = document.createElement('canvas');
    cavas.width = 256;
    cavas.height = 128;
    const ctx = cavas.getContext('2d');
    ctx.fillStyle="#33ccff";
    ctx.fillRect(0,0,cavas.width,cavas.height);

    ctx.strokeStyle = 'red'
    ctx.textAlign = 'center'
    ctx.fillStyle = '#FFFAFA';
    ctx.fillText('Zard',150,80,50);
    return cavas
  }


  lo(){
    let s='LaneControlLight_1af223af_de80_46dd_8668_86fd9df5985a4'
    Cesium.when(this.model.readyPromise).then(function(model) {
        Cesium.Resource.fetchImage({
          url: 'assets/IMG/deng_r.jpg'
        }).then(function(image) {
          console.log(model._rendererResources.textures)
          let texture = model._rendererResources.textures[0];
          texture.copyFrom(image);
          texture.generateMipmap()
        }).otherwise(function(error) {
          console.log('错误：' + error)
        })
    })
    console.log(this.model)
    return
    this.model.readyPromise.then((model)=> {
      // const materialName = 'LaneControlLight_1af223af_de80_46dd_8668_86fd9df5985a1';
      const materialName = 'LaneControlLight_1af223af_de80_46dd_8668_86fd9df5985a4'
      const getMateria = this.model.getMaterial(materialName)
      const textures = this.model._rendererResources.textures
      const getID = getMateria._uniformMap.values.u_baseColorTexture.value.id
      let resMateria = null
      // 在纹理图片数组中通过id找到目标纹理图片
      for (const key in textures) {
        if (Object.hasOwnProperty.call(textures, key)) {
          const element = textures[key]
          if (getID === element.id) {
            resMateria = element
          }
        }
      }
      console.log(resMateria)
      Cesium.when(this.model.readyPromise).then(function() {
        // 默认替换第一张
          let texture = resMateria
          Cesium.Resource.fetchImage({
            url: 'assets/IMG/deng_r.jpg'
          }).then(function(image) {
            texture.copyFrom(image)
            texture.generateMipmap()
          }).otherwise(function(error) {
            console.log('错误：' + error)
          })
      })
    })
  }

}
