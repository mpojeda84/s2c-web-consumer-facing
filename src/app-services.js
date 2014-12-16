/**
 * Created by mpereira on 7/30/2014.
 */
var appServices = angular.module('appServices', ['ngCookies']);

appServices.factory('appSrv', ['$http', '$rootScope', '$cookies' , function($http, $rootScope, $cookies) {
    return {
        service1: function(){
            return  "This is the Service 1";
        }
    };
}]);

appServices.factory('mapSrv', function() {
    return {
        markers: [],
        initMarkers:function(){
            this.markers = [];
        },
        addMarker: function(marker){
            this.markers.push(marker);
        },
        deleteMarker: function(marker){
            var index = this.markers.indexOf(marker);
            this.markers.splice(index,1);
        },
        deleteAllMarkers:function(){
            this.initMarkers();
        }
    };
});


