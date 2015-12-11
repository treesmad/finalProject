var newMail = '';
function logout(){
    gapi.auth.signOut();
    location.reload();
}

function login(){

  gapi.client.setApiKey('AIzaSyCVggIYbIw4bkHOvunJj8Muwqf6gw9CrzQ');
  gapi.client.load('plus', 'v1',function(){});

  var myParams = {
    'clientid' : '200772488238-3oe49iv349c5mj0g3avld1ch7igip7j5.apps.googleusercontent.com',
    'cookiepolicy' : 'single_host_origin',
    'callback' : 'loginCallback',
    'approvalprompt':'force',
    'scope' : 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.profile.emails.read'
  };
  gapi.auth.signIn(myParams);
  // console.log(res1nse);
}


function loginCallback(result){

    if(result['status']['signed_in']){
        var request = gapi.client.plus.people.get(
        {
            'userId': 'me'
        });
request.execute(function (resp){
    var email = '';
if(resp['emails']){
    for(i = 0; i < resp['emails'].length; i++){
        if(resp['emails'][i]['type'] == 'account')
            {
                email = resp['emails'][i]['value'];
            }
        }
    }

var str = "Signed in as: " + resp['displayName'];
str += " <img src='" + resp['image']['url'] + "' /><br>";
str +=  email + "<br>";
document.getElementById("profile").innerHTML = str;
var link = "<a href='#/app'>Proceed To Home</a>"
document.getElementById("home").innerHTML = link;
newMail = email.substr(0, email.length-10);
// document.getElementById("calendar").src = "https://calendar.google.com/calendar/embed?src=eightpears%40gmail.com&ctz=America/New_York";

  });
}
    console.log(request);

}

function onLoadCallback(){
    gapi.client.setApiKey('AIzaSyCVggIYbIw4bkHOvunJj8Muwqf6gw9CrzQ');
    gapi.client.load('plus', 'v1',function(){});
}

function changeFrame(){
  document.getElementById("calendar").src = "https://calendar.google.com/calendar/embed?src="+ newMail +"%40gmail.com&ctz=America/New_York";
}
