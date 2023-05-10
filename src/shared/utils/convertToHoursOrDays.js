/**
 * Converts minutes to either hours or days depending on
 * whether the input is evenly divisible by 60 (minutes per hour)
 * or 1440 (minutes per day) respectively, without a remainder
 * @function
 * @param {Number} minutes - The number of minutes to convert
 * @returns {String} - The converted value in either days or hours
 * based on the divisibility
 */

export function convertToHoursOrDays(minutes) {
  if (minutes % 1440 === 0) {
    return `${minutes / 1440} days`;
  }

  if (minutes % 60 === 0) {
    return `${minutes / 60} hr.`;
  }

  return `${minutes} min.`;
}
