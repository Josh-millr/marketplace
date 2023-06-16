import { useMediaQuery } from '@mantine/hooks';
import { Paper, useMantineTheme } from '@mantine/core';

import { useStyles } from './style.SectionWrapperNew';

export const SectionWrapperNew = ({ children }) => {
  const { classes } = useStyles();

  const { breakpoints } = useMantineTheme();
  const mobileScreen = useMediaQuery(`(min-width: ${breakpoints.md})`);

  return (
    <Paper className={classes.wrapper} withBorder={mobileScreen}>
      {children}
    </Paper>
  );
};
