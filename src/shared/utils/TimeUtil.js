import { getUserIpApi } from '@/shared/services/getUserIpApi';
import { getTimezoneByIpApi } from '@/shared/services/getTimezoneByIpApi';

export class TimeUtil {
  getUserCoordinates() {}

  getUserLocation(latitude, longitude) {
    // Use the latitude and longitude to retrieve the user's location
  }

  async convertToLocalTime(timestamp) {
    // Converts timestamp from ISO to user local time
    try {
      const ip = await getUserIpApi();
      const timezone = await getTimezoneByIpApi(ip);
      
      const date = new Date(timestamp);
      
      const userTime = date.toLocaleString('en-US', {
        timeZone: timezone,
      });

      return userTime;

    } catch (error) {
      // TODO: Handle error
    }
  }

  async getLocalTime() {
    // Use the user's location to obtain the accurate local time
  }

  createISOTime(localTime) {
    // Create an ISO time representation based on the accurate local time
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
