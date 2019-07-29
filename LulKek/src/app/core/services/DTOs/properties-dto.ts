import { FilmDTO } from './film-dto';

/**
 * DTO for every upper-level item in FireBase database.
 */
export interface PropertiesDTO<T> {
    /**
     * Main item properties.
     */
    fields: T;

    /**
     * Just 'resources.' + item name(e.g. film, people and so on).
     */
    model: string;

    /**
     * Index(starting with '1') of the object in the database array.
     */
    pk: number;
}
