/**
 * Реализует DTO в рамках ответа от сервера FireBase.
 */
export interface UserDTO {

    /**
     * токен пользователя из ответа сервера.
     */
    idToken: string;

    /**
     * email пользователя.
     */
    email: string;
}
