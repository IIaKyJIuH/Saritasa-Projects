export default class FilmModel {
***REMOVED***
 ***REMOVED*****REMOVED*** The film title.
***REMOVED***
  title;

***REMOVED***
 ***REMOVED*****REMOVED*** The film director.
***REMOVED***
  director;

***REMOVED***
 ***REMOVED*****REMOVED*** The film release year.
***REMOVED***
  releaseDate;

***REMOVED***
 ***REMOVED*****REMOVED*** Characters participated in the film.
***REMOVED***
  characters;

***REMOVED***
 ***REMOVED*****REMOVED*** The database index in the swapi array file.
***REMOVED***
  Id;

  constructor(filmModel) {
    this.characters = filmModel.characters;
    this.director = filmModel.director;
    this.releaseDate = filmModel.releaseDate;
    this.title = filmModel.title;
    this.Id = filmModel.Id;
  }
}
