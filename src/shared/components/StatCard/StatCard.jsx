import {
  Group,
  Paper,
  Text,
  Box,
  Stack,
  Center,
  useMantineTheme,
} from '@mantine/core';
// import { useMediaQuery } from '@mantine/hooks';

export function StatCard({ title, count, newCount, icon }) {
  return (
    <Paper withBorder p="xl" radius="sm">
      <Stack spacing="xs">
        {/* Heading */}
        <Group position="apart">
          {title}
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

// Adds title text to the stats card
StatCard.Title = function Title({ children }) {
  return (
    <Text className="label-sm" fw={800} color="neutral.7">
      {children}
    </Text>
  );
};

// Adds icon to the stats card
StatCard.Icon = function Icon({ iconType: IconType }) {
  const { colors } = useMantineTheme();
  const iconColor = colors.neutral[6];

  return <IconType height={20} width={20} color={iconColor} />;
};

// Adds count text to the stats card
StatCard.Count = function Count({ children }) {
  return <Text className="h1">{children}</Text>;
};

// Adds new count to the stat card
StatCard.NewCount = function NewCount({ label, children }) {
  // const { breakpoints } = useMantineTheme();

  // const mobileScreenSize = breakpoints.sm;
  // const matches = useMediaQuery(`(max-width: ${mobileScreenSize}px)`);

  // const textSize = matches ? 'label-md' : 'label-sm';

  const isNewCountEmpty = children === 0;
  const newCountColor = isNewCountEmpty ? 'inherit' : 'brandPrimary.7';

  return (
    <Center inline className="label-sm" color="neutral.7">
      <Text color={newCountColor} mr={4} style={{ fontWeight: 700 }}>
        {children}
      </Text>
      <Text>{label}</Text>
    </Center>
  );
};
