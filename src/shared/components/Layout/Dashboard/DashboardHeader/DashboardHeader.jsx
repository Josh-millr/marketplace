import Image from 'next/image';
import {
  Box,
  Flex,
  Grid,
  Burger,
  MediaQuery,
  useMantineTheme,
} from '@mantine/core';

// import { DashboardHeaderMenu } from '../Elements';
import { useStyles } from './style.Header';

export function DashboardHeader({ openMenu, isMenuOpen }) {
  const { classes } = useStyles();
  const { colors } = useMantineTheme();

  return (
    <Box px="xl">
      <Grid justify="center" align="center">
        <Grid.Col span="auto" orderMd={2}>
          <Box h={64} w={64}>
            <Flex align="center" w="100%" h="100%">
              <MediaQuery largerThan="md" styles={{ display: 'none' }}>
                <Burger
                  mr="md"
                  size="sm"
                  opened={isMenuOpen}
                  color={colors.gray[6]}
                  onClick={() => openMenu((o) => !o)}
                />
              </MediaQuery>
            </Flex>
          </Box>
        </Grid.Col>

        <Grid.Col span={6} md={2.4} orderMd={1}>
          <MediaQuery largerThan="md" styles={{ display: 'none' }}>
            <Box className={classes.imageWrapper}>
              <Image
                height={40}
                width={115}
                alt="hamzry brand logo"
                className={classes.logo}
                src="/logo/hamzry/SVG/logo-hamzry-full-colored-115x40.svg"
              />
            </Box>
          </MediaQuery>
        </Grid.Col>

        <Grid.Col span="auto" orderMd={3}>
          <Flex h={64} w={64} ml="auto" my="auto" align="center">
            {/* <DashboardHeaderMenu /> */}
          </Flex>
        </Grid.Col>
      </Grid>
    </Box>
  );
}
