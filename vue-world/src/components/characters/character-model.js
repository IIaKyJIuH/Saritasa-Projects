export default class FilmModel {
***REMOVED***
   ***REMOVED*****REMOVED*** Index in the database swapi file.
***REMOVED*****REMOVED*****REMOVED***
    databaseId;

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
   ***REMOVED*****REMOVED*** Native planet(just index for now) of the character.
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
   ***REMOVED*****REMOVED*** God knows what this means...........
***REMOVED*****REMOVED*****REMOVED***
    skinColor;

    constructor(dbData, index) {
      this.databaseId = index;
      this.birthYear = dbData.birth_year;
      this.eyeColor = dbData.eye_color;
      this.gender = dbData.gender;
      this.hairColor = dbData.hair_color;
      this.height = dbData.height;
      this.homeworld = dbData.homeworld;
      this.mass = dbData.mass;
      this.name = dbData.name;
      this.skinColor = dbData.skin_color;
    }
}
