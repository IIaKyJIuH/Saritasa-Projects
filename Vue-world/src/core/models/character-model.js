export default class FilmModel {
  /**
     * Index in the database swapi file.
     */
    id;

    /**
     * Date of birth according to the the Star Wars universe.
     */
    birthYear;

    /**
     * Eye color of the character.
     */
    eyeColor;

    /**
     * Male/Female.
     */
    gender;

    /**
     * Hair color.
     */
    hairColor;

    /**
     * Height of the character, cm.
     */
    height;

    /**
     * Native planet(just index for now).
     */
    homeworld;

    /**
     * Weight of the character, kg.
     */
    mass;

    /**
     * Character name.
     */
    name;

    /**
     * Name of skin color.
     */
    skinColor;

    constructor(characterModel) {
      this.id = characterModel.id;
      this.birthYear = characterModel.birthYear;
      this.eyeColor = characterModel.eyeColor;
      this.gender = characterModel.gender;
      this.hairColor = characterModel.hairColor;
      this.height = characterModel.height;
      this.homeworld = characterModel.homeworld;
      this.mass = characterModel.mass;
      this.name = characterModel.name;
      this.skinColor = characterModel.skinColor;
    }
}
