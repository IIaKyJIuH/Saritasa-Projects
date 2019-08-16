import firebase from 'firebase';
import CharacterModel from '@/core/models/character-model';

export default {

  async getCharactersByIndexes(array) {
    return (await firebase.database()
      .ref('/swapi/people').once('value'))
      .val()
      .map((item, index) => this.mapDtoToCharacterModel({ ...item.fields, id: index }))
      .filter((item) => array.includes(item.id));
***REMOVED***

  async getCharacterByIndex(payload) {
    const characterDbObject = (await firebase.database()
      .ref(`swapi/people/${payload}`).once('value'))
      .val().fields;
    return this.mapDtoToCharacterModel({ ...characterDbObject, id: payload });
***REMOVED***

  mapDtoToCharacterModel({
    birth_year, eye_color, gender, hair_color, height, homeworld, mass, name, skin_color, id,
  }) {
    return new CharacterModel({
      id,
      birthYear: birth_year,
      eyeColor: eye_color,
      gender,
      hairColor: hair_color,
      height,
      homeworld,
      mass,
      name,
      skinColor: skin_color,
    });
***REMOVED***
***REMOVED***
