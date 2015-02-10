

angular
    .module('app.welcome', [])
    .config(WelcomeConfig);

    WelcomeConfig.$inject = ['$stateProvider'];
    function WelcomeConfig($stateProvider) {

        $stateProvider
            .state('welcome', {
                url: "/welcome",
                templateUrl: 'app/welcome/welcome.html',
                controller: 'WelcomeCtrl',
                controllerAs: 'welcomeCtrl'
            });
    }