/**
 * Represents all useful film fields from database.
 */
export interface FilmDto {

    /**
     * Title of the film.
     */
    title: string;

    /**
     * Indexes that relates to specific character in other table.
     */
    characters: number[];

    /**
     * Date when the film was released.
     */
    release_date: Date;

    /**
     * Person, created the film.
     */
    director: string;

    /**
     * Number of episode.
     */
    episode_id: number;

    /**
     * Indexes for other table represents planets that we could see in this film.
     */
    planets: number[];

    /**
     * Indexes for species involved in this film.
     */
    species: number[];

    /**
     * Starships indexes from this film for other table.
     */
    starships: number[];

    /**
     * Indexes for other table of vehicles participated in this film.
     */
    vehicles: number[];

}
