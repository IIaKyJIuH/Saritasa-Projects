import firebase from 'firebase';
import CharacterModel from '@/components/characters/character-model';

export default {
  state: {},

  getters: {},

  mutations: {},

  actions: {

    async getCharactersByIndexes(context, array) {
      return (await firebase.database()
        .ref('/swapi/people').once('value'))
        .val()
        .map((item, index) => new CharacterModel(item.fields, index))
        .filter(item => array.includes(item.databaseId));
***REMOVED*****REMOVED*****REMOVED***

    async getCharacterByIndex(context, payload) {
      const characterDbObject = (await firebase.database()
        .ref(`swapi/people/${payload}`).once('value'))
        .val().fields;
      return new CharacterModel(characterDbObject, payload);
***REMOVED*****REMOVED*****REMOVED***

***REMOVED***
***REMOVED***
