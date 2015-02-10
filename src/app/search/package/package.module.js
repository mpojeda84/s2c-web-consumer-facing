
angular.module('app.search.package', [])
    .config(PackageConfig);

    PackageConfig.$inject = ['$stateProvider'];
    function PackageConfig($stateProvider) {

        $stateProvider
            .state('package', {
                url: '/search/package?zipCode&category&delivery&page',
                templateUrl: 'app/search/package/package.html',
                resolve:{
                    offers: function($stateParams, PackageSrv) {
                        return PackageSrv.search(angular.copy($stateParams))
                            .then(function (result) {
                                return result.data;
                            })
                    }
                },

                controller: 'PackageCtrl',
                controllerAs: 'packageCtrl'

            })
            .state('packageView', {
                url: '/package/:id',
                templateUrl: 'app/search/package/view/view.package.html',
                resolve: {
                    item:  function($stateParams, PackageSrv){
                        return PackageSrv.load($stateParams.id)
                            .then(function(result){
                                return result.data;
                            })
                    }
                },
                controller: 'ViewPackageCtrl',
                controllerAs: 'viewPackageCtrl'

//                controller: function($scope, item){
//                    $scope.package = item;
//                }
            })
    }
