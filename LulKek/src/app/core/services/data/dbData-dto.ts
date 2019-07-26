import { PropertiesDTO } from './properties-dto';

/**
 * Database dto for json file.
 */
export interface DbDataDto {
    /**
     * array with all information about films.
     */
    films: Array<PropertiesDTO>;

    /**
     * array with all info about people from the films.
     */
    people: Array<PropertiesDTO>;

    /**
     * array with all info about planets from the films.
     */
    planets: Array<PropertiesDTO>;

    /**
     * array with all info about species from the films.
     */
    species: Array<PropertiesDTO>;

    /**
     * array with all info about starships from the films.
     */
    starships: Array<PropertiesDTO>;

    /**
     * array with all info about transport from the films.
     */
    transport: Array<PropertiesDTO>;

    /**
     * array with all info about vehicles from the films.
     */
    vehicles: Array<PropertiesDTO>;
}
