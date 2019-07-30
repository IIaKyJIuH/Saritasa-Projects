import { CharacterDto } from './character-dto';
import { FilmDto } from './film-dto';
import { PlanetDto } from './planet-dto';
import { PropertiesDto } from './properties-dto';
import { SpeciesDto } from './species-dto';
import { StarshipDto } from './starship-dto';
import { TransportDto } from './transport-dto';
import { VehicleDto } from './vehicle-dto';

***REMOVED****
***REMOVED*** Database dto for json file.
***REMOVED***/
export interface DbDataDto {
***REMOVED*****REMOVED*****REMOVED***
   ***REMOVED*****REMOVED*** array with all information about films.
***REMOVED*****REMOVED*****REMOVED***
    films: PropertiesDto<FilmDto>[];

***REMOVED*****REMOVED*****REMOVED***
   ***REMOVED*****REMOVED*** array with all info about people from the films.
***REMOVED*****REMOVED*****REMOVED***
    people: PropertiesDto<CharacterDto>[];

***REMOVED*****REMOVED*****REMOVED***
   ***REMOVED*****REMOVED*** array with all info about planets from the films.
***REMOVED*****REMOVED*****REMOVED***
    planets: PropertiesDto<PlanetDto>[];

***REMOVED*****REMOVED*****REMOVED***
   ***REMOVED*****REMOVED*** array with all info about species from the films.
***REMOVED*****REMOVED*****REMOVED***
    species: PropertiesDto<SpeciesDto>[];

***REMOVED*****REMOVED*****REMOVED***
   ***REMOVED*****REMOVED*** array with all info about starships from the films.
***REMOVED*****REMOVED*****REMOVED***
    starships: PropertiesDto<StarshipDto>[];

***REMOVED*****REMOVED*****REMOVED***
   ***REMOVED*****REMOVED*** array with all info about transport from the films.
***REMOVED*****REMOVED*****REMOVED***
    transport: PropertiesDto<TransportDto>[];

***REMOVED*****REMOVED*****REMOVED***
   ***REMOVED*****REMOVED*** array with all info about vehicles from the films.
***REMOVED*****REMOVED*****REMOVED***
    vehicles: PropertiesDto<VehicleDto>[];
}
