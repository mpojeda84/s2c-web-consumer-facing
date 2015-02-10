/**
 * Created by alejomo on 1/18/15.
 */


angular
    .module('app.core')
    .factory('LocationSrv', LocationSrv);
    LocationSrv.$inject = ['$location', 'ClientStorageSrv', 'ValidationSrv'];
    function LocationSrv ($location, ClientStorageSrv, ValidationSrv) {

        var locationSrv  = {};

        var currentLocation = {
            zipCode:null
        };

        locationSrv.getCurrentLocation = function(){
            if(currentLocation.zipCode == null) {
                detectCurrentLocation();
            }
            return currentLocation;
        }

        var detectCurrentLocation = function(){
            //In URL
            var params = $location.search();

            if(ValidationSrv.hasPropertyAndType(params, 'zipCode', params.zipCode, 'integer')){
                locationSrv.setLocation(params.zipCode);
            }else {

                //Try to find in LocalStorage
                var locationPoint = ClientStorageSrv.getItem('location');
                if (locationPoint && locationPoint.currentLocation)
                    locationSrv.setLocation(locationPoint.currentLocation.zipCode);
            }
        }

        locationSrv.setLocation = function(newLocation){
            if(currentLocation.zipCode != newLocation && ValidationSrv.isInteger(newLocation) && newLocation.length === 5) {
                currentLocation.zipCode = newLocation;

                // To update the URL with the zipCode
                locationSrv.setParam('zipCode', newLocation);

                // Saving in LocalStorage
                ClientStorageSrv.saveItem('location', {currentLocation: {zipCode: newLocation }});
                return true;
            }
            return false;
        }


        locationSrv.setParam = function setParam(newParam, value) {
            // Delete de param from de URL, to avoid show param=false, eg: delivery=false
            if(value === false)
                $location.search(newParam, null);
            else
                $location.search(newParam, value);
        };

        locationSrv.searchParams = function searchParams() {
            return $location.search();
        };

        return locationSrv;
    }
