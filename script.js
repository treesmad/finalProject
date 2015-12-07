var app = angular.module('aMod', ['ng-route']);

app.config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: '/',
    controller: 'aController'
  });

  $routeProvider.when('/loginview.html',{
    templateUrl: 'views/views/loginview.html',
    controller: 'aController'
  });

  $routeProvider.when('/createaccount.html',{
    templateUrl: 'views/createaccount.html',
    controller: 'aController'
  });
