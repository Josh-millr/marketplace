import Image from 'next/image';
import { Box, Center } from '@mantine/core';

import { useStyles } from './style.LogoHeader';

export function LogoHeader() {
  const { classes } = useStyles();

  return (
    <Box py="md" className={classes.wrapper}>
      <Center>
        <Image
          height={40}
          width={115}
          alt="hamzry logo"
          src="/logo/hamzry/SVG/logo-hamzry-full-colored-115x40.svg"
        />
      </Center>
    </Box>
  );
}
