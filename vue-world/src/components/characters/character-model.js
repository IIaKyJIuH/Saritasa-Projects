export default class FilmModel {
  /**
     * Index in the database swapi file.
     */
    databaseId;

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
     * Native planet(just index for now) of the character.
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
     * God knows what this means...........
     */
    skinColor;

    constructor(dbData, index) {
      this.databaseId = index;
      this.birthYear = dbData.birth_year;
      this.eyeColor = dbData.eye_color;
      this.gender = dbData.gender;
      this.hairColor = dbData.hair_color;
      this.height = dbData.height;
      this.homeworld = dbData.homeworld;
      this.mass = dbData.mass;
      this.name = dbData.name;
      this.skinColor = dbData.skin_color;
    }
}
