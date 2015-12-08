app.controller('aController', function($scope){
  });

app.config('toHome', function($routeProvider){
	$routeProvider.when("/app",
	{
		templateUrl: "app.html",
		controller: "ctrlInput"
	})
});