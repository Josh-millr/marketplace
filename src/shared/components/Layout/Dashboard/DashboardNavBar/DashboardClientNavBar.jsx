import Image from 'next/image';
import { useViewportSize } from '@mantine/hooks';
import {
  Navbar,
  Flex,
  ScrollArea,
  Divider,
  Space,
  MediaQuery,
  Group,
  CloseButton,
} from '@mantine/core';

import { buyerDashboardLinks } from '@/shared/constants/dashboardLinks';

import { NavItem } from '../Elements/NavItem/NavItem';
import { NavSectionTitle } from '../Elements/NavSectionTitle/NavSectionTitle';

export function DashboardClientNavBar({ hidden, hide }) {
  const { height } = useViewportSize();

  return (
    <Navbar height={height} width={{ md: 224 }} hidden={hidden}>
      <Navbar.Section>
        <Group position="apart" px="xl" py="md">
          <Image
            height={40}
            width={115}
            alt="hamzry brand logo"
            src="/logo/hamzry/SVG/logo-hamzry-full-colored-115x40.svg"
          />

          <MediaQuery largerThan="md" styles={{ display: 'none' }}>
            <CloseButton
              size="sm"
              aria-label="Close modal"
              iconSize={24}
              onClick={() => hide(false)}
            />
          </MediaQuery>
        </Group>
        <Divider />
      </Navbar.Section>
      <Navbar.Section grow component={ScrollArea} pr="sm">
        <Flex direction="column" gap={{ base: '0px', md: 'xl' }}>
          <div>
            <NavSectionTitle title="Start" />
            {/* start Links */}
            {buyerDashboardLinks.slice(0, 7).map(({ title, link, icon }) => (
              <NavItem key={title} title={title} link={link} icon={icon} />
            ))}
          </div>

          {/* organize Manage Links */}
          {/* <div>
            <NavSectionTitle title="Organize and Manage" />
            {buyerDashboardLinks.slice(7, 9).map(({ title, link, icon }) => (
              <NavItem key={title} title={title} link={link} icon={icon} />
            ))}
          </div> */}

          {/* accounts Links */}
          {/* <div>
            <NavSectionTitle title="Account" />
            {buyerDashboardLinks.slice(7, 9).map(({ title, link, icon }) => (
              <NavItem key={title} title={title} link={link} icon={icon} />
            ))}
          </div> */}
        </Flex>
        <Space h={100} />
      </Navbar.Section>
    </Navbar>
  );
}
