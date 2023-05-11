/**
 *
 * Calculates the weighted average rating from a given ratings object.
 * @param {object} ratings - The rating counts
 * for each rating.
 * @param {object} ratings.rating - An object containing the count for
 * each rating value.
 * @returns {number} The weighted average rating rounded to 2 decimal
 * places. Returns 0 if the result is NaN.
 *
 * */

export const calculateAverageRating = (ratings) => {
  const ratingCounts = Object.values(ratings);

  const totalRateCount = ratingCounts.reduce((acc, count) => acc + count, 0);
  const weightedSum = Object.keys(ratings).reduce(
    (acc, rate) => acc + rate * ratings[rate],
    0
  );
  const weightedAverageRate = weightedSum / totalRateCount;
  const roundedWeightedAverageRate = Number(weightedAverageRate.toFixed(2));
  const isResultNan = Number.isNaN(roundedWeightedAverageRate);
  return isResultNan ? 0 : roundedWeightedAverageRate;
};
