
angular.module('app.search', [])
    .config(SearchConfig);

    SearchConfig.$inject = ['$stateProvider'];
    function SearchConfig($stateProvider, $location) {

        $stateProvider
            .state('search', {
                url: '/search?zipCode',
                templateUrl: 'app/search/search.html',
                controller: 'SearchCtrl',
                controllerAs: 'searchCtrl'
            })
    }
