import { FilmDTO } from './film-dto';

/**
 * DTO for every upper-level item in FireBase database.
 */
export interface PropertiesDTO {
    /**
     * Main item properties.
     */
    fields: FilmDTO; // Lately I`ll make it type "| PeopleDTO | PlanetsDTO....."

    /**
     * Just 'resources.' + item name(e.g. film, people and so on).
     */
    model: string;

    /**
     * Index(starting with '1') of the object in the database array.
     */
    pk: number;
}
