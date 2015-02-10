
angular.module('app.site')
    .config(PrivacyConfig);

    PrivacyConfig.$inject = ['$stateProvider'];
    function PrivacyConfig($stateProvider, $location) {

        $stateProvider
            .state('privacy', {
                url: '/privacy',
                templateUrl: 'app/site/privacy/privacy.html',
                controller: 'PrivacyCtrl',
                controllerAs: 'privacyCtrl'
            })
    }
