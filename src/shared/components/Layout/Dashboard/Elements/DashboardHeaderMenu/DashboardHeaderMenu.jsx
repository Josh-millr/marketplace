import Link from 'next/link';
import { useSelector } from 'react-redux';
import { ProfileCircle, LogOut } from 'iconoir-react';
import { Avatar, Menu, useMantineTheme, Text } from '@mantine/core';

import { useAuth } from '@/shared/hooks/useAuth';
import { iconCreator } from '@/shared/utils/iconCreator';

const IMAGE_PLACEHOLDER = 'https://picsum.photos/200';

export function DashboardHeaderMenu({ image }) {
  const { colors } = useMantineTheme();
  const { logout } = useAuth();

  const { user } = useSelector((state) => state.user);
  const { role } = user;

  return (
    <Menu
      shadow="md"
      width={200}
      position="bottom-end"
      offset={16}
      withArrow
      arrowPosition="center"
    >
      <Menu.Target>
        <Avatar
          src={image || IMAGE_PLACEHOLDER}
          size="lg"
          radius={9999}
          alt="users profile picture"
        />
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item icon={iconCreator({ icon: ProfileCircle, sizeOveride: 16 })}>
          <Link href={`/dashboard/${role}/profile`}>View Profile</Link>
        </Menu.Item>
        <Menu.Item
          icon={iconCreator({
            icon: LogOut,
            sizeOveride: 16,
            colorOveride: colors.danger[7],
          })}
        >
          <Text color="danger.7" onClick={() => logout()}>
            Log out
          </Text>
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
