/**
 * Represents a color token case.
 */
export class ColorTokenCase {
  /**
   * Creates a new color token case.
   * @param {Array} tokenList - The list of tokens to add to the case.
   * @throws Will throw an error if the token list does not contain exactly 10 elements.
   */
  constructor(tokenList) {
    if (tokenList.length !== 10) {
      throw new Error('The token list must contain exactly 10 elements.');
    }

    const tokenCase = new Array(11).fill('');
    tokenCase.splice(1, 10, ...tokenList);

    this.getCase = function getCase() {
      return tokenCase;
    };
  }
}
