/**
 * Created by alejomo on 1/18/15.
 */


angular
    .module('app.core')
    .factory('ValidationSrv', ValidationSrv);

function ValidationSrv($http) {

    var validationSrv = {};

    validationSrv.isInteger = function (value) {
        return !isNaN(value) &&
            parseInt(Number(value)) == value &&
            !isNaN(parseInt(value, 10));
    }

    validationSrv.isIntegerOr = function (value, valueBack) {
        return validationSrv.isInteger(value) ? parseInt(value) : valueBack;
    }

    validationSrv.isBoolean = function (value) {
        return (value === true || value === "true")
    }

    validationSrv.hasPropertyAndType = function(object, property, value, type){

        if(!object.hasOwnProperty(property))
            return false;
        switch (type) {
            case 'boolean':
                return validationSrv.isBoolean(value);
            case 'integer':
                return validationSrv.isInteger(value);
        }
        return true;
    }


    validationSrv.ConvertObject = function (value) {

    }

    return validationSrv;
}
