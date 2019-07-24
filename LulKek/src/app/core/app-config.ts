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
  public API_URL = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty';

***REMOVED***
 ***REMOVED*****REMOVED*** Web-API key of my FireBase DB.
***REMOVED***
  public API_KEY = environment.firebase.apiKey;
}
