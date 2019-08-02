/**
 * Dto about character from db.
 */
export interface CharacterDto {

    /**
     * Date of birth in the Star wars Universe.
     */
    birth_year: string;

    /**
     * Eye color of the character.
     */
    eye_color: string;

    /**
     * Male/Female.
     */
    gender: string;

    /**
     * Hair color.
     */
    hair_color: string;

    /**
     * Height of the character, cm.
     */
    height: string;

    /**
     * Native planet(just index for now) of the character.
     */
    homeworld: number;

    /**
     * Weight of the character, kg.
     */
    mass: string;

    /**
     * Character name.
     */
    name: string;

    /**
     * God knows, what this means...........
     */
    skin_color: string;

}
