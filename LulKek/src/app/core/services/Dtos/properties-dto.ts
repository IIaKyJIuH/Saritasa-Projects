***REMOVED****
***REMOVED*** Dto for every upper-level item in FireBase database.
***REMOVED***/
export interface PropertiesDto<T> {
***REMOVED*****REMOVED*****REMOVED***
   ***REMOVED*****REMOVED*** Main item properties.
***REMOVED*****REMOVED*****REMOVED***
    fields: T;

***REMOVED*****REMOVED*****REMOVED***
   ***REMOVED*****REMOVED*** Just 'resources.' + item name(e.g. film, people and so on).
***REMOVED*****REMOVED*****REMOVED***
    model: string;

***REMOVED*****REMOVED*****REMOVED***
   ***REMOVED*****REMOVED*** Index(starting with '1') of the object in the database array.
***REMOVED*****REMOVED*****REMOVED***
    pk: number;
}
