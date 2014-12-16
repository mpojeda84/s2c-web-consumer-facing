/**
 * Created by mpereira on 7/30/2014.
 */
regionSelector
    .factory('regionSelectorSrv', ['$http', function($http) {
        var buildRegions = function() {

            return [
                {id: 17, name: 'All'},
                {id: 1, name: 'Pinar del R.'},
                {id: 2, name: 'Mayabeque'},
                {id: 3, name: 'Artemisa'},
                {id: 4, name: 'La Habana'},
                {id: 5, name: 'Matanzas'},
                {id: 6, name: 'I. Juventud'},
                {id: 7, name: 'Villa Clara'},
                {id: 8, name: 'Cienfuegos'},
                {id: 9, name: 'S. Spiritus'},
                {id: 10, name: 'C. Avila'},
                {id: 11, name: 'Camaguey'},
                {id: 12, name: 'Las Tunas'},
                {id: 13, name: 'Santiago'},
                {id: 14, name: 'Guantanamo'},
                {id: 16, name: 'Granma'},
                {id: 16, name: 'Holguin'}

            ];
        };
        return {
            getAllRegions:function(){
                return buildRegions();
            }
        };
    }]);

