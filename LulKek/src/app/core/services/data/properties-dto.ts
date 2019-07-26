import { FilmDTO } from './film-dto';

***REMOVED****
***REMOVED*** DTO for every upper-level item in FireBase database.
***REMOVED***/
export interface PropertiesDTO {
***REMOVED*****REMOVED*****REMOVED***
   ***REMOVED*****REMOVED*** Main item properties.
***REMOVED*****REMOVED*****REMOVED***
    fields: FilmDTO; // Lately I`ll make it type "| PeopleDTO | PlanetsDTO....."

***REMOVED*****REMOVED*****REMOVED***
   ***REMOVED*****REMOVED*** Just 'resources.' + item name(e.g. film, people and so on).
***REMOVED*****REMOVED*****REMOVED***
    model: string;

***REMOVED*****REMOVED*****REMOVED***
   ***REMOVED*****REMOVED*** Index(starting with '1') of the object in the database array.
***REMOVED*****REMOVED*****REMOVED***
    pk: number;
}
