/**
 * @function roundUpNumber
 * @param {number} value - The value to be rounded up and formatted
 *
 * @return {number|string} - Returns the rounded up and formatted number as
 * a string if the input is a valid number, otherwise returns 'Invalid Input,
 * Not a number'
 *
 * This function takes in a value, checks if it is a valid number and if so,
 * rounds it up to the nearest thousand or million and appends 'k' or 'm'
 * respectively to the end of the rounded number.
 */

export const roundUpNumber = (value) => {
  if (Number.isNaN(Number(value))) {
    return 'Invalid Input, Not a number';
  }

  const number = Number(value);
  const numberLength = value.toString().length;
  const groupDigitsRegex = /\B(?=(\d{3})+(?!\d))/g;

  if (numberLength < 4) {
    return number;
  }

  let roundedNum = null;
  let formattedNum = null;

  if (numberLength < 7) {
    roundedNum = (number / 1000).toFixed(1);
    formattedNum = roundedNum.toString().replace(groupDigitsRegex, '.');
    return `+${formattedNum}k`;
  }

  if (numberLength < 10) {
    roundedNum = (number / 1000000).toFixed(2);
    formattedNum = roundedNum.toString().replace(groupDigitsRegex, '.');
    return `+${formattedNum}m`;
  }
};
