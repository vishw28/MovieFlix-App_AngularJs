(function() {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['homeService', '$location'];

    function LoginController(homeService, $location) {

        var log = this;


        log.login = {};
        log.loginForm = loginForm;

        init();
        function init() {
            homeService.getUsers()
                .then(function (data)
                {
                    log.users = data;
                    console.log(log.users[1].email);
                }
            )
        }

        console.log(log.login);

        function loginForm() {
            var i;
            for(i=0; i<log.users.length ; i++){
                if(log.users[i].email == log.login.email && log.users[i].createPwd == log.login.pwd){
                    $location.path('/homecontent');
                }
            }
            console.log(log.login.pwd);
        };
    }


})();