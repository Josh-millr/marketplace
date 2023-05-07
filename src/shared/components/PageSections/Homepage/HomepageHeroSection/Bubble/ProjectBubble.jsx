import { Box, Text, Stack, useMantineTheme } from '@mantine/core';
import { Rocket } from 'iconoir-react';

import { useStyles } from '../styles.HomepageHeroSection';

export function ProjectBubble() {
  const { classes } = useStyles();
  const { colors } = useMantineTheme();

  const rocketIconNeutral = (
    <Rocket width={20} height={20} color={`${colors.brandPrimary[1]}`} />
  );

  return (
    <Box className={`${classes.bubbleContainer} ${classes.projectContainer}`}>
      <Box className={`${classes.bubbleSymbol} ${classes.ratingSymbol}`}>
        <Box display="inline" m="auto">
          {rocketIconNeutral}
        </Box>
      </Box>
      <Stack gap="xs" className={classes.bubbleCard}>
        <Text className="label-sm" style={{ fontWeight: 700 }}>
          +12M
        </Text>
        <Text className="label-sm" color="neutral.5">
          Project Completed
        </Text>
      </Stack>
    </Box>
  );
}
