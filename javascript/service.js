var newTask = "";
var task = "";

app.factory('calService', function($http){
var calInfo = {};
return $http.get('https://www.googleapis.com/calendar/v3/calendars/eightpears@gmail.com/events?key=AIzaSyCR3-ptjHE-_douJsn8o20oRwkxt-zHStY')
  .then(function(data){
    calInfo = data;
    newTask = data.data.items[0].summary;
  })
});

var items = [
  {text: " ", count: "0"},
  {text: "   ", count: "1"},
  {text: "    ", count: "2"},
  {text: "     ", count: "3"},
  {text: "      ", count: "4"},
  {text: "       ", count: "5"},
  {text: "        ", count: "6"},
  {text: "         ", count: "7"},
  {text: "          ", count: "8"},
];


function importThings(){
  task = newTask;
  items[0].text = task;
  console.log(task);
  }
