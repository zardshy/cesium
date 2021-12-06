/*
 * @Author: your name
 * @Date: 2021-10-12 17:02:58
 * @LastEditTime: 2021-10-12 17:31:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ngcesium\src\app\pages\welcome\welcome-routing.module.ts
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { InitCesiumComponent } from './pages/init-cesium/init-cesium.component'
import { AddEntityComponent } from './pages/add-entity/add-entity.component';
import { AddGltfComponent } from './pages/add-gltf/add-gltf.component';
import { Tiles3dComponent } from './pages/tiles3d/tiles3d.component';
import { CameraComponent } from './pages/camera/camera.component' 
import { TrackComponent } from './pages/track/track.component';
import { BaseMapComponent } from './pages/base-map/base-map.component';
import { CavasComponent } from './pages/cavas/cavas.component';
import { ModelMaterialComponent } from './pages/model-material/model-material.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    children:[{
        path: '', redirectTo: 'AddEntity',
      },
      {
        path: 'AddEntity', component: AddEntityComponent,
        data: {
          breadcrumb: '添加实体'
        },
      },
      {
        path: 'AddGltf', component: AddGltfComponent,
        data: {
          breadcrumb: '添加Gltf'
        },
      },
      {
        path: 'Add3Dtiles', component: Tiles3dComponent,
        data: {
          breadcrumb: '添加3Dtiles'
        },
      },
      {
        path: 'track', component: TrackComponent,
        data: {
          breadcrumb: '轨迹运动'
        },
      },
      {
        path: 'Camera', component: CameraComponent,
        data: {
          breadcrumb: '相机'
        },
      },
      {
        path: 'baseMap', component: BaseMapComponent,
        data: {
          breadcrumb: '底图'
        },
      },
      {
        path: 'ModelMaterial', component: ModelMaterialComponent,
        data: {
          breadcrumb: '模型材质'
        },
      },
      {
        path: 'cavas', component: CavasComponent,
        data: {
          breadcrumb: 'cavas'
        },
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
