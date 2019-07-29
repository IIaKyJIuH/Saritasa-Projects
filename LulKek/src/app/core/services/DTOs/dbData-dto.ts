import { CharacterDTO } from './character-dto';
import { FilmDTO } from './film-dto';
import { PlanetDTO } from './planet-dto';
import { PropertiesDTO } from './properties-dto';
import { SpeciesDTO } from './species-dto';
import { StarshipDTO } from './starship-dto';
import { TransportDTO } from './transport-dto';
import { VehicleDTO } from './vehicle-dto';

/**
 * Database dto for json file.
 */
export interface DbDataDto {
    /**
     * array with all information about films.
     */
    films: PropertiesDTO<FilmDTO>[];

    /**
     * array with all info about people from the films.
     */
    people: PropertiesDTO<CharacterDTO>[];

    /**
     * array with all info about planets from the films.
     */
    planets: PropertiesDTO<PlanetDTO>[];

    /**
     * array with all info about species from the films.
     */
    species: PropertiesDTO<SpeciesDTO>[];

    /**
     * array with all info about starships from the films.
     */
    starships: PropertiesDTO<StarshipDTO>[];

    /**
     * array with all info about transport from the films.
     */
    transport: PropertiesDTO<TransportDTO>[];

    /**
     * array with all info about vehicles from the films.
     */
    vehicles: PropertiesDTO<VehicleDTO>[];
}
