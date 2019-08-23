/**
 * User token model for keeping access and secure tokens.
 */
export class UserTokens {

  /**
   * User token from server response.
   */
  public idToken: Promise<string>;

  /**
   * User secure token for refreshing idToken.
   */
  public secureToken: string;

  constructor(data: Partial<UserTokens>) {
      this.idToken = data.idToken;
      this.secureToken = data.secureToken;
  }
}
