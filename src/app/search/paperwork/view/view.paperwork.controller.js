
angular
    .module('app.search.paperwork')
    .controller('ViewPaperworkCtrl', ViewPaperworkCtrl);

    ViewPaperworkCtrl.$inject = ['$scope', 'mapSrv'];
    function ViewPaperworkCtrl($scope, mapSrv) {

        var viewPaperworkCtrl = this;
        viewPaperworkCtrl.paperwork = {
            name: "Lucy Inc Paperwork.",
            address: "4324 SW 20 ST, Suite 3, Miami Gardens, 32033"
        }

    };
