***REMOVED****
***REMOVED*** Dto for every upper-level item in FireBase database.
***REMOVED***/
export interface PropertiesDto<T> {
***REMOVED***
  ***REMOVED*** Main item properties.
***REMOVED***
  fields: T;

***REMOVED***
  ***REMOVED*** Just 'resources.' + item name(e.g. film, people and so on).
***REMOVED***
  model: string;

***REMOVED***
  ***REMOVED*** Index(starting with '1') of the object in the database array.
***REMOVED***
  pk: number;
}
