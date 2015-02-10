
angular
    .module('app.search')
    .factory('SearchSrv', SearchSrv);

    SearchSrv.$inject = ['$http', 'LocationSrv'];
    function SearchSrv($http, LocationSrv) {

        var searchSrv = {};

        searchSrv.searchParams = LocationSrv.searchParams;
        searchSrv.setParam = function (param, value){
            LocationSrv.setParam(param, value);
        }

        return searchSrv;
    }






