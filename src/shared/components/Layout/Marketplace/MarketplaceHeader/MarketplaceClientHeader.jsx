import { memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import {
  Text,
  Group,
  Burger,
  Avatar,
  Divider,
  Center,
  Button,
  ActionIcon,
  Indicator,
  MediaQuery,
  useMantineTheme,
} from '@mantine/core';
import { Bell, Mail } from 'iconoir-react';

import { Search } from '@/features/search';
import { iconCreator } from '@/shared/utils/iconCreator';
import { PageContainer } from '@/shared/components/PageContainer';

export const MarketplaceClientHeader = memo(({ isMenuOpen, openMenu }) => {
  const router = useRouter();
  const { colors } = useMantineTheme();
  const { user } = useSelector((state) => state.user);

  const handleLocationCheck = () => {
    if (user.location === 'nigeria') {
      router.push('/freelancer/onboarding');
    } else {
      router.push('/location_error');
    }
  };

  return (
    <Center h="100%">
      <PageContainer layout="marketplace">
        <PageContainer.Marketplace>
          <Group position="apart">
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

              <MediaQuery smallerThan="lg" styles={{ display: 'none' }}>
                <Group spacing="xl">
                  <Divider orientation="vertical" />

                  <Button
                    variant="filled"
                    onClick={() =>
                      router.push('/dashboard/client/create-project')
                    }
                  >
                    Post Job
                  </Button>

                  <Button
                    variant="text"
                    style={{
                      border: 'none',
                      backgroundColor: 'transparent',
                      color: 'green',
                    }}
                    onClick={handleLocationCheck}
                  >
                    <Text className="link-sm">Become a seller</Text>
                  </Button>
                </Group>
              </MediaQuery>
            </Group>

            <Group spacing="xl">
              <MediaQuery smallerThan="lg" styles={{ display: 'none' }}>
                <Link href="/">
                  <Text className="link-sm">Dashboard</Text>
                </Link>
              </MediaQuery>

              <Search />

              <MediaQuery smallerThan="lg" styles={{ display: 'none' }}>
                <Group spacing="xl">
                  <Indicator
                    size={24}
                    disabled={false}
                    withBorder
                    inline
                    offset={3}
                    label="+2"
                  >
                    <ActionIcon variant="transparent">
                      {iconCreator({ icon: Mail, sizeOverride: 24 })}
                    </ActionIcon>
                  </Indicator>

                  <Indicator
                    size={14}
                    disabled={false}
                    withBorder
                    processing
                    inline
                    offset={4}
                  >
                    <ActionIcon variant="transparent">
                      {iconCreator({ icon: Bell, sizeOverride: 24 })}
                    </ActionIcon>
                  </Indicator>

                  {/*  TODO: Add user avatar link to account profile */}
                  <Avatar
                    src="https://picsum.photos/200"
                    radius={9999}
                    size="md"
                  />
                </Group>
              </MediaQuery>
            </Group>
          </Group>
        </PageContainer.Marketplace>
      </PageContainer>
    </Center>
  );
});
