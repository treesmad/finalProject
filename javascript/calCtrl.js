var app = angular.module('aMod');

app.controller('toHome', function($scope){

	var makeApiCall = function (){
	gapi.client.load('calendar', 'v3', function () { // load the calendar api (version 3)
    
    var request = gapi.client.calendar.events.insert({
        'calendarId': 'profile', 
// calendar ID which id of Google Calendar where you are creating events. this can be copied from your Google Calendar user view.

        "resource": resource  // above resource will be passed here
    });    
  });
}           

});