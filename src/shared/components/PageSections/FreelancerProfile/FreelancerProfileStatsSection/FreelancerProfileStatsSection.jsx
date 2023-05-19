import { Group, Text, Stack, Grid } from '@mantine/core';
import { LeaderboardStar, Clock, HandCash } from 'iconoir-react';

import { iconCreator } from '@/shared/utils/iconCreator';
import { displayNumberInNaira } from '@/shared/utils/displayNumberInNaira';

import { useStyles } from './style.FreelancerProfileStatsSection';

export function FreelancerProfileStatsSection(props) {
  const { classes } = useStyles();
  const { totalJobs, totalHours, totalEarnings } = props;

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
              <Text className="label-lg" c="neutral.6">
                Total Jobs
              </Text>
              <Text className="label-lg" fw={'700important'}>
                {totalJobs}
              </Text>
            </Stack>
          </Group>
        )}
      </Grid.Col>
      <Grid.Col span={6} sm={4}>
        {totalHours && (
          <Group spacing="xl">
            {iconCreator({ icon: Clock, sizeOveride: 40, strokeOveride: 1 })}
            <Stack spacing="md">
              <Text className="label-lg" c="neutral.6">
                Total Hours
              </Text>
              <Text className="label-lg" fw={'700important'}>
                {totalHours}
              </Text>
            </Stack>
          </Group>
        )}
      </Grid.Col>
      <Grid.Col span={6} sm={4}>
        {totalEarnings && (
          <Group spacing="xl">
            {iconCreator({ icon: HandCash, sizeOveride: 40, strokeOveride: 1 })}
            <Stack spacing="md">
              <Text className="label-lg" c="neutral.6">
                Total Earnings
              </Text>
              <Text className="label-lg" fw={'700important'}>
                {displayNumberInNaira(totalEarnings)}
              </Text>
            </Stack>
          </Group>
        )}
      </Grid.Col>
    </Grid>
  );
}
