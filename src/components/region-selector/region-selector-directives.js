/**
 * Created by mpereira on 7/30/2014.
 */
regionSelector
.directive('regionSelector', [ '$filter',function($filter) {
    return {
        restrict: 'E',
        scope: {
            selected: '=',
            columns: '=',
            title: '@'
        },
        controller: 'regionSelectorCtrl',
        link: function(scope, element, attrs) {

        },
        templateUrl: 'components/region-selector/region-selector.html'
    };
}]);