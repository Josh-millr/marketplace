/* eslint-disable no-underscore-dangle */
import { Button, Stack } from '@mantine/core';

import { useFetchLazy } from '@/shared/hooks/useFetchLazy';
import { getAllFreelancersCommentsApi } from '@/shared/services/getAllFreelancersCommentsApi';

import { CommentCard } from '../../CommentCard';

export function CommentSectionReadMode({ userID }) {
  const { loadMore, resultLazy, maxResult } = useFetchLazy({
    initialBatchSize: 4,
    action: (limit) => getAllFreelancersCommentsApi(limit, userID),
  });

  return (
    <Stack spacing="3xl">
      <Stack spacing="xl">
        {resultLazy.map((comment, index) => (
          <CommentCard
            key={comment?._id || index}
            postedAt={comment?.createdAt}
            description={comment?.description}
            creatorImg={comment?.creator?.img}
            creatorName={comment?.creator?.name}
          />
        ))}
      </Stack>

      <div>
        <Button variant="outline" onClick={loadMore} disabled={maxResult}>
          Load more
        </Button>
      </div>
    </Stack>
  );
}
