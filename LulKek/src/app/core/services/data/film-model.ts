import { FilmDTO } from './film-dto';

***REMOVED****
***REMOVED*** Model representing films information database.
***REMOVED***/
export class FilmModel {

***REMOVED*****REMOVED*****REMOVED***
   ***REMOVED*****REMOVED*** Title of the film.
***REMOVED*****REMOVED*****REMOVED***
    public title: string;

***REMOVED*****REMOVED*****REMOVED***
   ***REMOVED*****REMOVED*** Indexes that relates to specific character in other table.
***REMOVED*****REMOVED*****REMOVED***
    public characters: Array<number>;

***REMOVED*****REMOVED*****REMOVED***
   ***REMOVED*****REMOVED*** Date when the film was released.
***REMOVED*****REMOVED*****REMOVED***
    public releaseDate: number;

***REMOVED*****REMOVED*****REMOVED***
   ***REMOVED*****REMOVED*** Person, created the film.
***REMOVED*****REMOVED*****REMOVED***
    public director: string;

***REMOVED*****REMOVED*****REMOVED***
   ***REMOVED*****REMOVED*** Number of episode.
***REMOVED*****REMOVED*****REMOVED***
    public episodeId: number;

***REMOVED*****REMOVED*****REMOVED***
   ***REMOVED*****REMOVED*** Indexes for other table represents planets that we could see in this film.
***REMOVED*****REMOVED*****REMOVED***
    public planets: Array<number>;

***REMOVED*****REMOVED*****REMOVED***
   ***REMOVED*****REMOVED*** Indexes for species involved in this film.
***REMOVED*****REMOVED*****REMOVED***
    public species: Array<number>;

***REMOVED*****REMOVED*****REMOVED***
   ***REMOVED*****REMOVED*** Starships indexes from this film for other table.
***REMOVED*****REMOVED*****REMOVED***
    public starships: Array<number>;

***REMOVED*****REMOVED*****REMOVED***
   ***REMOVED*****REMOVED*** Indexes for other table of vehicles participated in this film.
***REMOVED*****REMOVED*****REMOVED***
    public vehicles: Array<number>;

***REMOVED*****REMOVED*****REMOVED***
   ***REMOVED*****REMOVED*** .ctor
   ***REMOVED*****REMOVED*** @param dto - DTO pattern about film for FireBase database.
***REMOVED*****REMOVED*****REMOVED***
    constructor(dto: Partial<FilmDTO>) {
        this.characters = dto.characters;
        this.director = dto.director;
        this.episodeId = dto.episode_id;
        this.planets = dto.planets;
        this.releaseDate = new Date(dto.release_date).getFullYear();
        this.species = dto.species;
        this.starships = dto.starships;
        this.title = dto.title;
        this.vehicles = dto.vehicles;
    }
}
