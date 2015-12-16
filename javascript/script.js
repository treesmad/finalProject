var app = angular.module('aMod', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'views/home.html',
    controller: 'aController'
  });

  $routeProvider.when('/app',{
    templateUrl: 'views/app.html',
    controller: 'toHome'
  });

});
