import { CharacterDto } from './character-dto';
import { FilmDto } from './film-dto';
import { PlanetDto } from './planet-dto';
import { PropertiesDto } from './properties-dto';
import { SpeciesDto } from './species-dto';
import { StarshipDto } from './starship-dto';
import { TransportDto } from './transport-dto';
import { VehicleDto } from './vehicle-dto';

/**
 * Database dto for json file.
 */
export interface DbDataDto {
    /**
     * array with all information about films.
     */
    films: PropertiesDto<FilmDto>[];

    /**
     * array with all info about people from the films.
     */
    people: PropertiesDto<CharacterDto>[];

    /**
     * array with all info about planets from the films.
     */
    planets: PropertiesDto<PlanetDto>[];

    /**
     * array with all info about species from the films.
     */
    species: PropertiesDto<SpeciesDto>[];

    /**
     * array with all info about starships from the films.
     */
    starships: PropertiesDto<StarshipDto>[];

    /**
     * array with all info about transport from the films.
     */
    transport: PropertiesDto<TransportDto>[];

    /**
     * array with all info about vehicles from the films.
     */
    vehicles: PropertiesDto<VehicleDto>[];
}
