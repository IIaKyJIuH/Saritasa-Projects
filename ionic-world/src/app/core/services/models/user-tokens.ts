***REMOVED****
***REMOVED*** User token model for keeping access and secure tokens.
***REMOVED***/
export class UserTokens {

***REMOVED***
  ***REMOVED*** User token from server response.
***REMOVED***
  public idToken: Promise<string>;

***REMOVED***
  ***REMOVED*** User secure token for refreshing idToken.
***REMOVED***
  public secureToken: string;

  constructor(data: Partial<UserTokens>) {
      this.idToken = data.idToken;
      this.secureToken = data.secureToken;
  }
}
