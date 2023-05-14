import { Stack, Text } from '@mantine/core';

export function ServiceDescriptionSection({ description }) {
  return (
    <Stack spacing="xl" py="xl">
      <Text className="h1">About this Service</Text>
      <Text className="body-md" maw={800}>
        {description}
      </Text>
    </Stack>
  );
}
