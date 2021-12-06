declare var Cesium:any;

export default function addBaseMap(viewer,type?){
    let layer = null;
    viewer.scene.imageryLayers.removeAll()
    const urlTemplate = (arg) => new Cesium.UrlTemplateImageryProvider(arg)
    switch (type) {
        case 'ARCGIS':
            layer = new Cesium.ArcGisMapServerImageryProvider({
                url:"https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer"
            });
            break;
        case 'BAIDU':
            let bd_sl = 'http://online{s}.map.bdimg.com/onlinelabel/?qt=tile&x={x}&y={y}&z={z}&styles=pl&scaler=1&p=1'
            layer = new BaiduImageryProvider({
                url: bd_sl
            })
            break;
        case 'GAODE':
            let gd_yx = 'http://webst02.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}'
            let gd_sl = 'http://webst02.is.autonavi.com/appmaptile?style=7&x={x}&y={y}&z={z}'
            layer = urlTemplate({url:gd_yx})
            break;
        case 'OSM':
            layer = new Cesium.OpenStreetMapImageryProvider({
                url : 'https://a.tile.openstreetmap.org/'
            });
            break;
        case 'TDT':
            break;
        case 'IMG':
            layer = new Cesium.SingleTileImageryProvider({
                url: "assets/IMG/aa.jpg",
                rectangle: Cesium.Rectangle.fromDegrees(
                    -90.0,
                    -45.0,
                    90.0,
                    45.0
                ),
            })
            break;
        default:
            layer = urlTemplate({
                url:'https://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}',
                minimumLevel:0,
                maximumLevel : 15,
                hue:'3'
            })
            break;
    }
    viewer.scene.imageryLayers.addImageryProvider(layer)
}


function BaiduImageryProvider(options) {
    this._errorEvent = new Cesium.Event();
    this._tileWidth = 256;
    this._tileHeight = 256;
    this._maximumLevel = 18;
    this._minimumLevel = 1;
    var southwestInMeters = new Cesium.Cartesian2(-33554054, -33746824);
    var northeastInMeters = new Cesium.Cartesian2(33554054, 33746824);
    this._tilingScheme = new Cesium.WebMercatorTilingScheme({
        rectangleSouthwestInMeters: southwestInMeters,
        rectangleNortheastInMeters: northeastInMeters
    });
    this._rectangle = this._tilingScheme.rectangle;
    var resource = Cesium.Resource.createIfNeeded(options.url);
    this._resource = resource;
    this._tileDiscardPolicy = undefined;
    this._credit = undefined;
    this._readyPromise = undefined;
}

Object.defineProperties(BaiduImageryProvider.prototype, {
    url: {
        get: function () {
            return this._resource.url;
        }
    },
    proxy: {
        get: function () {
            return this._resource.proxy;
        }
    },
    tileWidth: {
        get: function () {
            if (!this.ready) {
                throw new Cesium.DeveloperError('tileWidth must not be called before the imagery provider is ready.');
            }
            return this._tileWidth;
        }
    },

    tileHeight: {
        get: function () {
            if (!this.ready) {
                throw new Cesium.DeveloperError('tileHeight must not be called before the imagery provider is ready.');
            }
            return this._tileHeight;
        }
    },

    maximumLevel: {
        get: function () {
            if (!this.ready) {
                throw new Cesium.DeveloperError('maximumLevel must not be called before the imagery provider is ready.');
            }
            return this._maximumLevel;
        }
    },

    minimumLevel: {
        get: function () {
            if (!this.ready) {
                throw new Cesium.DeveloperError('minimumLevel must not be called before the imagery provider is ready.');
            }
            return this._minimumLevel;
        }
    },

    tilingScheme: {
        get: function () {
            if (!this.ready) {
                throw new Cesium.DeveloperError('tilingScheme must not be called before the imagery provider is ready.');
            }
            return this._tilingScheme;
        }
    },

    tileDiscardPolicy: {
        get: function () {
            if (!this.ready) {
                throw new Cesium.DeveloperError('tileDiscardPolicy must not be called before the imagery provider is ready.');
            }
            return this._tileDiscardPolicy;
        }
    },

    rectangle: {
        get: function () {
            if (!this.ready) {
                throw new Cesium.DeveloperError('rectangle must not be called before the imagery provider is ready.');
            }
            return this._rectangle;
        }
    },

    errorEvent: {
        get: function () {
            return this._errorEvent;
        }
    },
    ready: {
        get: function () {
            return this._resource;
        }
    },
    readyPromise: {
        get: function () {
            return this._readyPromise;
        }
    },
    credit: {
        get: function () {
            if (!this.ready) {
                throw new Cesium.DeveloperError('credit must not be called before the imagery provider is ready.');
            }
            return this._credit;
        }
    },
});

BaiduImageryProvider.prototype.requestImage = function (x, y, level, request) {
    var r = this._tilingScheme.getNumberOfXTilesAtLevel(level);
    var c = this._tilingScheme.getNumberOfYTilesAtLevel(level);
    var s = this.url.replace("{x}", x - r / 2).replace("{y}", c / 2 - y - 1).replace("{z}", level).replace("{s}", Math.floor(10 * Math.random()));
    return Cesium.ImageryProvider.loadImage(this, s);
};