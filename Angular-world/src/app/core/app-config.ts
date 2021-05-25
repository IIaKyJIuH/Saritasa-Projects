import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

***REMOVED****
***REMOVED*** Application configurations.
***REMOVED***/
@Injectable({
  providedIn: 'root',
})
export class AppConfig {
***REMOVED***
***REMOVED***
***REMOVED***
  public readonly API_URL = environment.API_URL;

***REMOVED***
  ***REMOVED*** Web-API key of my FireBase Db.
***REMOVED***
  public readonly API_KEY = environment.firebase.apiKey;

***REMOVED***
  ***REMOVED*** Firebase url related to the uploaded file swapi.json.
***REMOVED***
  public readonly FIREBASE_SWAPI_URL =
    environment.firebase.databaseURL + '/swapi';

***REMOVED***
***REMOVED***
***REMOVED***
  public readonly REFRESH_SECURE_TOKEN_URL =
    environment.REFRESH_SECURE_TOKEN_URL;
}
