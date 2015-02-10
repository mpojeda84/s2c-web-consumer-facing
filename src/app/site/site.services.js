/**
 * Created by mpereira on 7/30/2014.
 */
var appSiteModule = angular.module('app.site');

appSiteModule.factory('mapSrv', MapSrv)
    function MapSrv() {
        return {
            markers: [],
            initMarkers: function () {
                this.markers = [];
            },
            addMarker: function (marker) {
                this.markers.push(marker);
            },
            deleteMarker: function (marker) {
                var index = this.markers.indexOf(marker);
                this.markers.splice(index, 1);
            },
            deleteAllMarkers: function () {
                this.initMarkers();
            }
        }
    }

