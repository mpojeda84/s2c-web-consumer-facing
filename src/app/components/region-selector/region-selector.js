
var regionSelector = angular.module('app.components',[])
    .directive('regionSelector', RegionSelector);

RegionSelector.$inject = [ '$filter'];
function RegionSelector($filter) {
    return {
        restrict: 'E',
        scope: {
            selected: '=',
            columns: '=',
            title: '@'
        },
        controller: RegionSelectorCtrl,
        controllerAs: 'regionSelectorCtrl',
        templateUrl: 'components/region-selector/region-selector.html'
    }
}
RegionSelectorCtrl.$inject = ['$scope','$http', '$filter','regionSelectorSrv'];
function RegionSelectorCtrl($scope,  $http, $filter, regionSelectorSrv) {

    var regionSelectorCtrl = this;

    regionSelectorCtrl.regions = regionSelectorSrv.getAllRegions();

    regionSelectorCtrl.done = function(){
        regionSelectorCtrl.selected = $filter('filter')(regionSelectorCtrl.regions, {checked:true});
    }
    regionSelectorCtrl.cancel= function(){
        regionSelectorCtrl.regions = regionSelectorSrv.getAllRegions();
    };
};


regionSelector
    .filter('column', function() {
        return function(input,actual,total) {
            var partial = Math.floor(parseInt(input.length)/parseInt(total)) + 1;
            var ini = (actual-1) * partial;
            var fin = ini + partial;
            var result = input.slice(ini, fin);
            return result;
        };
    })

regionSelector
    .factory('regionSelectorSrv', ['$http', function($http) {
        var buildRegions = function() {

            return [
                {id: 17, name: 'All'},
                {id: 1, name: 'Pinar del R.'},
                {id: 2, name: 'Mayabeque'},
                {id: 3, name: 'Artemisa'},
                {id: 4, name: 'La Habana'},
                {id: 5, name: 'Matanzas'},
                {id: 6, name: 'I. Juventud'},
                {id: 7, name: 'Villa Clara'},
                {id: 8, name: 'Cienfuegos'},
                {id: 9, name: 'S. Spiritus'},
                {id: 10, name: 'C. Avila'},
                {id: 11, name: 'Camaguey'},
                {id: 12, name: 'Las Tunas'},
                {id: 13, name: 'Santiago'},
                {id: 14, name: 'Guantanamo'},
                {id: 16, name: 'Granma'},
                {id: 16, name: 'Holguin'}

            ];
        };
        return {
            getAllRegions:function(){
                return buildRegions();
            }
        };
    }]);
