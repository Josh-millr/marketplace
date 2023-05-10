/**
 * Utility for converting between currency units.
 * @namespace currencyUnitConverter
 */

/**
 * Converts an amount from a larger unit to the smallest unit
 * (e.g. dollars to cents)
 *
 * @function toSmallestUnit
 * @memberof currencyUnitConverter
 * @param {number} amount - The amount to convert
 * @return {number} - The converted amount
 */

/**
 * Converts an amount from the smallest unit to a larger unit
 * (e.g. kobo to naira)
 *
 * @function fromSmallestUnit
 * @memberof currencyUnitConverter
 * @param {number} amount - The amount to convert
 * @return {number} - The converted amount
 */

export const currencyUnitConverter = {
  toSmallestUnit(amount) {
    return Math.round(amount * 100);
  },

  fromSmallestUnit(amount) {
    return amount / 100;
  },
};
