import { memo } from 'react';
import Image from 'next/image';
import { ViewGrid, Clock } from 'iconoir-react';
import {
  Title,
  Stack,
  Group,
  Flex,
  Grid,
  Skeleton,
  MediaQuery,
  useMantineTheme,
} from '@mantine/core';

import { useMediaQuery } from '@mantine/hooks';

import { OptionItem } from './OptionItem';
import { ActionsButton } from './ActionsButton';
import { CustomSuspense } from '../CustomSuspense';
import { useStyles } from './style.DashboardServiceCardListItem';

export const DashboardServiceCardListItem = memo((props) => {
  const { id, title, category, createdAt } = props;

  const { classes } = useStyles();
  const { breakpoints } = useMantineTheme();
  const isNotMobile = useMediaQuery(`(min-width: ${breakpoints.sm})`);

  return (
    <Grid
      py="xl"
      gap="sm"
      className={classes.wrapper}
      px={{ base: 0, sm: 'xl' }}
      justify="space-between"
    >
      <Grid.Col span="auto">
        <Flex gap="md">
          <MediaQuery smallerThan="lg" styles={{ display: 'none' }}>
            {/* Service Image */}
            <Image
              width={80}
              height={62}
              alt={title || 'service image'}
              src="https://picsum.photos/200"
              style={{ borderRadius: '4px' }}
            />
          </MediaQuery>

          <Stack spacing="md">
            {/* Service Title */}
            <CustomSuspense
              dependency={title}
              fallback={<Skeleton height="12px" w="70%" />}
            >
              <Title
                lineClamp={2}
                className={isNotMobile ? 'sub-h1' : 'sub-h2'}
              >
                {title}
              </Title>
            </CustomSuspense>

            <Group>
              {/* Service Category */}
              <OptionItem icon={ViewGrid} label={category} />

              {/* Service creation date */}
              <OptionItem icon={Clock} label={createdAt} />
            </Group>
          </Stack>
        </Flex>
      </Grid.Col>

      <Grid.Col span="content">
        <ActionsButton serviceId={id} />
      </Grid.Col>
    </Grid>
  );
});
