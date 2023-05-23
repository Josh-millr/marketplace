import Link from 'next/link';
import { useRouter } from 'next/router';
import { Box, NavLink } from '@mantine/core';

import { iconCreator } from '@/shared/utils/iconCreator';

import { useStyles } from './style.NavItem';

export function NavItem({ icon: Icon, title, link }) {
  const { classes, theme } = useStyles();

  const router = useRouter();
  const { pathname } = router;

  const uniquePath = pathname.split('/').slice(3);

  const active = uniquePath.some((path) => link.includes(path));

  const compIcon = iconCreator({
    icon: Icon,
    sizeOveride: 20,
    colorOveride: active ? theme.colors.neutral[1] : theme.colors.neutral[7],
  });

  return (
    <Box className={classes.wrapper}>
      <Link href={link}>
        <NavLink
          label={title}
          variant="filled"
          icon={compIcon}
          active={active}
          pl={24}
        />
      </Link>
    </Box>
  );
}
