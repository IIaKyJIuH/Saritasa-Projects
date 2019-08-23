import { environment } from '@/environments/environment';
import { Injectable } from '@angular/core';

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
  public readonly API_KEY = environment.FIREBASE.apiKey;

  /**
   * Url for refreshing secure token and thus the access token.
   */
  public readonly REFRESH_SECURE_TOKEN_URL = environment.REFRESH_SECURE_TOKEN_URL;

}
