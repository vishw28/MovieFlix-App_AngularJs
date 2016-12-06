/**
 * Created by Vishw on 8/10/2016.
 */
(function () {
    'use strict';

    angular
        .module('app')
        .service('homeService',homeService);

        homeService.$inject = ['$http','$q'];

        function homeService($http,$q) {
            var self = this;
            self.getMovies = getMovies;
            self.createUser = createUser;
            self.addCmnt = addCmnt;
            self.addRtng = addRtng;
            self.getUsers = getUsers;

            function getMovies() {
                return $http.get('http://localhost:8080/spring-rest/api/movies')
                    .then(successFn, errorFn);
            }
            function getUsers() {
                return $http.get('http://localhost:8080/spring-rest/api/users')
                    .then(successFn, errorFn);
            }
            function addCmnt(movie) {
                return $http.put('http://localhost:8080/spring-rest/api/movies/' +movie.id , movie)
                    .then(successFn, errorFn);
            }
            function addRtng(movie) {
                return $http.put('http://localhost:8080/spring-rest/api/movies/' +movie.id , movie)
                    .then(successFn, errorFn);
            }
            function createUser(user) {
                return $http.post('http://localhost:8080/spring-rest/api/users',user)
                    .then(successFn, errorFn);
            }
            function successFn(response) {
                return response.data; //RESOLVE
            }

            function errorFn(response) {
                return $q.reject(response.status); //REJECT
            }

        }
    
})();