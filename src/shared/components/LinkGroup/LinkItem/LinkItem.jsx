import Link from 'next/link';
import { Text } from '@mantine/core';

import { useStyles } from './style.LinkItem';

export function LinkItem({ label, href }) {
  const { classes } = useStyles();

  return (
    <li>
      <Link href={href || '#'}>
        <Text className={`link-sm ${classes.link}`}>{label}</Text>
      </Link>
    </li>
  );
}
