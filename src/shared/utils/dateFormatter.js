/* eslint-disable class-methods-use-this */

export class DateFormatter {
  compress(date) {
    return date.getTime();
  }

  decompress(timestamp) {
    return new Date(timestamp);
  }
}

const compressor = new DateFormatter();
const date = new Date(2021, 2, 14); // March 14, 2021
const compressed = compressor.compress(date); // 1615771200000
const decompressed = compressor.decompress(compressed);
console.log(
  decompressed.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
); // Output: "March 14, 2021"
