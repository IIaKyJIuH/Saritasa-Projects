import { FilmDTO } from './film-dto';

/**
 * Model representing films information database.
 */
export class FilmModel {

    /**
     * Title of the film.
     */
    public title: string;

    /**
     * Indexes that relates to specific character in other table.
     */
    public characters: Array<number>;

    /**
     * Date when the film was released.
     */
    public releaseDate: number;

    /**
     * Person, created the film.
     */
    public director: string;

    /**
     * Number of episode.
     */
    public episodeId: number;

    /**
     * Indexes for other table represents planets that we could see in this film.
     */
    public planets: Array<number>;

    /**
     * Indexes for species involved in this film.
     */
    public species: Array<number>;

    /**
     * Starships indexes from this film for other table.
     */
    public starships: Array<number>;

    /**
     * Indexes for other table of vehicles participated in this film.
     */
    public vehicles: Array<number>;

    /**
     * .ctor
     * @param dto - DTO pattern about film for FireBase database.
     */
    constructor(dto: Partial<FilmDTO>) {
        this.characters = dto.characters;
        this.director = dto.director;
        this.episodeId = dto.episode_id;
        this.planets = dto.planets;
        this.releaseDate = new Date(dto.release_date).getFullYear();
        this.species = dto.species;
        this.starships = dto.starships;
        this.title = dto.title;
        this.vehicles = dto.vehicles;
    }
}
