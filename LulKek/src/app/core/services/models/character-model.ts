***REMOVED****
***REMOVED*** Includes everything to work with character according to the database data.
***REMOVED***/
export class CharacterModel {
***REMOVED*****REMOVED*****REMOVED***
   ***REMOVED*****REMOVED*** Date of birth according to the the Star Wars universe.
***REMOVED*****REMOVED*****REMOVED***
    public birthYear: string;

***REMOVED*****REMOVED*****REMOVED***
   ***REMOVED*****REMOVED*** Eye color of the character.
***REMOVED*****REMOVED*****REMOVED***
    public eyeColor: string;

***REMOVED*****REMOVED*****REMOVED***
   ***REMOVED*****REMOVED*** Male/Female.
***REMOVED*****REMOVED*****REMOVED***
    public gender: string;

***REMOVED*****REMOVED*****REMOVED***
   ***REMOVED*****REMOVED*** Hair color.
***REMOVED*****REMOVED*****REMOVED***
    public hairColor: string;

***REMOVED*****REMOVED*****REMOVED***
   ***REMOVED*****REMOVED*** Height of the character, cm.
***REMOVED*****REMOVED*****REMOVED***
    public height: number;

***REMOVED*****REMOVED*****REMOVED***
   ***REMOVED*****REMOVED*** Native planet(just index for now) of the character.
***REMOVED*****REMOVED*****REMOVED***
    public homeworld: number;

***REMOVED*****REMOVED*****REMOVED***
   ***REMOVED*****REMOVED*** Weight of the character, kg.
***REMOVED*****REMOVED*****REMOVED***
    public mass: number;

***REMOVED*****REMOVED*****REMOVED***
   ***REMOVED*****REMOVED*** Character name.
***REMOVED*****REMOVED*****REMOVED***
    public name: string;

***REMOVED*****REMOVED*****REMOVED***
   ***REMOVED*****REMOVED*** God knows what this means...........
***REMOVED*****REMOVED*****REMOVED***
    public skinColor: string;

    constructor(data: Partial<CharacterModel>) {
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
