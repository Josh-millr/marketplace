import { v4 as uuidv4 } from 'uuid';
import { Stack } from '@mantine/core';

import { RatingProgressItem } from './RatingProgresItem/RatingProgresItem';

export function RatingProgressCard({ ratings }) {
  const ratingItems = Object.keys(ratings.rating).map((rate) => {
    const count = ratings.rating[rate];
    return {
      rate,
      count,
    };
  });

  const totalRating = ratings.total;

  return (
    <Stack spacing="md">
      {ratingItems.map((rating) => (
        <RatingProgressItem
          key={rating.rate}
          label={rating.rate}
          count={rating.count}
          totalCount={totalRating}
        />
      ))}
    </Stack>
  );
}
