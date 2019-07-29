***REMOVED****
***REMOVED*** Represents all useful film fields from database.
***REMOVED***/
export interface FilmDTO {

***REMOVED*****REMOVED*****REMOVED***
   ***REMOVED*****REMOVED*** Title of the film.
***REMOVED*****REMOVED*****REMOVED***
    title: string;

***REMOVED*****REMOVED*****REMOVED***
   ***REMOVED*****REMOVED*** Indexes that relates to specific character in other table.
***REMOVED*****REMOVED*****REMOVED***
    characters: number[];

***REMOVED*****REMOVED*****REMOVED***
   ***REMOVED*****REMOVED*** Date when the film was released.
***REMOVED*****REMOVED*****REMOVED***
    release_date: Date;

***REMOVED*****REMOVED*****REMOVED***
   ***REMOVED*****REMOVED*** Person, created the film.
***REMOVED*****REMOVED*****REMOVED***
    director: string;

***REMOVED*****REMOVED*****REMOVED***
   ***REMOVED*****REMOVED*** Number of episode.
***REMOVED*****REMOVED*****REMOVED***
    episode_id: number;

***REMOVED*****REMOVED*****REMOVED***
   ***REMOVED*****REMOVED*** Indexes for other table represents planets that we could see in this film.
***REMOVED*****REMOVED*****REMOVED***
    planets: number[];

***REMOVED*****REMOVED*****REMOVED***
   ***REMOVED*****REMOVED*** Indexes for species involved in this film.
***REMOVED*****REMOVED*****REMOVED***
    species: number[];

***REMOVED*****REMOVED*****REMOVED***
   ***REMOVED*****REMOVED*** Starships indexes from this film for other table.
***REMOVED*****REMOVED*****REMOVED***
    starships: number[];

***REMOVED*****REMOVED*****REMOVED***
   ***REMOVED*****REMOVED*** Indexes for other table of vehicles participated in this film.
***REMOVED*****REMOVED*****REMOVED***
    vehicles: number[];
}
