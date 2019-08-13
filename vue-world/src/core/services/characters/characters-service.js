import CharacterModel from '@/components/characters/character-model';

export default {
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
