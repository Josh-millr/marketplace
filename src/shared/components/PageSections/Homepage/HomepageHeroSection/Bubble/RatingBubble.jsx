import { Box, Text, Stack } from '@mantine/core';

import { useStyles } from '../styles.HomepageHeroSection';

export function RatingBubble() {
  const { classes } = useStyles();

  return (
    <Box className={`${classes.bubbleContainer} ${classes.ratingContainer}`}>
      <Box className={`${classes.bubbleSymbol} ${classes.projectSymbol}`}>
        <Text
          weight={600}
          className="label-md"
          color="white"
          m="auto"
          display="initial"
        >
          ₦
        </Text>
      </Box>
      <Stack gap="xs" className={classes.bubbleCard}>
        <Text className="label-sm" style={{ fontWeight: 700 }}>
          4.9/5
        </Text>
        <Text className="label-sm" color="neutral.5">
          Ali Tufar / Designer
        </Text>
      </Stack>
    </Box>
  );
}
