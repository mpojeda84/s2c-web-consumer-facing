
angular.module('app.site')
    .config(ContactConfig);

    ContactConfig.$inject = ['$stateProvider'];
    function ContactConfig($stateProvider, $location) {

        $stateProvider
            .state('contact', {
                url: '/contact',
                templateUrl: 'app/site/contact/contact.html',
                controller: 'ContactCtrl',
                controllerAs: 'contactCtrl'
            })
    }
