import { Group, Stack, Text, Avatar, useMantineTheme } from '@mantine/core';

export function ProfilePrevMenuCard(props) {
  const { name, role, img } = props;
  const { colors } = useMantineTheme();

  return (
    <Group spacing="lg" align="center">
      <Avatar src={img || ''} radius={9999} size="lg" />

      <Stack spacing="xs">
        <Text component="p" className="label-md" tt="capitalize">
          {name}
        </Text>
        <Text
          tt="capitalize"
          component="p"
          className="label-md"
          sx={{ color: colors.neutral[6] }}
        >
          {role}
        </Text>
      </Stack>
    </Group>
  );
}
