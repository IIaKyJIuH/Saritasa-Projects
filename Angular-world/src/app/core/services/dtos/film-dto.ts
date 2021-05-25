***REMOVED****
***REMOVED*** Represents all useful film fields from database.
***REMOVED***/
export interface FilmDto {
***REMOVED***
  ***REMOVED*** Title of the film.
***REMOVED***
  title: string;

***REMOVED***
  ***REMOVED*** Indexes that relates to specific character in other table.
***REMOVED***
  characters: number[];

***REMOVED***
  ***REMOVED*** Date when the film was released.
***REMOVED***
  release_date: Date;

***REMOVED***
  ***REMOVED*** Person, created the film.
***REMOVED***
  director: string;

***REMOVED***
  ***REMOVED*** Number of episode.
***REMOVED***
  episode_id: number;

***REMOVED***
  ***REMOVED*** Indexes for other table represents planets that we could see in this film.
***REMOVED***
  planets: number[];

***REMOVED***
  ***REMOVED*** Indexes for species involved in this film.
***REMOVED***
  species: number[];

***REMOVED***
  ***REMOVED*** Starships indexes from this film for other table.
***REMOVED***
  starships: number[];

***REMOVED***
  ***REMOVED*** Indexes for other table of vehicles participated in this film.
***REMOVED***
  vehicles: number[];
}
