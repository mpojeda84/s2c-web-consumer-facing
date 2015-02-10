
angular.module('app.site')
    .config(BlogConfig);

    BlogConfig.$inject = ['$stateProvider'];
    function BlogConfig($stateProvider, $location) {

        $stateProvider
            .state('blog', {
                url: '/blog',
                templateUrl: 'app/site/blog/blog.html',
                controller: 'BlogCtrl',
                controllerAs: 'blogCtrl'
            })
    }
