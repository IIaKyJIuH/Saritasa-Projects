// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDeTMW8OEatIfvUd2t9cLuNhqZd0XOof0o',
    authDomain: 'proj-0-8c535.firebaseapp.com',
    databaseURL: 'https://proj-0-8c535.firebaseio.com',
    projectId: 'proj-0-8c535',
    storageBucket: '',
    messagingSenderId: '723491458215',
    appId: '1:723491458215:web:1d08848d53c81a57',
  },
  /**
   * API URL.
   */
  API_URL: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty',

  /**
   * Url for refreshing secure token and thus the access token.
   */
  REFRESH_SECURE_TOKEN_URL: 'https://securetoken.googleapis.com/v1/token',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
