import CharacterModel from '@/components/characters/character-model';

export default {
  mapDtoToCharacterModel(dto, index) {
    return new CharacterModel({
      Id: index,
      birthYear: dto.birth_year,
      eyeColor: dto.eye_color,
      gender: dto.gender,
      hairColor: dto.hair_color,
      height: dto.height,
      homeworld: dto.homeworld,
      mass: dto.mass,
      name: dto.name,
      skinColor: dto.skin_color,
    });
  },
};
