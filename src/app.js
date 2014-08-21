var app = angular.module('sudokuApp',['ngRoute']);


app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl : 'views/home.html',
        //controller: 'sudokuCtrl'
      }).
      when('/sudoku', {
        templateUrl : 'views/sudoku.html',
        controller: 'sudokuCtrl'
        //console.log($routeProvider.controller);
      }).
      otherwise({
        redirectTo : '/home'
      });
  }]);