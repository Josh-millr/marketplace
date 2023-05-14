import Link from 'next/link';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Settings, LogOut } from 'iconoir-react';
import { useViewportSize } from '@mantine/hooks';
import {
  Flex,
  Navbar,
  Button,
  Stack,
  NavLink,
  Divider,
  SimpleGrid,
  MediaQuery,
  useMantineTheme,
  ScrollArea,
  Space,
} from '@mantine/core';

import { iconCreator } from '@/shared/utils/iconCreator';
import { displayFullName } from '@/shared/utils/displayFullName';
import { PageContainer } from '@/shared/components/PageContainer';
import { MobileScreenCategoryMenu } from '@/features/categoryMenu';

import { ProfilePrevMenuCard, NotificationTypeLink } from '../Elements';

export function MarketplaceClientNavBar({ hidden }) {
  const router = useRouter();
  const { user } = useSelector((state) => state.user);
  const { category } = useSelector((state) => state.general);

  const { height } = useViewportSize();
  const { colors } = useMantineTheme();

  const { firstname, lastname, role, profileImg } = user;
  const fullname = displayFullName({ firstname, lastname });

  return (
    <MediaQuery largerThan="lg" styles={{ display: 'none' }}>
      <Navbar height={height} pt="xl" hiddenBreakpoint="lg" hidden={hidden}>
        <Navbar.Section grow component={ScrollArea}>
          <PageContainer.Marketplace>
            <SimpleGrid cols={1} verticalSpacing="lg" pb={40}>
              <Stack spacing="xl">
                <ProfilePrevMenuCard
                  name={fullname}
                  role={role}
                  img={profileImg || 'https://picsum.photos/200'}
                />

                <Flex gap="sm" wrap="nowrap">
                  <Button
                    fullWidth
                    size="md"
                    variant="filled"
                    onClick={() =>
                      router.push('/dashboard/client/create-project')
                    }
                  >
                    Post a Job
                  </Button>
                  <Button
                    fullWidth
                    size="md"
                    variant="outline"
                    onClick={() => router.push('#')}
                  >
                    View Profile
                  </Button>
                </Flex>
              </Stack>

              <Divider />

              <Stack spacing="lg">
                {/* Action links */}

                <Link href="/">
                  <NavLink
                    fw={700}
                    variant="subtle"
                    label="Become a Seller"
                    style={{ color: colors.brandPrimary[7] }}
                  />
                </Link>
              </Stack>

              <Divider />

              <Stack spacing="">
                {/* Category menu */}
                <MobileScreenCategoryMenu list={category} />
              </Stack>

              <Divider />

              <Stack spacing="md">
                {/* Notification links */}
                <Link href="/dashboard/client/">
                  <NavLink variant="subtle" label="My Dashboard" />
                </Link>

                {/* Messsage link */}
                <Link href="/dashboard/client/message">
                  <NotificationTypeLink label="Messages" count={3} />
                </Link>

                {/* Notification link */}
                <NotificationTypeLink label="Notifications" count={6} />
              </Stack>

              <Divider />

              <Stack spacing="lg">
                {/* Account Actions */}

                {/* Settings */}
                <NavLink
                  label="Settings"
                  icon={iconCreator({
                    icon: Settings,
                  })}
                />

                {/* Logout */}
                <NavLink
                  label="Logout"
                  variant="subtle"
                  icon={iconCreator({
                    icon: LogOut,
                  })}
                />
              </Stack>

              <Divider />
            </SimpleGrid>
          </PageContainer.Marketplace>
          <Space h="8xl" />
        </Navbar.Section>
      </Navbar>
    </MediaQuery>
  );
}
