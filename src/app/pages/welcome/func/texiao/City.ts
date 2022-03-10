export function numberCity(viewer, tileset) {
    viewer.scene.primitives.add(tileset)
    let r = tileset.boundingSphere.radius
    if (tileset.boundingSphere.radius > 10000) {
      r = tileset.boundingSphere.radius / 10
    }
    // viewer.zoomTo(tileset, new Cesium.HeadingPitchRange(0.0, -0.5, r))
    // tileset.style = new Cesium.Cesium3DTileStyle({
    //         color: 'vec4(0, 0.5, 1.0,1)'
    //     })
    // 注入 shader
    tileset.tileVisible.addEventListener((tile) => {
      var content = tile.content
      var featuresLength = content.featuresLength
      for (var i = 0; i < featuresLength; i +=2) {
        const feature = content.getFeature(i)
        const model = feature.content._model
        if (model && model._sourcePrograms && model._rendererResources) {
        //   Object.keys(model._sourcePrograms).forEach((key) => {
        //     const program = model._sourcePrograms[key]
        //     const fragmentShader = model._rendererResources.sourceShaders[program.vertexShader]
        //     model._rendererResources.sourceShaders[program.vertexShader] =
        //     `
        //     attribute vec3 a_normal;
        //     precision highp float;
        //     uniform mat4 u_modelViewMatrix;
        //     uniform mat4 u_projectionMatrix;
        //     attribute vec3 a_position;
        //     attribute float a_batchId;
        //     varying vec3 v_positionEC;
        //     void main(void) 
        //     {
        //         vec3 weightedPosition = a_position;
        //         vec4 position = vec4(weightedPosition, 1.0);
        //         position = u_modelViewMatrix * position;
        //         v_positionEC = position.xyz;
        //         gl_Position = u_projectionMatrix * position;
        //     }
        //     `
        //   })
  
          Object.keys(model._sourcePrograms).forEach((key) => {
            const program = model._sourcePrograms[key]
            const fragmentShader = model._rendererResources.sourceShaders[program.vertexShader]
          
            let vPosition = ''
            if (fragmentShader.indexOf(' v_positionEC;') !== -1) {
              vPosition = 'v_positionEC'
            } else if (fragmentShader.indexOf('v _pos;') !== -1) {
              vPosition = 'v_pos'
            }
            
            // const color = `vec4(${feature.color.toString()})`
            const color = `vec4(0, 0.5, 1.0,0.1)`
            // const color = `vec4(0,150,255,0.6)`
  
            // 自定义着色器
            model._rendererResources.sourceShaders[program.fragmentShader] =
            // 默认
            `
                varying vec3 ${vPosition};// 相机坐标系的模型坐标
                void main(void){
                    /* 渐变效果 */
                    vec4 v_helsing_position = czm_inverseModelView * vec4(${vPosition},1);// 解算出模型坐标
                    float stc_pl = fract(czm_frameNumber / 150.0) * 3.14159265 * 2.0;
                    float stc_sd = v_helsing_position.z / 100.0 + sin(stc_pl) * 0.1;
                    gl_FragColor = ${color};// 基础颜色
                    gl_FragColor *= vec4(stc_sd, stc_sd, stc_sd, 100.0);// 按模型高度进行颜色变暗处理
                    /* 扫描线 */
                    float glowRange = 150.0; // 光环的移动范围(高度)，最高到360米
                    float stc_a13 = fract(czm_frameNumber / 200.0);// 计算当前着色器的时间，帧率/（6*60），即时间放慢6倍
                    float stc_h = clamp(v_helsing_position.z / glowRange, 0.0, 1.0);
                    stc_a13 = abs(stc_a13 - 0.5) * 2.0;
                    float stc_diff = step(0.005, abs(stc_h - stc_a13));// 根据时间来计算颜色差异
                    gl_FragColor.rgb += gl_FragColor.rgb * (1.0 - stc_diff);// 原有颜色加上颜色差异值提高亮度
                }`

            // `
            // varying vec3 ${vPosition};// 相机坐标系的模型坐标
            // void main(void){
            //     /* 渐变效果 */
            //     vec4 v_helsing_position = czm_inverseModelView * vec4(${vPosition},1);// 解算出模型坐标
            //     float stc_pl = fract(czm_frameNumber / 120.0) * 3.14159265 * 2.0;
            //     /* 扫描线  v_helsing_position.z / 5.0 + sin(stc_pl) * 0.1 其中5.0是5米一下变暗*/
            //     float stc_sd = v_helsing_position.z / 80.0 + sin(stc_pl) * 0.1;
            //     gl_FragColor = ${color};// 基础颜色
            //     gl_FragColor *= vec4(stc_sd, stc_sd, stc_sd, 0.6);// 按模型高度进行颜色变暗处理
            //     /* 扫描线 */
            //     float glowRange = 100.0; // 光环的移动范围(高度)，最高到360米
            //     /* 调整光环移动速度调整360 */
            //     //float stc_a13 = fract(czm_frameNumber / 360.0);// 计算当前着色器的时间，帧率/（6*60），即时间放慢6倍
            //     float stc_a13 = fract(czm_frameNumber / 200.0);// 计算当前着色器的时间，帧率/（6*60），即时间放慢6倍
            //     float stc_h = clamp(v_helsing_position.z / glowRange, 0.0, 1.0);
            //     stc_a13 = abs(stc_a13 - 0.5) * 2.0;
            //     float stc_diff = step(0.005, abs(stc_h - stc_a13));// 根据时间来计算颜色差异
            //     //gl_FragColor.rgb += gl_FragColor.rgb * (1.0 - stc_diff);// 原有颜色加上颜色差异值提高亮度
            // }`
          })
          // 让系统重新编译着色器
          model._shouldRegenerateShaders = true
        }
      }
    })
  }
  