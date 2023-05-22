import { Box, Text } from '@mantine/core';

import { useStyles } from './style.NavSectionTitle';

export function NavSectionTitle({ title }) {
  const { classes } = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Text className="label-md" color="neutral.6">
        {title}
      </Text>
    </Box>
  );
}
