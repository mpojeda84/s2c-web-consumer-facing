/**
 * Created by mpereira on 7/30/2014.
 */

var app = angular.module('app', [
    'ngMessages',
    'ui.router',
    'mm.foundation',
    'pascalprecht.translate',
    'ngSanitize',
    'uiGmapgoogle-maps',
    'appControllers',
    'appDirectives'
]);

app.config(['$httpProvider', '$stateProvider', '$urlRouterProvider', '$translateProvider', '$injector', function ($httpProvider, $stateProvider, $urlRouterProvider, $translateProvider, $injector) {

    $stateProvider
        .state('welcome', {
            url: '/welcome',
            templateUrl: 'src/welcome/welcome.html',
            controller: 'welcomeCtrl'
        })
        .state('search', {
            url: '/search',
            templateUrl: 'src/search/search.html',
            controller: 'searchCtrl'
        })
    ;
    $urlRouterProvider
        .when('/', '/welcome')
        .when('', '/welcome');

    $translateProvider.useStaticFilesLoader({
        prefix: 'src/common/translation/locale-',
        suffix: '.json'
    });
    $translateProvider.preferredLanguage('en_US');

}])

.run(['$rootScope', '$http', '$location', '$state', function ($rootScope, $http, $location, $state) {
        // mpereira: put init code here, like security interceptors etc
}]);

