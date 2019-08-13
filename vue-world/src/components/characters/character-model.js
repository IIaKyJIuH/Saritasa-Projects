export default class FilmModel {
***REMOVED***
   ***REMOVED*****REMOVED*** Index in the database swapi file.
***REMOVED*****REMOVED*****REMOVED***
    Id;

***REMOVED*****REMOVED*****REMOVED***
   ***REMOVED*****REMOVED*** Date of birth according to the the Star Wars universe.
***REMOVED*****REMOVED*****REMOVED***
    birthYear;

***REMOVED*****REMOVED*****REMOVED***
   ***REMOVED*****REMOVED*** Eye color of the character.
***REMOVED*****REMOVED*****REMOVED***
    eyeColor;

***REMOVED*****REMOVED*****REMOVED***
   ***REMOVED*****REMOVED*** Male/Female.
***REMOVED*****REMOVED*****REMOVED***
    gender;

***REMOVED*****REMOVED*****REMOVED***
   ***REMOVED*****REMOVED*** Hair color.
***REMOVED*****REMOVED*****REMOVED***
    hairColor;

***REMOVED*****REMOVED*****REMOVED***
   ***REMOVED*****REMOVED*** Height of the character, cm.
***REMOVED*****REMOVED*****REMOVED***
    height;

***REMOVED*****REMOVED*****REMOVED***
   ***REMOVED*****REMOVED*** Native planet(just index for now).
***REMOVED*****REMOVED*****REMOVED***
    homeworld;

***REMOVED*****REMOVED*****REMOVED***
   ***REMOVED*****REMOVED*** Weight of the character, kg.
***REMOVED*****REMOVED*****REMOVED***
    mass;

***REMOVED*****REMOVED*****REMOVED***
   ***REMOVED*****REMOVED*** Character name.
***REMOVED*****REMOVED*****REMOVED***
    name;

***REMOVED*****REMOVED*****REMOVED***
   ***REMOVED*****REMOVED*** Name of skin color.
***REMOVED*****REMOVED*****REMOVED***
    skinColor;

    constructor(characterModel) {
      this.Id = characterModel.Id;
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
