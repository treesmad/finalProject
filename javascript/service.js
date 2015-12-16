var task = "";
// var currentDate = "";

var bubble = angular.module('bubble',[]);

app.factory('calService', function($http){
//  var emailPrompt = prompt("Enter your Google account name.");
//  while(newmail!=undefined){
    return $http.get('https://www.googleapis.com/calendar/v3/calendars/eightpears@gmail.com/events?key=AIzaSyCVggIYbIw4bkHOvunJj8Muwqf6gw9CrzQ')
    //return $http.get('https://www.googleapis.com/calendar/v3/calendars/'+emailPrompt+'@gmail.com/events?key=AIzaSyCVggIYbIw4bkHOvunJj8Muwqf6gw9CrzQ')
    .then(function(data){
        console.log(data);
        calInfo = data.data.items;
        calInfo.forEach(function(event, index){
          items.push({text: event.summary, count: index, start: event.start.date});
    });
    task = data.data.items[0].summary;
//    currentDate = $scope.getDatetime = new Date();
    })
//  }
});

console.log(currentDate);

var items = [
{text:'Haircut',count:'3', start: '2015-12-12'}
];


function importThings(){

  items[0].text = task;
  items.push({text: task, count: 9});
  console.log(task);
}
