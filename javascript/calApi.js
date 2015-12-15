// Google api console clientID and apiKey

 var clientId = '200772488238-3oe49iv349c5mj0g3avld1ch7igip7j5.apps.googleusercontent.com';
 var apiKey = 'AIzaSyCVggIYbIw4bkHOvunJj8Muwqf6gw9CrzQ';

 // enter the scope of current project (this API must be turned on in the Google console)
   var scopes = 'https://www.googleapis.com/auth/calendar';


// OAuth2 functions
     function handleClientLoad() {
           gapi.client.setApiKey(apiKey);
           window.setTimeout(checkAuth, 1);
        }

//To authenticate
  function checkAuth() {
    gapi.auth.authorize({ client_id: clientId, scope: scopes, immediate: true }, handleAuthResult);
        }
