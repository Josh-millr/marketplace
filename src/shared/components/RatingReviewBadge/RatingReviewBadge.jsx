import { Text, Group, useMantineTheme } from '@mantine/core';
import { HiStar } from 'react-icons/hi';

import { roundUpNumber } from '@/shared/utils/roundUpNumber';
import { calculateAverageRating } from '@/shared/utils/calculateAverageRating';

export function RatingReviewBadge({ ratings, totalComment }) {
  const { colors } = useMantineTheme();

  return (
    <Group spacing="xs">
      <HiStar size={20} color={colors.brandPrimary[6]} />
      <Text className="label-sm" fw={'700!important'}>
        {`${ratings && calculateAverageRating(ratings)} `}
        <span style={{ color: colors.neutral[6] }}>
          {`(${totalComment && roundUpNumber(totalComment)} Review)`}
        </span>
      </Text>
    </Group>
  );
}
