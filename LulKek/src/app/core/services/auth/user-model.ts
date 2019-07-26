import { UserDTO } from './user-dto';

/**
 * User model that tries to fits FireBase response.
 */
export class UserModel {

    /**
     * user token from server response.
     */
    public idToken: string;

    /**
     * user email.
     */
    public email: string;

    constructor(userResponse: Partial<UserModel>) {
        this.idToken = userResponse.idToken;
        this.email = userResponse.email;
    }
}
