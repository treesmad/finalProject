app.factory('calService', function($http){
var calInfo = {};
  return $http.get('https://www.googleapis.com/calendar/v3/calendars/circuspro21@gmail.com/events?key=AIzaSyCR3-ptjHE-_douJsn8o20oRwkxt-zHStY')

});
