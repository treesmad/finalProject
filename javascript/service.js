var task = "";
var currentDate = new Date();


var bubble = angular.module('bubble',[]);

app.factory('calService', function($http){
  var calInfo = {};
  return $http.get('https://www.googleapis.com/calendar/v3/calendars/cmparkkila@gmail.com/events?key=AIzaSyCVggIYbIw4bkHOvunJj8Muwqf6gw9CrzQ')
//return $http.get('https://www.googleapis.com/calendar/v3/calendars/'+emailPrompt+'@gmail.com/events?key=AIzaSyCVggIYbIw4bkHOvunJj8Muwqf6gw9CrzQ')
    .then(function(data){
      console.log(data);
      console.log(currentDate);
      calInfo = data.data.items;
      var color = '';
      calInfo.forEach(function(event, index){
        
        console.log(new Date(event.start.dateTime) - new Date());
        console.log(new Date(event.start.dateTime) - new Date() < 86400000);

        if(new Date(event.start.dateTime) - new Date() < 86400000){
          color = "red"
        } else {
          color = "blue"
        }

        items.push({
          text: event.summary, 
          count: index, 
          start: event.start.date, 
          color: color 
        });

//      eventDate = event.start.date;
      // console.log(Date.parse(currentDate)); 
  console.log(task);
    });

    task = data.data.items[0].summary;
    console.log(task);
      })
 console.log(currentDate.parse);
});

console.log(currentDate);
// console.log(items); // "undefined"

var items = [
{text:'Haircut',count:'3', start: '2015-12-12', color: "gray"}
];
console.log(task);

function importThings(){

  items[0].text = task;
  items.push({text: task, count: 9});
  console.log(task);
//  console.log(currentDate); "undefined"

}
 console.log(task);