
angular
    .module('app.components')
    .controller('ZipCodePopupCtrl', ZipCodePopupCtrl);

ZipCodePopupCtrl.$inject = ['$scope','$modalInstance','LocationSrv'];
function ZipCodePopupCtrl($scope, $modalInstance, LocationSrv) {

    var zipCodePopupCtrl = this;

};
