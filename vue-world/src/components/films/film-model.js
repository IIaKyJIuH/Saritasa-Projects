export default class FilmModel {
  /**
   * The film title.
   */
  title;

  /**
   * The film director.
   */
  director;

  /**
   * The film release year.
   */
  releaseDate;

  /**
   * Characters participated in the film.
   */
  characters;

  /**
   * The database index in the swapi array file.
   */
  id;

  constructor(filmModel) {
    this.characters = filmModel.characters;
    this.director = filmModel.director;
    this.releaseDate = filmModel.releaseDate;
    this.title = filmModel.title;
    this.id = filmModel.id;
  }
}
