app.factory('calService', function($http){
	var calInfo = {}
	return $http.get('cal link')
		.then(function(data){
			calInfo = data;
			console.log(calInfo);
	})