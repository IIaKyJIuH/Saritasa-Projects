import firebase from 'firebase';
import FilmModel from '@/core/models/film-model';

export default {

  async getFilms() {
    return (await firebase.database()
      .ref('swapi/films').once('value'))
      .val()
      .map((item, index) => this.mapDtoToFilmModel({ ...item.fields, id: index }));
  },

  async getFilmByIndex(payload) {
    const filmDbObject = (await firebase.database()
      .ref(`swapi/films/${payload}/fields`).once('value'))
      .val();
    return this.mapDtoToFilmModel({ ...filmDbObject, id: payload });
  },

  async updateFilm({ id, newFilm }) {
    await firebase.database()
      .ref(`swapi/films/${id}/fields`)
      .update(this.mapFilmModelToDto(newFilm));
  },

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
