import { memo } from 'react';
import Link from 'next/link';
import { NavArrowLeft } from 'iconoir-react';
import { Text, useMantineTheme, Flex, Box } from '@mantine/core';

import { iconCreator } from '@/shared/utils/iconCreator';

import { useStyles } from './style.BackToMarketplace';

export const BackToMarketplace = memo(({ role }) => {
  const { classes } = useStyles();
  const { colors } = useMantineTheme();

  return (
    <Box px="xl" py="md" className={classes.wrapper}>
      <Link href={`/${role}/`}>
        <Flex wrap="nowrap" gap="sm" align="center">
          {iconCreator({
            icon: NavArrowLeft,
            sizeOverride: 24,
            colorOverride: colors.brandPrimary[7],
          })}
          <Text className="label-md" fw={'500!important'} c="brandPrimary.7">
            Go Back Home
          </Text>
        </Flex>
      </Link>
    </Box>
  );
});
