/**
 * Dto for user tokens in terms of http post request.
 */
export interface UserTokensDto {

  /**
   * User idToken.
   */
  idToken: string;

  /**
   * User secure token for idToken refreshing.
   */
  refreshToken: string;

}
