import FilmModel from '@/components/films/film-model';

export default {
  mapDtoToFilmModel({
    characters, director, release_date, title, id,
  }) {
    return new FilmModel({
      characters,
      director,
      releaseDate: new Date(release_date).getFullYear(),
      title,
      id,
    });
***REMOVED***
***REMOVED***
