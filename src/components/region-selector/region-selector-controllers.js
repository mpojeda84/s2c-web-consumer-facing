/**
 * Created by mpereira on 7/30/2014.
 */

regionSelector

.controller('regionSelectorCtrl', ['$scope','$http', '$filter','regionSelectorSrv',
function($scope,  $http, $filter, regionSelectorSrv) {

    $scope.regions = regionSelectorSrv.getAllRegions();

    $scope.done = function(){
        $scope.selected = $filter('filter')($scope.regions, {checked:true});
    }
    $scope.cancel= function(){
        $scope.regions = regionSelectorSrv.getAllRegions();
    };

}]);
