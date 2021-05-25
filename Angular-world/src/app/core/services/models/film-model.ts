***REMOVED****
***REMOVED*** Model representing films information database.
***REMOVED***/
export class FilmModel {
***REMOVED***
  ***REMOVED*** Index in the database swapi file.
***REMOVED***
  public databaseId: number;

***REMOVED***
  ***REMOVED*** Title of the film.
***REMOVED***
  public title: string;

***REMOVED***
  ***REMOVED*** Indexes that relates to specific character in other table.
***REMOVED***
  public characters: Array<number>;

***REMOVED***
  ***REMOVED*** Date when the film was released.
***REMOVED***
  public releaseDate: Date;

***REMOVED***
  ***REMOVED*** Person, created the film.
***REMOVED***
  public director: string;

***REMOVED***
  ***REMOVED*** Number of episode.
***REMOVED***
  public episodeId: number;

***REMOVED***
  ***REMOVED*** Indexes for other table represents planets that we could see in this film.
***REMOVED***
  public planets: Array<number>;

***REMOVED***
  ***REMOVED*** Indexes for species involved in this film.
***REMOVED***
  public species: Array<number>;

***REMOVED***
  ***REMOVED*** Starships indexes from this film for other table.
***REMOVED***
  public starships: Array<number>;

***REMOVED***
  ***REMOVED*** Indexes for other table of vehicles participated in this film.
***REMOVED***
  public vehicles: Array<number>;

***REMOVED***
  ***REMOVED*** .ctor
  ***REMOVED*** @param data - Dto pattern about film for FireBase database.
***REMOVED***
  constructor(data: Partial<FilmModel>) {
    this.databaseId = data.databaseId;
    this.characters = data.characters;
    this.director = data.director;
    this.episodeId = data.episodeId;
    this.planets = data.planets;
    this.releaseDate = data.releaseDate;
    this.species = data.species;
    this.starships = data.starships;
    this.title = data.title;
    this.vehicles = data.vehicles;
  }
}
