// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

export const urls = {
  firebase: 'https://booking-app-7228a-default-rtdb.firebaseio.com/offered-places.json',
  firebaseUpdate: 'https://booking-app-7228a-default-rtdb.firebaseio.com/offered-places',
  maps: 'https://maps.googleapis.com/maps/api/js?key=',
  geocode: 'https://maps.googleapis.com/maps/api/geocode/json?',
  staticMap: 'https://maps.googleapis.com/maps/api/staticmap?center=',
  booking: 'https://booking-app-7228a-default-rtdb.firebaseio.com/bookings.json',
  deleteBooking: 'https://booking-app-7228a-default-rtdb.firebaseio.com/bookings',
  uploadImage: 'https://us-central1-booking-app-7228a.cloudfunctions.net/storeImage',
  signUp: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=',
  signIn: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='
};

export const keys = {
  maps: 'AIzaSyBRqTG4O-4uE_Ai3e1asYKAdHjIu9GlNvc',
  firebase: 'AIzaSyBqo3mHhxSpv9GzmAqU6kEgJbI86ZqJujw'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
