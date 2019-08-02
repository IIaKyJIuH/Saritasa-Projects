/**
 * Dto for every upper-level item in FireBase database.
 */
export interface PropertiesDto<T> {

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
