import { FormGroup } from '@angular/forms';

***REMOVED****
***REMOVED*** Custom validator for angular forms password.
***REMOVED***/
export class PasswordValidator {
***REMOVED***
  ***REMOVED*** Checks password equality.
  ***REMOVED*** @param group - includes password and repeatedPassword.
  ***REMOVED*** @returns true if password = confirmPassword.
***REMOVED***
  public static areEqual(group: FormGroup): {[key: string]: boolean} {
    const password = group.value.password;
    const confirmPassword = group.value.confirmPassword;
    if (!password || !confirmPassword) { return { nomatch: true***REMOVED*****REMOVED*** }
    return password.localeCompare(confirmPassword) === 0
      ? null
      : { nomatch: true***REMOVED*****REMOVED***
  }

}
