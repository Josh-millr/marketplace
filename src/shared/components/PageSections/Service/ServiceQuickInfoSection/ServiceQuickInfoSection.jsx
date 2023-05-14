import Link from 'next/link';
import { Group, Avatar, Text } from '@mantine/core';

import { RatingReviewBadge } from '../../../RatingReviewBadge';

function UserInfo({ avatar, title, href }) {
  return (
    <Link href={href || '#'}>
      <Group spacing="sm">
        <Avatar src={avatar} size="md" radius={9999} />
        <Text className="label-md" tt="capitalize" fw={'700!important'}>
          {title}
        </Text>
      </Group>
    </Link>
  );
}

export function ServiceQuickInfoSection(props) {
  const { creatorID, creatorImg, creatorName, creatorRating, creatorReview } = props;

  return (
    <Group spacing="lg">
      <UserInfo
        href={`/creator/${creatorID}`}
        avatar={creatorImg}
        title={creatorName}
      />
      <RatingReviewBadge ratings={creatorRating} totalComment={creatorReview} />
    </Group>
  );
}
