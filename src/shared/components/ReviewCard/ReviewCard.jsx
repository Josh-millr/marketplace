import { Group, Title, Stack, Text, Avatar, Skeleton } from '@mantine/core';

import { RatingReviewBadge } from '../RatingReviewBadge';
import { CustomSuspense } from '../CustomSuspense';

export function ReviewCard({ name, img, description, rating, review }) {
  return (
    <Stack spacing="lg">
      <Group>
        {img ? (
          <Avatar radius={9999} src={img || ''} size={52} />
        ) : (
          <Skeleton height={50} circle mb="xl" />
        )}

        <Stack spacing="sm">
          <CustomSuspense
            fallback={<Skeleton height={8} width={100} radius="xl" />}
            dependency={name}
          >
            <Title className="label-md" fw={'700!important'}>
              {name}
            </Title>
          </CustomSuspense>
          <Group spacing="sm">
            <CustomSuspense
              fallback={<Skeleton height={8} width={100} radius="xl" />}
              dependency={rating && review}
            >
              <>
                <RatingReviewBadge ratings={rating} totalComment={review} />
                <Text className="label-md" c="neutral.6">
                  May 9, 2023
                </Text>
              </>
            </CustomSuspense>
          </Group>
        </Stack>
      </Group>
      <CustomSuspense
        dependency={description}
        fallback={
          <Stack spacing="sm">
            <Skeleton height={8} radius="xl" />
            <Skeleton height={8} radius="xl" />
            <Skeleton height={8} width="70%" radius="xl" />
          </Stack>
        }
      >
        <Text className="body-sm">{description}</Text>
      </CustomSuspense>
    </Stack>
  );
}
