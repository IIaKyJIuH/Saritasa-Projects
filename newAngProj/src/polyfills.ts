***REMOVED****
***REMOVED*** This file includes polyfills needed by Angular and is loaded before the app.
***REMOVED*** You can add your own extra polyfills to this file.
***REMOVED***
***REMOVED*** This file is divided into 2 sections:
***REMOVED***   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
***REMOVED***   2. Application imports. Files imported after ZoneJS that should be loaded before your main
***REMOVED***      file.
***REMOVED***
***REMOVED*** The current setup is for so-called "evergreen" browsers; the last versions of browsers that
***REMOVED*** automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
***REMOVED*** Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
***REMOVED***
***REMOVED*** Learn more in https://angular.io/guide/browser-support
***REMOVED***/

***REMOVED*****************************************************************************************************
***REMOVED*** BROWSER POLYFILLS
***REMOVED***/

***REMOVED**** IE10 and IE11 requires the following for NgClass support on SVG elements***REMOVED***/
// import 'classlist.js';  // Run `npm install --save classlist.js`.

***REMOVED****
***REMOVED*** Web Animations `@angular/platform-browser/animations`
***REMOVED*** Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
***REMOVED*** Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
***REMOVED***/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.

***REMOVED****
***REMOVED*** By default, zone.js will patch all possible macroTask and DomEvents
***REMOVED*** user can disable parts of macroTask/DomEvents patch by setting following flags
***REMOVED*** because those flags need to be set before `zone.js` being loaded, and webpack
***REMOVED*** will put import in the top of bundle, so user need to create a separate file
***REMOVED*** in this directory (for example: zone-flags.ts), and put the following flags
***REMOVED*** into that file, and then add the following code before importing zone.js.
***REMOVED*** import './zone-flags.ts';
***REMOVED***
***REMOVED*** The flags allowed in zone-flags.ts are listed here.
***REMOVED***
***REMOVED*** The following flags will work for all browsers.
***REMOVED***
***REMOVED*** (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
***REMOVED*** (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
***REMOVED*** (window as any).__zone_symbol__UNPATCHED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
***REMOVED***
***REMOVED***  in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
***REMOVED***  with the following flag, it will bypass `zone.js` patch for IE/Edge
***REMOVED***
***REMOVED***  (window as any).__Zone_enable_cross_context_check = true;
***REMOVED***
***REMOVED***/

***REMOVED*****************************************************************************************************
***REMOVED*** Zone JS is required by default for Angular itself.
***REMOVED***/
import 'zone.js/dist/zone';  // Included with Angular CLI.


***REMOVED*****************************************************************************************************
***REMOVED*** APPLICATION IMPORTS
***REMOVED***/
