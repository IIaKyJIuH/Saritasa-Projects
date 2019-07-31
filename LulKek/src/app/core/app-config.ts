import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

/**
 * Application configurations.
 */
@Injectable({
  providedIn: 'root',
})
export class AppConfig {

  /**
   * API URL.
   */
  public API_URL = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty';

  /**
   * Web-API key of my FireBase Db.
   */
  public API_KEY = environment.firebase.apiKey;

  /**
   * Firebase url related to the uploaded file swapi.json.
   */
  public FIREBASE_SWAPI_URL = 'https://proj-0-8c535.firebaseio.com/swapi';
}
