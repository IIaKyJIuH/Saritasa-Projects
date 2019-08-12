import firebase from 'firebase';
import FilmModel from '../film-model';

export default {
  state: {

  },

  getters: {

  },

  mutations: {


  },

  actions: {

    async getFilms() {
      return (await firebase.database()
        .ref('/swapi/films').once('value'))
        .val()
        .map((item, index) => new FilmModel(item.fields, index));
    },

    // eslint-disable-next-line no-unused-vars
    async getFilmByIndex(context, payload) {
      const filmDbObject = (await firebase.database()
        .ref(`swapi/films/${payload}`).once('value'))
        .val().fields;
      return new FilmModel(filmDbObject, payload);
    },

  },
};
