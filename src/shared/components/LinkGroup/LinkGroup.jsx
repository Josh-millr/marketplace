import { memo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Stack, Text } from '@mantine/core';

import { LinkItem } from './LinkItem/LinkItem';

export const LinkGroup = memo(({ label, links = [] }) => {
  const linkList = links.map(({ label: hrefLabel, href }) => {
    const itemId = uuidv4();
    return <LinkItem key={itemId} label={hrefLabel} href={href} />;
  });

  return (
    <Stack spacing="sm">
      <Text
        color="neutral.7"
        className="label-md"
        style={{ fontWeight: '700' }}
      >
        {label}
      </Text>
      <ul>{linkList}</ul>
    </Stack>
  );
});
