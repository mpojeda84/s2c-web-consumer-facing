

angular
    .module('app.site')
    .controller('SiteCtrl', SiteCtrl);

    SiteCtrl.$inject = ['$http', '$state', '$scope', '$translate', 'LocationSrv', 'SearchSrv', '$modal', '$rootScope', 'logger'];
    function SiteCtrl($http, $state, $scope, $translate, LocationSrv, SearchSrv, $modal, $rootScope, logger) {

        var siteCtrl = this;
        siteCtrl.switchLanguage = function (key) {
            $translate.use(key);
        };

        siteCtrl.setLocation = function() {
            if(LocationSrv.setLocation(siteCtrl.newZipCode)){
                logger.success("Location Changed.");
            }
        }

        siteCtrl.currentLocation = LocationSrv.getCurrentLocation();
        siteCtrl.newZipCode = angular.copy(siteCtrl.currentLocation.zipCode);

            //$state.go($state.current);

            /* Dispach Search */
            // When set the zipCode in URL with $location service, the UI-Router automatically refresh the new URL,
            // because the state of the view involve the zipCode eg: /search/package?zipCode ,
            // if this parameter change in anyway then the UI-Router refresh to the new URL, and create a
            // new controller. So, in the controller, always when is created, we call doSearch().

            //$scope.open();
        //};

//        $scope.open = function () {
//            var modalInstance = $modal.open({
//                templateUrl: 'app/components/zipcode-popup/zipcode-popup.html',
//                controller: 'ZipCodePopupCtrl'
//            });
//
//            modalInstance.result.then(function (changed) {
//                console.log(changed);
//            }, function () {
//
//            });
//        };
//
//        var verifi = function(){
//            if(!siteCtrl.currentLocation.zipCode)
//                $scope.open();
//        }

//        verifi();

        $scope.backButton = function() {
            window.history.back();
        };
    };
