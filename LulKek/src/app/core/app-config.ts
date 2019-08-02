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
  public readonly API_URL = environment.API_URL;

  /**
   * Web-API key of my FireBase Db.
   */
  public readonly API_KEY = environment.firebase.apiKey;

  /**
   * Firebase url related to the uploaded file swapi.json.
   */
  public readonly FIREBASE_SWAPI_URL = environment.firebase.databaseURL + '/swapi';

  /**
   * Url for refreshing secure token and thus the access token.
   */
  public readonly REFRESH_SECURE_TOKEN_URL = environment.REFRESH_SECURE_TOKEN_URL;

}
