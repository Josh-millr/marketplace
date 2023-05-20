import { memo } from 'react';
import { Text, Center } from '@mantine/core';

export const SectionEmptyBanner = memo(({ sectionLabel }) => (
  <Center style={{ height: 48 }} px="xl">
    <Text className="label-lg" color="neutral.6" tt="capitalize">
      {`${sectionLabel} is empty`}
    </Text>
  </Center>
));
