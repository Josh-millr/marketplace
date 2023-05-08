import { memo } from 'react';
import { Footer, Group, Text, Select } from '@mantine/core';

export const AuthFooter = memo(() => (
  <Footer height={60}>
    <Group position="apart" px="xl">
      <Text className="label-md">© Hamzry. 2022. All rights reserved.</Text>
      <Select
        w={120}
        defaultValue="english"
        data={[{ value: 'english', label: 'English' }]}
      />
    </Group>
  </Footer>
));
