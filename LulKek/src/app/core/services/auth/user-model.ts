import { UserDTO } from './user-dto';

***REMOVED****
***REMOVED*** User model that tries to fits FireBase response.
***REMOVED***/
export class UserModel {

***REMOVED*****REMOVED*****REMOVED***
   ***REMOVED*****REMOVED*** user token from server response.
***REMOVED*****REMOVED*****REMOVED***
    public idToken: string;

***REMOVED*****REMOVED*****REMOVED***
   ***REMOVED*****REMOVED*** user email.
***REMOVED*****REMOVED*****REMOVED***
    public email: string;

    constructor(userResponse: UserDTO) {
        this.idToken = userResponse.idToken;
        this.email = userResponse.email;
    }
}
