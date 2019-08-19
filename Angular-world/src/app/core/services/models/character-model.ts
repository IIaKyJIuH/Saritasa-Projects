/**
 * Includes everything to work with character according to the database data.
 */
export class CharacterModel {

    /**
     * Index in the database swapi file.
     */
    public databaseId: number;

    /**
     * Date of birth according to the the Star Wars universe.
     */
    public birthYear: string;

    /**
     * Eye color of the character.
     */
    public eyeColor: string;

    /**
     * Male/Female.
     */
    public gender: string;

    /**
     * Hair color.
     */
    public hairColor: string;

    /**
     * Height of the character, cm.
     */
    public height: number;

    /**
     * Native planet(just index for now) of the character.
     */
    public homeworld: number;

    /**
     * Weight of the character, kg.
     */
    public mass: number;

    /**
     * Character name.
     */
    public name: string;

    /**
     * God knows what this means...........
     */
    public skinColor: string;

    constructor(data: Partial<CharacterModel>) {
        this.databaseId = data.databaseId;
        this.birthYear = data.birthYear;
        this.eyeColor = data.eyeColor;
        this.gender = data.gender;
        this.hairColor = data.hairColor;
        this.height = data.height;
        this.homeworld = data.homeworld;
        this.mass = data.mass;
        this.name = data.name;
        this.skinColor = data.skinColor;
    }
}
