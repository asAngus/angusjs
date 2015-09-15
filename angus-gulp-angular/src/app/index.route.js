(function () {
    'use strict';

    angular
        .module('angusGulpAngular')
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('login', {
                url: '/',
                templateUrl: 'app/main/login/login.html',
                controller: 'LoginController',
                controllerAs: 'login'
            }).state('main', {
                url:"/main",
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'main'
            });

        $urlRouterProvider.otherwise('/');
    }

})();
