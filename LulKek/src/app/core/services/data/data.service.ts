import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * Works with DB data.
 */
@Injectable({
  providedIn: 'root',
})
export class DataService {

constructor(
  private http: HttpClient,
) { }

/**
 * Getting JSON from DB.
 * @param idToken - user token for getting info from DB.
 * @returns Observable<JSON> that includes DB data.
 */
public getDBData(): Observable<object> {
  return this.http.get(`https://proj-0-8c535.firebaseio.com/swapi.json`);
}

}
