/**
 * Formats a numeric value as currency by adding commas every three digits
 * @function
 * @param {number} amount - The numeric value to format as currency
 * @returns {string} - The formatted currency value
 * @example
 * formatNumericAsCurrency(1200000) // returns "1,200,000"
 * formatNumericAsCurrency(120) // returns "120"
 */

export const formatNumericAsCurrency = (amount) => {
  const groupDigitsRegex = /\B(?=(\d{3})+(?!\d))/g;
  return amount.toString().replace(groupDigitsRegex, ',');
};
