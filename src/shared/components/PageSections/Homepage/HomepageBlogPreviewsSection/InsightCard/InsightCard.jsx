import Image from 'next/image';
import { Box, Title, Stack, Text } from '@mantine/core';

import { useStyle } from '../style.HomepageBlogPreviewsSection';

export function InsightCard({ imgSrc, title, date, description }) {
  const { classes } = useStyle();
  return (
    <Stack spacing="xl">
      <Box className={classes.insightCardImage}>
        <Image
          fill
          src={imgSrc || ''}
          alt={title}
          style={{ objectFit: 'cover', borderRadius: '4px' }}
        />
      </Box>
      <Stack spacing="md">
        <Stack spacing="xs">
          <Text className="label-md" color="neutral.5" td="underline">
            {date}
          </Text>
          <Title className="sub-h2">{title}</Title>
        </Stack>
        <Text className="body-md" lineClamp={2} c="neutral.5">
          {description}
        </Text>
      </Stack>
    </Stack>
  );
}
