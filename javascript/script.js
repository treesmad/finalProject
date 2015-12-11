var app = angular.module('aMod', ['ngRoute']);

//changes views on main login page
app.config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'views/home.html',
    controller: 'aController'
  });

  $routeProvider.when('/loginview',{
    templateUrl: 'views/loginview.html',
    controller: 'bController'
  });

  $routeProvider.when('/createaccount',{
    templateUrl: 'views/createaccount.html',
    controller: 'cController'
  });

  $routeProvider.when('/app',{
    templateUrl: 'views/app.html',
    controller: 'toHome'
  });
  // $routeProvider.when('/dataview', {
  //   templateUrl: 'dataview.html',
  //   controller: 'aController'
  // });
});
