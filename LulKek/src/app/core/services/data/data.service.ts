import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

***REMOVED****
***REMOVED*** Works with DB data.
***REMOVED***/
@Injectable({
  providedIn: 'root',
})
export class DataService {

constructor(
  private http: HttpClient,
) { }

***REMOVED****
***REMOVED*** Getting JSON from DB.
***REMOVED*** @param idToken - user token for getting info from DB.
***REMOVED*** @returns Observable<JSON> that includes DB data.
***REMOVED***/
public getDBData(): Observable<object> {
  return this.http.get(`https://proj-0-8c535.firebaseio.com/swapi.json`);
}

}
