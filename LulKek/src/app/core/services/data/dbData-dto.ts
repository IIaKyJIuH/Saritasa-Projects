import { PropertiesDTO } from './properties-dto';

/**
 * Database dto for json file.
 */
export interface DbDataDto {
    /**
     * array with all information about films.
     */
    films: PropertiesDTO[];

    /**
     * array with all info about people from the films.
     */
    people: PropertiesDTO[];

    /**
     * array with all info about planets from the films.
     */
    planets: PropertiesDTO[];

    /**
     * array with all info about species from the films.
     */
    species: PropertiesDTO[];

    /**
     * array with all info about starships from the films.
     */
    starships: PropertiesDTO[];

    /**
     * array with all info about transport from the films.
     */
    transport: PropertiesDTO[];

    /**
     * array with all info about vehicles from the films.
     */
    vehicles: PropertiesDTO[];
}
