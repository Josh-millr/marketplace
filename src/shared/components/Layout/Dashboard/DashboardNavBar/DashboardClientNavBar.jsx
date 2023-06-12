import { memo } from 'react';
import { useViewportSize } from '@mantine/hooks';
import { Navbar, Flex, ScrollArea, Space } from '@mantine/core';

import { clientDashboardLinks } from '@/shared/constants/dashboardLinks';

import {
  NavItem,
  NavSectionTitle,
  DashboardNavBarMobileHeader,
} from '../Elements';

export function DashboardClientNavBar({ hidden, hide }) {
  const { height } = useViewportSize();

  return (
    <Navbar height={height} width={{ md: 224 }} hidden={hidden}>
      <Navbar.Section>
        <DashboardNavBarMobileHeader hide={hide} />
      </Navbar.Section>

      <Navbar.Section grow component={ScrollArea} pr="sm">
        <Flex direction="column" gap={{ base: '0px', md: 'xl' }}>
          <div>
            <NavSectionTitle title="Start" />
            {/* Start Links */}
            {clientDashboardLinks.slice(0, 7).map(({ title, link, icon }) => (
              <NavItem key={title} title={title} link={link} icon={icon} />
            ))}
          </div>

          {/* Organize Manage Links */}
          <div>
            <NavSectionTitle title="Organize and Manage" />
            {clientDashboardLinks.slice(7, 8).map(({ title, link, icon }) => (
              <NavItem key={title} title={title} link={link} icon={icon} />
            ))}
          </div>
        </Flex>
        <Space h={100} />
      </Navbar.Section>
    </Navbar>
  );
}
