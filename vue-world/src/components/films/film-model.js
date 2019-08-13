export default class FilmModel {
***REMOVED***
  ***REMOVED*** The film title.
***REMOVED***
  title;

***REMOVED***
  ***REMOVED*** The film director.
***REMOVED***
  director;

***REMOVED***
  ***REMOVED*** The film release year.
***REMOVED***
  releaseDate;

***REMOVED***
  ***REMOVED*** Characters participated in the film.
***REMOVED***
  characters;

***REMOVED***
  ***REMOVED*** The database index in the swapi array file.
***REMOVED***
  id;

***REMOVED***
  ***REMOVED*** Number of the episode.
***REMOVED***
  episodeId;

  constructor(filmModel) {
    this.characters = filmModel.characters;
    this.director = filmModel.director;
    this.releaseDate = filmModel.releaseDate;
    this.title = filmModel.title;
    this.id = filmModel.id;
    this.episodeId = filmModel.episodeId;
  }
}
