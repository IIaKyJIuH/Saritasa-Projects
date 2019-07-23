/**
 * Realizes DTO according to the FireBase response.
 */
export interface UserDTO {

    /**
     * user token from server response.
     */
    idToken: string;

    /**
     * user email.
     */
    email: string;
}
