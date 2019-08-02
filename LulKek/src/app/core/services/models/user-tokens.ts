/**
 * User token model for keeping access and secure tokens.
 */
export class UserTokens {

  /**
   * user token from server response.
   */
  public idToken: string;

  /**
   * user secure token for refreshing idToken.
   */
  public secureToken: string;

  constructor(data: Partial<UserTokens>) {
      this.idToken = data.idToken;
      this.secureToken = data.secureToken;
  }
}
