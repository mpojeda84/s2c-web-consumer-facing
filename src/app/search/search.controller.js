
angular
    .module('app.search')
    .controller('SearchCtrl', SearchCtrl);

    SearchCtrl.$inject = ['$scope', '$stateParams'];
    function SearchCtrl($scope, $stateParams) {

        var searchCtrl = this;

//        uiGmapLogger.doLog = true;

//        searchCtrl.zipCode = '33063';
//        searchCtrl.map = { center: { latitude: 25.7877, longitude: -80.2241 }, zoom: 10 };
//        searchCtrl.options = {disableDefaultUI:true};

    };
