import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import {
  Flex,
  Center,
  Space,
  Group,
  Burger,
  Button,
  NavLink,
  MediaQuery,
  useMantineTheme,
} from '@mantine/core';
import { PageContainer } from '@/shared/components/PageContainer';

export function MainHeader({ isMenuOpen, openMenu }) {
  const router = useRouter();
  const { colors } = useMantineTheme();

  return (
    <Center h="100%">
      <PageContainer layout="main">
        <PageContainer.Main>
          <Flex
            justify="flex-start"
            align="center"
            direction="row"
            wrap="nowrap"
          >
            <Group>
              <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                <Burger
                  mr="md"
                  size="sm"
                  opened={isMenuOpen}
                  color={colors.neutral[6]}
                  onClick={() => openMenu((o) => !o)}
                />
              </MediaQuery>

              <Link href="/">
                <Image
                  height={40}
                  width={115}
                  alt="hamzry logo"
                  src="/logo/hamzry/SVG/logo-hamzry-full-colored-115x40.svg"
                />
              </Link>
            </Group>

            <Space style={{ margin: 'auto' }} />

            <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
              <Flex
                gap="2xl"
                wrap="nowrap"
                align="center"
                direction="row"
                justify="center"
              >
                <Link href="/">
                  <NavLink variant="subtle" label="Become a Seller" />
                </Link>

                <Flex gap="sm" wrap="nowrap">
                  <Button
                    size="md"
                    variant="outline"
                    onClick={() => router.push('/login')}
                  >
                    Sign in
                  </Button>
                  <Button
                    size="md"
                    variant="filled"
                    onClick={() => router.push('/register')}
                  >
                    Join
                  </Button>
                </Flex>
              </Flex>
            </MediaQuery>
          </Flex>
        </PageContainer.Main>
      </PageContainer>
    </Center>
  );
}
