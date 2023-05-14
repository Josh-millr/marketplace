import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import {
  Text,
  Flex,
  Group,
  Space,
  Burger,
  Avatar,
  Badge,
  Center,
  Divider,
  Button,
  MediaQuery,
  useMantineTheme,
} from '@mantine/core';
import { BellNotification } from 'iconoir-react';

import { Search } from '@/features/search';
import { PageContainer } from '@/shared/components/PageContainer';

export function MarketplaceClientHeader({ isMenuOpen, openMenu }) {
  const { colors } = useMantineTheme();

  const router = useRouter();

  return (
    <Center h="100%">
      <PageContainer layout="marketplace">
        <PageContainer.Marketplace>
          <Flex
            justify="flex-start"
            align="center"
            direction="row"
            wrap="nowrap"
          >
            <Group spacing="xl">
              <MediaQuery largerThan="lg" styles={{ display: 'none' }}>
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

            <Search />

            <MediaQuery smallerThan="lg" styles={{ display: 'none' }}>
              <Group spacing="xl">
                <Button
                  variant="filled"
                  onClick={() =>
                    router.push('/dashboard/client/create-project')
                  }
                >
                  Post Job
                </Button>

                {/* <Divider orientation="vertical" /> */}

                <Link href="/dashboard/client/">
                  <Text className="link-sm">My Dashboard</Text>
                </Link>

                <Group spacing="sm">
                  <Badge variant="filled" size="sm">
                    3+
                    {/* TODO: fetch new message count */}
                  </Badge>
                  <Text className="link-sm">Messages</Text>
                </Group>

                <Divider orientation="vertical" />

                <Link href="/">
                  <Text className="link-sm">Become a seller</Text>
                </Link>

                {/* TODO: Add notification feature */}
                <BellNotification width={20} height={20} />

                {/*  TODO: Add user avatar link to account profile */}
                <Avatar
                  src="https://picsum.photos/200"
                  radius={9999}
                  size="md"
                />
              </Group>
            </MediaQuery>
          </Flex>
        </PageContainer.Marketplace>
      </PageContainer>
    </Center>
  );
}
