import { PropertiesDTO } from './properties-dto';

/**
 * Database dto for json file.
 */
export interface DbDataDto {
    films: Array<PropertiesDTO>;
    people: Array<PropertiesDTO>;
    planets: Array<PropertiesDTO>;
    species: Array<PropertiesDTO>;
    starships: Array<PropertiesDTO>;
    transport: Array<PropertiesDTO>;
    vehicles: Array<PropertiesDTO>;
}
