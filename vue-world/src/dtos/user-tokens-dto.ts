/**
 * Dto for user tokens in terms of http post-request.
 */
export interface UserTokensDto {

  /**
   * user idToken.
   */
  idToken: string;

  /**
   * user secure token for idToken refreshing.
   */
  refreshToken: string;

}
