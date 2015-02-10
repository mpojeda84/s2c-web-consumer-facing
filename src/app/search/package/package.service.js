
angular
    .module('app.search.package')
    .service('PackageSrv', PackageSrv);

PackageSrv.$inject = ['$http', 'SearchSrv', 'ValidationSrv'];
function PackageSrv($http, SearchSrv, ValidationSrv) {

    var validateParams = function(params){
        if(!ValidationSrv.hasPropertyAndType(params, 'category', params.category, 'integer'))
            delete params.category;
        if(!ValidationSrv.hasPropertyAndType(params, 'delivery', params.delivery, 'boolean'))
            delete params.delivery;
    }

    return {
        search: function(params){
            validateParams(params);
            return $http.get('http://10.0.0.3:8080/package/offers', {params:params})
                .error(function (error) {

                })
        },

        load: function(id){
            return $http.get('http://10.0.0.3:8080/package/'+ id)
                .error(function (error) {

                })
        }

    };

};
