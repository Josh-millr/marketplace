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

  // Other routes will pass this condition except the dashboard homepage
  const uniquePathActive = uniquePath.some((path) => link.includes(path));

  // Specifically for the dashboard homepage route
  const isHomeActive = pathname === link;

  const isRouteActive = uniquePathActive || isHomeActive;

  const compIcon = iconCreator({
    icon: Icon,
    sizeOverride: 20,
    colorOverride: isRouteActive
      ? theme.colors.neutral[1]
      : theme.colors.neutral[7],
  });

  return (
    <Box className={classes.wrapper}>
      <Link href={link}>
        <NavLink
          pl={24}
          label={title}
          icon={compIcon}
          variant="filled"
          className={{ root: classes.root }}
          active={isRouteActive}
        />
      </Link>
    </Box>
  );
}
