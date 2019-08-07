import { UserTokensDto } from './user-tokens-dto';

/**
 * Dto in terms of http post-request.
 */
export interface UserDto extends UserTokensDto {

    /**
     * user email.
     */
    email: string;

}
