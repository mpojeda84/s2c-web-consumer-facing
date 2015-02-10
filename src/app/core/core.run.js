
angular
    .module('app.core')
    .run(CoreRun);

    CoreRun.$inject = ['$rootScope', '$http', '$location', '$state'];
    function CoreRun($rootScope, $http, $location, $state) {
            // mpereira: put init code here, like security interceptors etc
    };
