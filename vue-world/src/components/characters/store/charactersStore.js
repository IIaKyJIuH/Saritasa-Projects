import firebase from 'firebase';
import charactersService from '@/core/services/characters/characters-service';

export default {
  state: {},

  getters: {},

  mutations: {},

  actions: {

    async getCharactersByIndexes(context, array) {
      return (await firebase.database()
        .ref('/swapi/people').once('value'))
        .val()
        .map((item, index) => charactersService
          .mapDtoToCharacterModel({ ...item.fields, id: index }))
        .filter(item => array.includes(item.id));
    },

    async getCharacterByIndex(context, payload) {
      const characterDbObject = (await firebase.database()
        .ref(`swapi/people/${payload}`).once('value'))
        .val().fields;
      return charactersService.mapDtoToCharacterModel({ ...characterDbObject, id: payload });
    },

  },
};
