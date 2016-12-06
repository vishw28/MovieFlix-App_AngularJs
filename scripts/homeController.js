(function() {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController)

    HomeController.$inject = ['homeService'];
    function HomeController(homeService) {

        var vm = this;

        vm.addRating = function (movie) {
            vm.allRatings = vm.rating;
            movie.ratings = vm.allRatings;

            homeService
                .addRtng(movie)
                .then(function(data){
                    vm.rtng = data;
                }, function(error) {
                    console.log(error);
                });


            console.dir(movie.ratings);
        };
        vm.allRatings = '';

        vm.addComment = function (movie) {

            vm.allComments = [];
                console.log(movie.comments);
            vm.allComments.push(movie.comments);
            vm.allComments.push(vm.comments);
            movie.comments = vm.allComments.toString();
            console.log(vm.allComments.toString());

            homeService
                .addCmnt(movie)
                .then(function(data){
                    vm.cmt = data;
                }, function(error) {
                    console.log(error);
                });
            console.dir(vm.allComments);
            console.dir(vm.comments);
        };

        vm.tab=1;
        vm.tab2=1;

        vm.searchGenre = '';
        vm.searchMovie = '';

        vm.sortTitle = '';

        vm.select = function(setTab) {
            //vm.tab = setTab;

            if (setTab === 1)
                vm.searchType = "movie";
            else if (setTab === 2)
                vm.searchType = "series";
            else
                vm.searchType = "";
        }

        vm.select2 = function(setTab2) {
            console.log("in");
            //vm.tab2 = setTab2;

            vm.genere = ["Action","Adventure","Sci-Fi","Thriller","Crime","Drama","Fantasy","Comedy","History","Biography","Mystery","Romance","Western","Animation","Family","Horror","Documentary","News","Talk-Show","War"];

            for(var i=1 ; i<=vm.genere.length; i++){
                if(setTab2 == i){
                    vm.searchGenere = vm.genere[i];
                }
            }
        }

        init();

        function init() {
                homeService.getMovies()
                    .then(function (data) {
                        vm.movies = data;
                        console.log(vm.movies);
                    })
            vm.sorter = {
                    sortBy : 'title'
            };
        }
    } ;

})();
