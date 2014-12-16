/**
 * Created by mpereira on 7/30/2014.
 */
var appDirectives = angular.module('appDirectives',['appServices']);

appDirectives
.directive('s2cDisabled', function () {
    return {
        restrict: 'A',
        scope: false,
        link: function(scope, element, attrs) {
            var loadingLayer = angular.element('<div class="s2c_overlay"></div>');
            element.prepend(loadingLayer);
            element.addClass('s2c_overlay_container');
            scope.$watch(attrs.s2cDisabled, function(value) {
                loadingLayer.toggleClass('ng-hide', !value);
            });
        }
    }
});

