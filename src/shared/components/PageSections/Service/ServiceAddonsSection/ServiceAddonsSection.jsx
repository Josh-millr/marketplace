import { Stack, Text, Group, Divider } from '@mantine/core';

import { displayNumberInNaira } from '@/shared/utils/displayNumberInNaira';

function AddOns({ addons }) {
  return (
    <Stack spacing="lg" maw={520}>
      {addons.map(({ title, price }, index) => (
        <Stack key={index}>
          <Group position="apart">
            <Text className="label-lg">{title}</Text>
            <Text className="label-lg" fw={'500!important'} pl="sm">
              {displayNumberInNaira(price)}
            </Text>
          </Group>
          <Divider />
        </Stack>
      ))}
    </Stack>
  );
}

export function ServiceAddonsSection({ addons }) {
  return (
    <Stack spacing="xl" py="2xl">
      <Text className="sub-h1">Optional Add-ons</Text>
      <AddOns addons={addons} />
    </Stack>
  );
}
