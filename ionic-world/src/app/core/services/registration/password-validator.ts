import { FormGroup } from '@angular/forms';

/**
 * Custom validator for angular forms password.
 */
export class PasswordValidator {
  /**
   * Checks password equality.
   * @param group - includes password and repeatedPassword.
   * @returns true if password = confirmPassword.
   */
  public static areEqual(group: FormGroup): {[key: string]: boolean} {
    const password = group.value.password;
    const confirmPassword = group.value.confirmPassword;
    if (!password || !confirmPassword) { return { nomatch: true }; }
    return password.localeCompare(confirmPassword) === 0
      ? null
      : { nomatch: true };
  }

}
