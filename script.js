var app = angular.module('aMod', ['ngRoute']);
//changes views on main login page
app.config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'views/home.html',
    controller: 'aController'
  });

  $routeProvider.when('/loginview',{
    templateUrl: 'views/loginview.html',
    controller: 'aController'
  });

  $routeProvider.when('/createaccount',{
    templateUrl: 'views/createaccount.html',
    controller: 'aController'
  });
});
