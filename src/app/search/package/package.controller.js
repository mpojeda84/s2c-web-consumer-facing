
angular
    .module('app.search.package')
    .controller('PackageCtrl', PackageCtrl);

    function PackageCtrl($scope, offers, $state, $stateParams, PackageSrv, ValidationSrv) {

        var packageCtrl = this;

        packageCtrl.offers = offers;
        packageCtrl.total = 22;

        packageCtrl.searchParams = $stateParams;
        packageCtrl.searchParams.delivery = ValidationSrv.isBoolean(packageCtrl.searchParams.delivery);

        packageCtrl.goTo = function(){
            $state.go('package', packageCtrl.searchParams);
        };
};