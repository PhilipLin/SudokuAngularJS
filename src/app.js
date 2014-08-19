var app = angular.module('sudokuApp',['ngRoute']);


app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/sudoku', {
        templateUrl : 'views/sudoku.html',
        //controller: 'sudokuCtrl'
      }).
      otherwise({
        redirectTo : '/sudoku'
      });
  }]);