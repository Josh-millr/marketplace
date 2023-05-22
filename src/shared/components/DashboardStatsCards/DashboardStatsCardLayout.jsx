import {
  Box,
  Group,
  Skeleton,
  Paper,
  Stack,
  Text,
  useMantineTheme,
  Center,
  Space
} from '@mantine/core';

export function DashboardStatsCardLayout(props) {
  const { headline, count, newCount, icon } = props;

  return (
    <Paper withBorder p="xl" radius="sm">
      <Stack spacing="xs">
        {/* Heading */}
        <Group position="apart">
          {headline}
          {icon}
        </Group>
        {/* Count */}
        <Box>{count}</Box>
      </Stack>
      {/* New Count */}
      <Box>{newCount}</Box>
    </Paper>
  );
}

DashboardStatsCardLayout.Icon = function Icon({ iconType: IconType }) {
  const { colors } = useMantineTheme();
  const iconColor = colors.neutral[6];

  return <IconType height={24} width={24} color={iconColor} strokeWidth={1.2} />;
};

DashboardStatsCardLayout.Headline = function Headline({ label }) {
  return (
    <Text className="label-sm" fw={'800!important'} color="neutral.7">
      {label}
    </Text>
  );
};

DashboardStatsCardLayout.TotalCount = function TotalCount({ count }) {
  return count ? (
    <Text className="h1">{count}</Text>
  ) : (
    <Skeleton width={120} height={16} />
  );
};

DashboardStatsCardLayout.NewCount = function NewCount({ count, label }) {
  const isNewCountEmpty = count === 0;
  const newCountColor = isNewCountEmpty ? 'inherit' : 'brandPrimary.7';

  return (
    <Center inline className="label-md" color="neutral.7">
      {count ? (
        <Text td="underline" color={newCountColor} fw={'7000!important'}>
          {count}
        </Text>
      ) : (
        <Skeleton height={16} width={24} />
      )}
      <Space w={8} />
      <Text>{label}</Text>
    </Center>
  );
};
