
angular
    .module('app.core', [

        /*
         * Angular modules
         */
        'ngSanitize',
        'ngMessages',


        /*
         * 3rd Party modules
         */
        'mm.foundation',
         /* Angular-ui */
        'ui.router',
        'uiGmapgoogle-maps',

        'pascalprecht.translate',

        'blocks.logger',
        'blocks.exception'
    ])

    .config(CoreConfig);

    CoreConfig.$inject = ['$httpProvider', '$stateProvider', '$urlRouterProvider', '$translateProvider', '$injector', '$locationProvider'];
    function CoreConfig($httpProvider, $stateProvider, $urlRouterProvider, $translateProvider, $injector, $locationProvider) {

            $urlRouterProvider.when('/', '/search');
            $urlRouterProvider.when('', '/search');
            $urlRouterProvider.otherwise('/search');

            $translateProvider.useStaticFilesLoader({
                prefix: 'app/common/translation/locale-',
                suffix: '.json'
            });
            $translateProvider.preferredLanguage('en_US');


//            $locationProvider.html5Mode(true);


     };

var core = angular.module('app.core');

core.config(toastrConfig);

/* @ngInject */
toastrConfig.$inject = ['toastr'];
function toastrConfig(toastr) {
    toastr.options.timeOut = 4000;
    toastr.options.positionClass = 'toast-bottom-right';
}

var keyCodes = {
    backspace: 8,
    tab: 9,
    enter: 13,
    esc: 27,
    space: 32,
    pageup: 33,
    pagedown: 34,
    end: 35,
    home: 36,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    insert: 45,
    del: 46
};

var imageSettings = {
    imageBasePath: '../content/images/photos/',
    unknownPersonImageSource: 'unknown_person.jpg'
};

var events = {
    controllerActivateSuccess: 'controller.activateSuccess',
    entitiesChanged: 'datacontext.entitiesChanged',
    entitiesImported: 'datacontext.entitiesImported',
    hasChangesChanged: 'datacontext.hasChangesChanged',
    storage: {
        error: 'store.error',
        storeChanged: 'store.changed',
        wipChanged: 'wip.changed'
    }
};

var config = {
    appErrorPrefix: '[CC Error] ', //Configure the exceptionHandler decorator
    events: events,
    imageSettings: imageSettings,
    keyCodes: keyCodes,
    version: '1.1.0'
};

core.constant('config', config);

core.config(configure);

configure.$inject = [
    '$logProvider',
    'exceptionConfigProvider', 'toastr'
];

/* @ngInject */
function configure(
    $logProvider,
    exceptionConfigProvider, toastr) {

    configureToastr();
    configureLogging();
    configureExceptions();
    //configureRouting();

    function configureToastr() {
        toastr.options.timeOut = 4000;
        toastr.options.positionClass = 'toast-bottom-right';
    }

    function configureLogging() {
        // turn debugging off/on (no info or warn)
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }
    }

    function configureExceptions() {
        exceptionConfigProvider.config.appErrorPrefix = config.appErrorPrefix;
    }

//    function configureRouting() {
//        var routeCfg = routehelperConfigProvider;
//        routeCfg.config.$routeProvider = $routeProvider;
//        routeCfg.config.docTitle = 'CC: ';
//        routeCfg.config.resolveAlways = { /* @ngInject */
//            ready: function(datacontext) {
//                return datacontext.ready();
//            }
////                ready: ['datacontext', function (datacontext) {
////                    return datacontext.ready();
////                }]
//        };
//    }
}

core.config(MapsConfig);
MapsConfig.$inject = ['uiGmapGoogleMapApiProvider']
function MapsConfig(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        //    key: 'your api key',
        v: '3.17',
        libraries: 'geometry'
    });
}