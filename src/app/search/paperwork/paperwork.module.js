
angular.module('app.search.paperwork', [])
    .config(PaperworkConfig);

    PaperworkConfig.$inject = ['$stateProvider'];
    function PaperworkConfig($stateProvider) {

        $stateProvider
            .state('paperwork', {
                url: '/search/paperwork?zip=:zipCode&mprice=:min_price',
                templateUrl: 'app/search/paperwork/paperwork.html',
                controller: 'PaperworkCtrl',
                controllerAs: 'paperworkCtrl'
            })
            .state('paperworkView', {
                url: '/paperwork/offer/:id',
                templateUrl: 'app/search/paperwork/view/view.paperwork.html',
                controller: 'ViewPaperworkCtrl',
                controllerAs: 'viewPaperworkCtrl'
            })

    }
