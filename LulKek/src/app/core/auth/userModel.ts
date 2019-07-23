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

    constructor(userResponse: any) {
        this.idToken = userResponse.idToken;
        this.email = userResponse.email;
    }
}
