export default class FilmModel {
***REMOVED***
    ***REMOVED*** Index in the database swapi file.
 ***REMOVED*****REMOVED***
    id;

 ***REMOVED*****REMOVED***
    ***REMOVED*** Date of birth according to the the Star Wars universe.
 ***REMOVED*****REMOVED***
    birthYear;

 ***REMOVED*****REMOVED***
    ***REMOVED*** Eye color of the character.
 ***REMOVED*****REMOVED***
    eyeColor;

 ***REMOVED*****REMOVED***
    ***REMOVED*** Male/Female.
 ***REMOVED*****REMOVED***
    gender;

 ***REMOVED*****REMOVED***
    ***REMOVED*** Hair color.
 ***REMOVED*****REMOVED***
    hairColor;

 ***REMOVED*****REMOVED***
    ***REMOVED*** Height of the character, cm.
 ***REMOVED*****REMOVED***
    height;

 ***REMOVED*****REMOVED***
    ***REMOVED*** Native planet(just index for now).
 ***REMOVED*****REMOVED***
    homeworld;

 ***REMOVED*****REMOVED***
    ***REMOVED*** Weight of the character, kg.
 ***REMOVED*****REMOVED***
    mass;

 ***REMOVED*****REMOVED***
    ***REMOVED*** Character name.
 ***REMOVED*****REMOVED***
    name;

 ***REMOVED*****REMOVED***
    ***REMOVED*** Name of skin color.
 ***REMOVED*****REMOVED***
    skinColor;

    constructor(characterModel) {
      this.id = characterModel.id;
      this.birthYear = characterModel.birthYear;
      this.eyeColor = characterModel.eyeColor;
      this.gender = characterModel.gender;
      this.hairColor = characterModel.hairColor;
      this.height = characterModel.height;
      this.homeworld = characterModel.homeworld;
      this.mass = characterModel.mass;
      this.name = characterModel.name;
      this.skinColor = characterModel.skinColor;
    }
}
