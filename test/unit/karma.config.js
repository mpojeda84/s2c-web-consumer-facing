module.exports = function(config){
    config.set({

        basePath : '../..',

        files : [
            'libraries/bower_components/angular/angular.js',
            'libraries/bower_components/angular-mocks/angular-mocks.js',
            'src/app.js',
            'src/app-controllers.js',
            'src/app-directives.js',
            'src/app-services.js',
            'src/app-filters.js',

            'src/business-management/business-management.js',
            'src/business-management/business-management-controllers.js',
            'src/business-management/business-management-directives.js',
            'src/business-management/business-management-filters.js',
            'src/business-management/business-management-services.js',

            'src/business-management/basic-information/basic-information-controllers.js',
            'src/business-management/basic-information/basic-information-services.js',

            'src/business-management/money-offer/money-offer-controllers.js',
            'src/business-management/money-offer/money-offer-services.js',

            'src/components/region-selector/region-selector.js',
            'src/components/region-selector/region-selector-controllers.js',
            'src/components/region-selector/region-selector-directives.js',
            'src/components/region-selector/region-selector-filters.js',
            'src/components/region-selector/region-selector-services.js',

            'test/unit/**/*_test.js'
        ],

        logLevel : config.LOG_DEBUG,

        autoWatch : true,

        frameworks: ['jasmine'],

        browsers : ['Chrome' /*, 'Firefox', 'IE'*/],

        plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-ie-launcher',
            'karma-coverage',
            'karma-jasmine',
            'karma-teamcity-reporter'
        ],

        reporters: ['progress', 'coverage', 'teamcity'],

        preprocessors: {
            '**/!(*test).js': 'coverage'
        },

        coverageReporter : {
            type: 'html',
            dir : 'coverage/'
        },

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun : true

    });
};/**
 * Created by maikel on 10/11/2014.
 */
