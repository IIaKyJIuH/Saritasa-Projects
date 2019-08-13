import FilmModel from '@/components/films/film-model';

export default {
  mapDtoToFilmModel({
    characters, director, release_date, title, id, episode_id,
  }) {
    return new FilmModel({
      characters,
      director,
      releaseDate: new Date(release_date).getFullYear(),
      title,
      id,
      episodeId: episode_id,
    });
  },

  mapFilmModelToDto({
    characters, director, releaseDate, title, episodeId,
  }) {
    return {
      title,
      characters,
      episode_id: episodeId,
      release_date: releaseDate,
      director,
    };
  },
};
