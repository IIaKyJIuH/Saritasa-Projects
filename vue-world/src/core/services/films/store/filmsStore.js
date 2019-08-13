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
        .map((item, index) => filmsService.mapDtoToFilmModel({ ...item.fields, id: index }));
***REMOVED*****REMOVED*****REMOVED***

    async getFilmByIndex(context, payload) {
      const filmDbObject = (await firebase.database()
        .ref(`swapi/films/${payload}/fields`).once('value'))
        .val();
      return filmsService.mapDtoToFilmModel({ ...filmDbObject, id: payload });
***REMOVED*****REMOVED*****REMOVED***

    async updateFilm(context, { id, newFilm }) {
      await firebase.database()
        .ref(`swapi/films/${id}/fields`)
        .update(filmsService.mapFilmModelToDto(newFilm));
***REMOVED*****REMOVED*****REMOVED***

***REMOVED***
***REMOVED***
