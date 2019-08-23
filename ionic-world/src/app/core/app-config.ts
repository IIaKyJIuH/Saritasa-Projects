import { environment } from '@/environments/environment';
import { Injectable } from '@angular/core';

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
  public readonly API_KEY = environment.FIREBASE.apiKey;

***REMOVED***
***REMOVED***
***REMOVED***
  public readonly REFRESH_SECURE_TOKEN_URL = environment.REFRESH_SECURE_TOKEN_URL;

}
