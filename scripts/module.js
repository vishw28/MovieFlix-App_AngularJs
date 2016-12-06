(function() {
    'use strict';

    angular
        .module('app', ['ngRoute'])
        .config(moduleConfig)
        console.log('app started');

        moduleConfig.$inject = ['$routeProvider'];

        function moduleConfig($routeProvider) {
            $routeProvider

                .when('/index', {
                    templateUrl: 'index.html',
                })
                .when('/homecontent', {
                    templateUrl: 'homecontent.html',
                    controller:'HomeController'
                })

                .when('/signup', {
                    templateUrl: 'signup-templet.html',
                    controller:'SignupController',
                    controllerAs: 'addUserVm'
                })
                .when('/login', {
                    templateUrl: 'login-templet.html',
                    controller:'LoginController',
                    controllerAs: 'log'

                })
                .otherwise({
                    redirectTo: '/index'
                });


        }


})();
