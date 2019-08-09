import firebase from 'firebase';
import dbIndexService from '../../services/dbIndexService';

export default {
  state: {

***REMOVED***

  getters: {

***REMOVED***

  mutations: {


***REMOVED***

  actions: {

    async getFilms() {
      return (await firebase.database()
        .ref('/swapi/films').once('value'))
        .val()
        .map((item, index) => dbIndexService.addIndexToDbObject(item, index));
***REMOVED*****REMOVED*****REMOVED***

    // eslint-disable-next-line no-unused-vars
    async getFilmByIndex(context, payload) {
      return (await firebase.database()
        .ref(`swapi/films/${payload}`).once('value'))
        .val().fields;
***REMOVED*****REMOVED*****REMOVED***

***REMOVED***
***REMOVED***
