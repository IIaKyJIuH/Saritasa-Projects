import FilmModel from '@/components/films/film-model';

export default {
  mapDtoToFilmModel(dto, index) {
    return new FilmModel({
      characters: dto.characters,
      director: dto.director,
      releaseDate: new Date(dto.release_date).getFullYear(),
      title: dto.title,
      Id: index,
    });
  },
};
