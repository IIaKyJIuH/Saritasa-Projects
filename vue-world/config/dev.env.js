const merge = require('webpack-merge');
const prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {

  NODE_ENV: '"development"',

  // For initializing firebase app
  FIREBASE_PARAMETERS: {
    apiKey: '"AIzaSyDeTMW8OEatIfvUd2t9cLuNhqZd0XOof0o"',
    authDomain: '"proj-0-8c535.firebaseapp.com"',
    databaseURL: '"https://proj-0-8c535.firebaseio.com"',
    projectId: '"proj-0-8c535"',
    storageBucket: '"proj-0-8c535.appspot.com"',
    messagingSenderId: '"723491458215"',
    appId: '"1:723491458215:web:1d08848d53c81a57"',
***REMOVED***

  // For "get" requests to firebase
  API_URL: '"https://www.googleapis.com/identitytoolkit/v3/relyingparty"',

  // For refreshing both access and secure tokens
  REFRESH_SECURE_TOKEN_URL: '"https://securetoken.googleapis.com/v1/token"',

});
