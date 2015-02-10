
angular
    .module('app.search.package')
    .controller('ViewPackageCtrl', ViewPackageCtrl);

//    ViewPackageCtrl.$inject = ['$scope', '$stateParams', 'PackageSrv', 'offer', uiGmapGoogleMapApi];
    function ViewPackageCtrl($scope, item, $stateParams, PackageSrv, $anchorScroll, uiGmapGoogleMapApi) {

        var viewPackageCtrl = this;
        console.log("View created");

        viewPackageCtrl.package = item;
        viewPackageCtrl.package.id = $stateParams.id;
        viewPackageCtrl.package.markerOptions = { visible:false }

        viewPackageCtrl.zipCode = '33063';
        viewPackageCtrl.map = { center: { latitude: 25.7877, longitude: -80.2241 }, zoom: 10 };
        viewPackageCtrl.options = {disableDefaultUI:true, disableDoubleClickZoom: false, draggable:false, scrollwheel:false, streetViewControl:false};

        viewPackageCtrl.showMarker = function(){
            viewPackageCtrl.package.markerOptions.visible = !viewPackageCtrl.package.markerOptions.visible;
        }

        $anchorScroll();

    };
