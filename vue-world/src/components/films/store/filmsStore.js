import firebase from 'firebase';
import filmsService from '@/core/services/films/films-service';

export default {
  state: {},

  getters: {},

  mutations: {},

  actions: {

    async getFilms() {
      return (await firebase.database()
        .ref('swapi/films').once('value'))
        .val()
        .map((item, index) => filmsService.mapDtoToFilmModel(item.fields, index));
***REMOVED*****REMOVED*****REMOVED***

    async getFilmByIndex(context, payload) {
      const filmDbObject = (await firebase.database()
        .ref(`swapi/films/${payload}`).once('value'))
        .val().fields;
      return filmsService.mapDtoToFilmModel(filmDbObject, payload);
***REMOVED*****REMOVED*****REMOVED***

***REMOVED***
***REMOVED***
