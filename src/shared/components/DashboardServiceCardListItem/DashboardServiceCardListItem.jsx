import { ViewGrid, Clock, MoreHoriz } from 'iconoir-react';
import {
  Title,
  Text,
  Stack,
  Group,
  Flex,
  Grid,
  Skeleton,
  ActionIcon,
  useMantineTheme,
} from '@mantine/core';

import { iconCreator } from '@/shared/utils/iconCreator';

import { useStyles } from './style.DashboardServiceCardListItem';
import { CustomSuspense } from '../CustomSuspense';

function OptionItem({ icon, label }) {
  const { colors } = useMantineTheme();

  const createIcon = (Icon) => ({
    icon: Icon,
    sizeOverride: 20,
    colorOverride: colors.neutral[6],
  });
  return (
    <CustomSuspense
      dependency={label}
      fallback={<Skeleton height="12px" w="82px" />}
    >
      <Flex wrap="nowrap" gap="sm">
        {iconCreator(createIcon(icon))}
        <Text
          className="label-md"
          c="neutral.6"
          tt="capitalize"
          fw={'500!important'}
        >
          {label}
        </Text>
      </Flex>
    </CustomSuspense>
  );
}

function ActionsButton({ serviceId }) {
  // TODO: Implement delete service function
  // TODO: Implement edit service service function

  return (
    <ActionIcon variant="light" size="lg">
      {iconCreator({ icon: MoreHoriz, sizeOverride: 24 })}
    </ActionIcon>
  );
}

export function DashboardServiceCardListItem(props) {
  const { id, title, category, createdAt } = props;
  const { classes } = useStyles();

  return (
    <Grid className={classes.wrapper} justify="space-between" py="xl" gap="sm">
      <Grid.Col span="auto">
        <Stack spacing="lg">
          {/* Service Title */}
          <CustomSuspense
            dependency={title}
            fallback={<Skeleton height="12px" w="70%" />}
          >
            <Title className="sub-h2">{title}</Title>
          </CustomSuspense>

          <Group>
            {/* Service Category */}
            <OptionItem icon={ViewGrid} label={category} />

            {/* Service creation date */}
            <OptionItem icon={Clock} label={createdAt} />
          </Group>
        </Stack>
      </Grid.Col>

      <Grid.Col span="content">
        <ActionsButton serviceId={id} />
      </Grid.Col>
    </Grid>
  );
}
