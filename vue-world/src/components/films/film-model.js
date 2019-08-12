export default class FilmModel {
  title;

  director;

  releaseDate;

  characters;

  databaseId;

  constructor(dbData, index) {
    this.characters = dbData.characters;
    this.director = dbData.director;
    this.releaseDate = new Date(dbData.release_date).getFullYear();
    this.title = dbData.title;
    this.databaseId = index;
  }
}
