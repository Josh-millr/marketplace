// import moment from 'moment';
// import 'moment-timezone/builds/moment-timezone-with-data-10-year-range';

export class TimeUtil {
  getUserCoordinates() {
    // Get the user's latitude and longitude using the browser's Geolocation API
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        const { getCurrentPosition } = navigator.geolocation;

        const coordCallback = (position) => {
          const { latitude, longitude } = position.coords;
          resolve({ latitude, longitude });
        };

        getCurrentPosition(coordCallback, (error) => {
          reject(error);
        });
      } else {
        reject(new Error('Geolocation is not supported by this browser.'));
      }
    });
  }

  getUserLocation(latitude, longitude) {
    // Use the latitude and longitude to retrieve the user's location
  }

  getAccurateLocalTime(location) {
    // Use the user's location to obtain the accurate local time
  }

  createISOTime(localTime) {
    // Create an ISO time representation based on the accurate local time
  }

  decompressToLocalTime(timeInfo, timezone) {
    // Decompress the time info to the user's local time based on their timezone
  }

  static getTimeSignature() {
    // Call this method when the user needs to upload data that requires a time signature
    // Return value: ISO time
  }

  static interpretTimeSignature(timeSignature) {
    // Call this method when the user needs to interpret a time and date signature
    // Return value: Local time and date following a default standard
  }
}
