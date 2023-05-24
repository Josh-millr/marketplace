import {
  Stack,
  Button,
  Group,
  Title,
  Text,
  Divider,
} from '@mantine/core';
import { Hourglass, RefreshCircular } from 'iconoir-react';

import { iconCreator } from '@/shared/utils/iconCreator';
import { displayNumberInNaira } from '@/shared/utils/displayNumberInNaira';

export function PackageTab(props) {
  const { price, descr, revision, delivery } = props;

  return (
    <Stack spacing="md" pt="sm">
      <Stack spacing="xs">
        <Title className="h1">{displayNumberInNaira(price)}</Title>
        <Text className="body-sm">{descr}</Text>
      </Stack>

      <Divider />

      <Stack spacing="md">
        <Group spacing="sm">
          {iconCreator({ icon: Hourglass, sizeOverride: 20 })}
          <Text className="label-md">{`${delivery} Days delivery`}</Text>
        </Group>
        <Group spacing="sm">
          {iconCreator({ icon: RefreshCircular, sizeOverride: 20 })}
          <Text className="label-md">{`${revision} Revisions`}</Text>
        </Group>
      </Stack>

      <Divider />

      <Button size="lg">{`Continue ${displayNumberInNaira(price)}`}</Button>
    </Stack>
  );
}
