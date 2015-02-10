/**
 * Created by alejomo on 1/18/15.
 */

angular
    .module('app.core')
    .factory('ClientStorageSrv', ClientStorageSrv);
    function ClientStorageSrv () {

        var storageSrv = {};

        storageSrv.saveItem = function(name, value){
            localStorage.setItem(name, JSON.stringify(value));
        }

        storageSrv.getItem = function(name, value){
            return JSON.parse(localStorage.getItem(name));
        }

        return storageSrv;
    }
