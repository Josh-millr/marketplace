import { forwardRef } from 'react';

import { Group, Text } from '@mantine/core';

function CountryListItem({ emoji, label, ...others }, ref) {
  return (
    <div ref={ref} {...others}>
      <Group noWrap>
        <span>{emoji}</span>
        <Text size="sm">{label}</Text>
      </Group>
    </div>
  );
}

export default forwardRef(CountryListItem);
