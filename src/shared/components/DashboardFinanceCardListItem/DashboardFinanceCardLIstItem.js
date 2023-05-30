import { memo } from 'react';
import { ViewGrid, Clock } from 'iconoir-react';
import {
  Title,
  Text,
  Stack,
  Group,
  Button,
  Grid,
  Skeleton,
  useMantineTheme,
} from '@mantine/core';

import { useMediaQuery } from '@mantine/hooks';

import { OptionItem } from '../DashboardServiceCardListItem/OptionItem';
import { CustomSuspense } from '../CustomSuspense';
import { useStyles } from '../DashboardServiceCardListItem/style.DashboardServiceCardListItem';

export const DashboardFinanceCardListItem = memo((props) => {
  const { id, title, category, createdAt, amount, categoryType, status } = props;

  const { classes } = useStyles();
  const { breakpoints } = useMantineTheme();
  const isNotMobile = useMediaQuery(`(min-width: ${breakpoints.sm})`);

  let statusColor;
  if (status === 'Received') {
    statusColor = 'cyan';
  } else if (status === 'Pending') {
    statusColor = 'orange';
  } else {
    statusColor = 'light';
  }
  let categoryColor;
  if (categoryType === 'Services') {
    categoryColor = 'teal';
  } else if (categoryType === 'Project') {
    categoryColor = 'pink';
  } else {
    categoryColor = 'light';
  }

  return (
    <Grid
      py="xl"
      gap="sm"
      className={classes.wrapper}
      px={{ base: 0, sm: 'xl' }}
      justify="space-between"
    >
      <Grid.Col span="auto">
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
            <Text size="lg" style={{ fontWeight: 700 }}>
              {amount}
            </Text>
          </CustomSuspense>

          <Group>
            {/* Service Category */}
            <OptionItem icon={ViewGrid} label={category} />

            {/* Service creation date */}
            <OptionItem icon={Clock} label={createdAt} />
          </Group>

          <Group>
            {/* Category Type */}
            <Button variant="light" color={categoryColor}>
              {categoryType}
            </Button>

            {/* Status */}
            <Button variant="light" color={statusColor}>
              {status}
            </Button>
          </Group>
        </Stack>
      </Grid.Col>
    </Grid>
  );
});
