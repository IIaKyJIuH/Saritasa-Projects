import { UserTokens } from './user-tokens';

***REMOVED****
***REMOVED*** User model that tries to fits FireBase response.
***REMOVED***/
export class UserModel extends UserTokens {
***REMOVED***
  ***REMOVED*** user email.
***REMOVED***
  public email: string;

  constructor(data: Partial<UserModel>) {
    super(
      new UserTokens({
        idToken: data.idToken,
        secureToken: data.secureToken,
      }),
    );
    this.email = data.email;
  }
}
