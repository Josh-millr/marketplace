import { Stack, Text, Divider, Button } from '@mantine/core';

import { useFetchLazy } from '@/shared/hooks/useFetchLazy';
import { getServiceReviewsApi } from '@/shared/services/getServiceReviewsApi';

import { ReviewCard } from '../../../ReviewCard';
import { RatingProgressCard } from '../../../RatingProgressCard';

function Reviews({ reviews, rating, totalComment }) {
  const { loadMore, resultLazy, maxResult } = useFetchLazy({
    initialBatchSize: 3,
    action: (limit) => getServiceReviewsApi(limit),
  });

  return (
    <Stack spacing="3xl">
      <Stack spacing="2xl">
        {resultLazy.map((review, index) => (
          <ReviewCard
            key={index}
            description={review?.body ?? ''}
            img={review?.creator?.img ?? ''}
            name={review?.creator?.name ?? ''}
            review={totalComment ?? ''}
            rating={rating ?? ''}
          />
        ))}
      </Stack>
      <div>
        <Button variant="outline" onClick={loadMore} disabled={maxResult}>
          load more
        </Button>
      </div>
    </Stack>
  );
}

export function ServiceReviewSection({ ratings, reviews }) {
  return (
    <Stack spacing="2xl" py="2xl">
      <Text className="sub-h1">Rating & Review</Text>
      <RatingProgressCard ratings={ratings} />
      <Divider />
      <Reviews
        reviews={reviews.comments}
        rating={ratings.rating}
        totalComment={reviews.totalReviews}
      />
    </Stack>
  );
}
