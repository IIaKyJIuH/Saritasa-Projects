import { CharacterDTO } from './character-dto';
import { FilmDTO } from './film-dto';
import { PlanetDTO } from './planet-dto';
import { PropertiesDTO } from './properties-dto';
import { SpeciesDTO } from './species-dto';
import { StarshipDTO } from './starship-dto';
import { TransportDTO } from './transport-dto';
import { VehicleDTO } from './vehicle-dto';

***REMOVED****
***REMOVED*** Database dto for json file.
***REMOVED***/
export interface DbDataDto {
***REMOVED*****REMOVED*****REMOVED***
   ***REMOVED*****REMOVED*** array with all information about films.
***REMOVED*****REMOVED*****REMOVED***
    films: PropertiesDTO<FilmDTO>[];

***REMOVED*****REMOVED*****REMOVED***
   ***REMOVED*****REMOVED*** array with all info about people from the films.
***REMOVED*****REMOVED*****REMOVED***
    people: PropertiesDTO<CharacterDTO>[];

***REMOVED*****REMOVED*****REMOVED***
   ***REMOVED*****REMOVED*** array with all info about planets from the films.
***REMOVED*****REMOVED*****REMOVED***
    planets: PropertiesDTO<PlanetDTO>[];

***REMOVED*****REMOVED*****REMOVED***
   ***REMOVED*****REMOVED*** array with all info about species from the films.
***REMOVED*****REMOVED*****REMOVED***
    species: PropertiesDTO<SpeciesDTO>[];

***REMOVED*****REMOVED*****REMOVED***
   ***REMOVED*****REMOVED*** array with all info about starships from the films.
***REMOVED*****REMOVED*****REMOVED***
    starships: PropertiesDTO<StarshipDTO>[];

***REMOVED*****REMOVED*****REMOVED***
   ***REMOVED*****REMOVED*** array with all info about transport from the films.
***REMOVED*****REMOVED*****REMOVED***
    transport: PropertiesDTO<TransportDTO>[];

***REMOVED*****REMOVED*****REMOVED***
   ***REMOVED*****REMOVED*** array with all info about vehicles from the films.
***REMOVED*****REMOVED*****REMOVED***
    vehicles: PropertiesDTO<VehicleDTO>[];
}
