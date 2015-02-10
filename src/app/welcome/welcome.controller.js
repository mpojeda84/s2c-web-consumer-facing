
angular
    .module('app.welcome')
    .controller('WelcomeCtrl', WelcomeCtrl);

    WelcomeCtrl.$inject = ['$scope'];
    function WelcomeCtrl($rootScope, $scope) {

        var welcomeCtrl = this;

    };
