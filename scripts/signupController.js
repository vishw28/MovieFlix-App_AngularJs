

(function() {
    'use strict';

    angular
        .module('app')
        .controller('SignupController', SignupController);

    SignupController.$inject = ['homeService', '$location'];

    function SignupController(homeService, $location) {
        var addUserVm = this;

        addUserVm.signupForm = signupForm;
        addUserVm.newUser = {};

        console.log(addUserVm.newUser);

        function signupForm() {
            homeService
                .createUser(addUserVm.newUser)
                .then(function(data) {
                    $location.path('/login');
                }, function(error) {
                    console.log(error);
                });
        }
    }
})();
