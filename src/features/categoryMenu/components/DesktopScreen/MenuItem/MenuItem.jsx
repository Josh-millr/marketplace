import { memo } from 'react';
import { Box, Text } from '@mantine/core';

import { useStyles } from './style.MenuItem';

export const MenuItem = memo(({ label, makeActive, activeCategory }) => {
  const { classes } = useStyles();

  const displayState = activeCategory === label;
  const stateStyle = displayState ? classes.active : classes.inActive;

  return (
    <Box
      component="li"
      className={`${stateStyle} ${classes.wrapper}`}
      onMouseEnter={() => makeActive(label)}
      onMouseLeave={() => makeActive('')}
    >
      <Text py="lg" className={`label-md ${classes.label}`}>
        {label}
      </Text>
    </Box>
  );
});
