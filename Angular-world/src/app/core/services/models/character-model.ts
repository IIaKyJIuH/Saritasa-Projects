***REMOVED****
***REMOVED*** Includes everything to work with character according to the database data.
***REMOVED***/
export class CharacterModel {
***REMOVED***
  ***REMOVED*** Index in the database swapi file.
***REMOVED***
  public databaseId: number;

***REMOVED***
  ***REMOVED*** Date of birth according to the the Star Wars universe.
***REMOVED***
  public birthYear: string;

***REMOVED***
  ***REMOVED*** Eye color of the character.
***REMOVED***
  public eyeColor: string;

***REMOVED***
  ***REMOVED*** Male/Female.
***REMOVED***
  public gender: string;

***REMOVED***
  ***REMOVED*** Hair color.
***REMOVED***
  public hairColor: string;

***REMOVED***
  ***REMOVED*** Height of the character, cm.
***REMOVED***
  public height: number;

***REMOVED***
  ***REMOVED*** Native planet(just index for now) of the character.
***REMOVED***
  public homeworld: number;

***REMOVED***
  ***REMOVED*** Weight of the character, kg.
***REMOVED***
  public mass: number;

***REMOVED***
  ***REMOVED*** Character name.
***REMOVED***
  public name: string;

***REMOVED***
  ***REMOVED*** God knows what this means...........
***REMOVED***
  public skinColor: string;

  constructor(data: Partial<CharacterModel>) {
    this.databaseId = data.databaseId;
    this.birthYear = data.birthYear;
    this.eyeColor = data.eyeColor;
    this.gender = data.gender;
    this.hairColor = data.hairColor;
    this.height = data.height;
    this.homeworld = data.homeworld;
    this.mass = data.mass;
    this.name = data.name;
    this.skinColor = data.skinColor;
  }
}
