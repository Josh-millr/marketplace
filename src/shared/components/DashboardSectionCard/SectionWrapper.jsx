/* eslint-disable no-nested-ternary */
import { useMediaQuery } from '@mantine/hooks';
import { Paper, useMantineTheme } from '@mantine/core';

import { useStyles } from './style.DashboardSectionCard';

export const SectionWrapper = ({ padSection, children }) => {
  const { classes } = useStyles();

  const { breakpoints } = useMantineTheme();
  const mobileScreen = useMediaQuery(`(min-width: ${breakpoints.sm})`);

  return (
    <Paper
      mt={24}
      mb={24}
      radius="sm"
      className={classes.wrapper}
      withBorder={mobileScreen}
      p={padSection ? (mobileScreen ? 'xl' : 0) : 0}
    >
      {children}
    </Paper>
  );
};
