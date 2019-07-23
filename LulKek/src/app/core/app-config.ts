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
  public API_URL = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty';

  /**
   * Web-API key of my FireBase DB.
   */
  public API_KEY = 'AIzaSyDeTMW8OEatIfvUd2t9cLuNhqZd0XOof0o';
}
