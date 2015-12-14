app.controller('aController', function($scope){
   });


   var items = [
     {text: "One", count: "236"},
     {text: "Two", count: "382"},
     {text: "Three", count: "170"},
     {text: "Four", count: "123"},
     {text: "Five", count: "3"},
     {text: "Six", count: "170"},
     {text: "Seven", count: "382"},
     {text: "Eight", count: "10"},
     {text: "Nine", count: "170"},
   ];


app.controller('toHome', function($scope){
  $scope.changeBubble = function(){
    items[0].text = $scope.bubbleOne;
    console.log(items[0].text);
  }
  $scope.changeBubble2 = function(){
    items[1].text = $scope.bubbleTwo;
    console.log(items[1].text);
  }
  $scope.changeBubble3 = function(){
    items[2].text = $scope.bubbleThree;
    console.log(items[2].text);
  }
  $scope.changeBubble4 = function(){
    items[3].text = $scope.bubbleFour;
    console.log(items[3].text);
  }
  $scope.changeBubble5 = function(){
    items[4].text = $scope.bubbleFive;
    console.log(items[4].text);
  }
  $scope.changeBubble6 = function(){
    items[5].text = $scope.bubbleSix;
    console.log(items[5].text);
  }
  $scope.changeBubble7 = function(){
    items[6].text = $scope.bubbleSeven;
    console.log(items[6].text);
  }
  $scope.changeBubble8 = function(){
    items[7].text = $scope.bubbleEight;
    console.log(items[7].text);
  }
  $scope.changeBubble9 = function(){
    items[8].text = $scope.bubbleNine;
    console.log(items[8].text);
  }
});

//  app.config('toHome', function($routeProvider){
//  	$routeProvider.when("/app",
//  	{
//  		templateUrl: "app.html",
// 		controller: "toHome"
//  	})
// });
// })
