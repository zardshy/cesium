declare var Cesium: any;

export default class ClusterPointLayer{
    public layer;
    public viewer;
    constructor(viewer){
        this.viewer= viewer;
        this._init();
    }
    _init(){
        this.layer = new Cesium.CustomDataSource('zard');

        this.layer.entities.add({
            id: '111',
            position:Cesium.Cartesian3.fromDegrees(121.8142, 30.8649,100),
            billboard:{
                image:'assets/IMG/deng_r.jpg',
                width: 22,
                height: 22,
            },

        })

        this.layer.entities.add({
            id: '222',
            position:Cesium.Cartesian3.fromDegrees(121.8192, 30.8649,100),
            billboard:{
                image:'assets/IMG/deng_r.jpg',
                width: 22,
                height: 22,
            }
        })

        const dataSources= this.viewer.dataSources.add(this.layer);

        dataSources.then(function(dataSource){
            var pixelRange = 15;
            var minimumClusterSize = 2;
            var enabled = true;
            dataSource.clustering.enabled = enabled;
            dataSource.clustering.pixelRange = pixelRange;
            dataSource.clustering.minimumClusterSize = minimumClusterSize;

            var removeListener

        function customStyle() {
            if (Cesium.defined(removeListener)) {
            removeListener();
            removeListener = undefined;
            } else {
            removeListener = dataSource.clustering.clusterEvent.addEventListener(
                function (clusteredEntities, cluster) {
                    cluster.label.show = false;
                    cluster.billboard.show = true;
                    cluster.billboard.id = cluster.label.id;
                    cluster.billboard.verticalOrigin =Cesium.VerticalOrigin.BOTTOM;

                    // let image= `${beforeurlImg}/taklaImg/poi/40-66.png`
                    if (clusteredEntities.length) {
                        cluster.billboard.image =  'assets/IMG/deng_g.jpg'
                        // cluster.billboard.scale = 0.5
                    }

                }
            );
            }

            // force a re-cluster with the new styling
            var pixelRange = dataSource.clustering.pixelRange;
            dataSource.clustering.pixelRange = 0;
            dataSource.clustering.pixelRange = pixelRange;
        }
        // customStyle()
        })

    }
}