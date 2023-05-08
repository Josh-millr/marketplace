import Image from 'next/image';
import { useRouter } from 'next/router';

import {
  Box,
  Flex,
  Group,
  Space,
  Button,
  Center,
  Burger,
  MediaQuery,
  useMantineTheme,
} from '@mantine/core';

import { PageContainer } from '@/shared/components/PageContainer';

export function AuthHeader({ isMenuOpen, openMenu }) {
  const { colors } = useMantineTheme();

  const router = useRouter();
  const activeRoute = router.pathname;
  const nextToRoutePath = activeRoute === '/login' ? '/register' : '/login';
  const nextToRouteName = activeRoute === '/login' ? 'Register' : 'Login';

  return (
    <Center h="100%">
      <PageContainer layout="main">
        <PageContainer.Auth>
          <Flex
            justify="flex-start"
            align="center"
            direction="row"
            wrap="nowrap"
          >
            <Group>
              <MediaQuery largerThan="md" styles={{ display: 'none' }}>
                <Burger
                  mr="md"
                  size="sm"
                  opened={isMenuOpen}
                  color={colors.gray[6]}
                  onClick={() => openMenu((o) => !o)}
                />
              </MediaQuery>

              <Image
                height={40}
                width={115}
                alt="hamzry brand logo"
                src="/logo/hamzry/SVG/logo-hamzry-full-colored-115x40.svg"
              />
            </Group>

            <Space style={{ margin: 'auto' }} />

            <Flex gap="sm" wrap="nowrap">
              <Box style={{ display: 'block' }}>
                <Button
                  size="md"
                  variant="outline"
                  onClick={() => router.push(nextToRoutePath)}
                >
                  {nextToRouteName}
                </Button>
              </Box>
            </Flex>
          </Flex>
        </PageContainer.Auth>
      </PageContainer>
    </Center>
  );
}
