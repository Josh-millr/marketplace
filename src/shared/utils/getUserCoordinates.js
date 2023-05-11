/**
 *
 * Retrieves the user's current location using the Geolocation API.
 * @returns {Promise<{latitude: number, longitude: number}>}
 * A Promise that resolves with the latitude and longitude of the user's location.
 *
 * @throws {Error} Throws an error if geolocation is not supported by the browser
 * or if there is an error retrieving the location.
 *
 * */

export const getUserCoordinates = () =>
  new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          resolve({ latitude, longitude });
        },
        (error) => {
          reject(error);
        }
      );
    } else {
      /**
       * TODO:
       * Handle instance where the users browser doesn't support the
       * getLocation API
       *
       * * */
      reject(new Error('Geolocation is not supported by this browser.'));
    }
  });
