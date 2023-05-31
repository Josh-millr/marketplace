import Link from "next/link";
import { useRouter } from "next/router";
import { Box, NavLink } from "@mantine/core";

import { iconCreator } from "@/shared/utils/iconCreator";

import { useStyles } from "./style.NavItem";

export function NavItem({ icon: Icon, title, link }) {
  const { classes, theme } = useStyles();

  const router = useRouter();
  const { pathname } = router;

  // Other routes will pass this condition except the dashboard homepage
  const uniquePath = pathname.split("/").slice(3);
  const uniquePathactive = uniquePath.some((path) => link.includes(path));

  // Specifically for the dashboard homepage route
  const isHomeActive = pathname.split("/").length === 0;

  console.log('Current paths', pathname.split("/"));

  const isRouteActive = uniquePathactive || isHomeActive;

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
          active={isRouteActive}
        />
      </Link>
    </Box>
  );
}
