import { Group, Text, Stack, Grid } from '@mantine/core';
import { LeaderboardStar, Clock, Page } from 'iconoir-react';

import { iconCreator } from '@/shared/utils/iconCreator';

import { useStyles } from './style.HomepageSellerProfileStatsSection';

export function HomepageSellerProfileStatsSection(props) {
  const { classes } = useStyles();
  const { totalJobs, totalHours, inQueueServices } = props;

  return (
    <Grid className={classes.wrapper} spacing={54} py="2xl">
      <Grid.Col span={6} sm={4}>
        {totalJobs && (
          <Group spacing="xl">
            {iconCreator({
              icon: LeaderboardStar,
              sizeOveride: 40,
              strokeOveride: 1,
            })}
            <Stack spacing="md">
              <Text className="label-md">Total Jobs</Text>
              <Text className="label-sm">{totalJobs}</Text>
            </Stack>
          </Group>
        )}
      </Grid.Col>
      <Grid.Col span={6} sm={4}>
        {totalHours && (
          <Group spacing="xl">
            {iconCreator({ icon: Clock, sizeOveride: 40, strokeOveride: 1 })}
            <Stack spacing="md">
              <Text className="label-md">Total Hours</Text>
              <Text className="label-sm">{totalHours}</Text>
            </Stack>
          </Group>
        )}
      </Grid.Col>
      <Grid.Col span={6} sm={4}>
        {inQueueServices && (
          <Group spacing="xl">
            {iconCreator({ icon: Page, sizeOveride: 40, strokeOveride: 1 })}
            <Stack spacing="md">
              <Text className="label-md">In-Queue</Text>
              <Text className="label-sm">{inQueueServices}</Text>
            </Stack>
          </Group>
        )}
      </Grid.Col>
    </Grid>
  );
}
