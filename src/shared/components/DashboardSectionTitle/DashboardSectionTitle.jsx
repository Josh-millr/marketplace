import { Box, Text } from '@mantine/core';

import { useStyles } from './style.DashboardSectionTitle';

export function DashboardSectionTitle({ title }) {
  const { classes } = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Text className="label-md" color="neutral.7" style={{ fontWeight: 700 }}>
        {title}
      </Text>
    </Box>
  );
}
