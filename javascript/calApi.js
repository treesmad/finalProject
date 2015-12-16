var clientId = '200772488238-3oe49iv349c5mj0g3avld1ch7igip7j5.apps.googleusercontent.com';
var apiKey = 'AIzaSyCVggIYbIw4bkHOvunJj8Muwqf6gw9CrzQ';

var scopes = 'https://www.googleapis.com/auth/calendar';

function handleClientLoad() {
    gapi.client.setApiKey(apiKey);
    window.setTimeout(checkAuth, 1);
}

function checkAuth() {
    gapi.auth.authorize({ client_id: clientId, scope: scopes, immediate: true }, handleAuthResult);
}
