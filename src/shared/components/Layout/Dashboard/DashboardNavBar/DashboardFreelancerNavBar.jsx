import { useViewportSize } from '@mantine/hooks';
import { Navbar, Flex, ScrollArea } from '@mantine/core';

import { sellerDashboardLinks } from '@/shared/constants/dashboardLinks';

import { NavItem } from '../Elements/NavItem/NavItem';
import { NavSectionTitle } from '../Elements/NavSectionTitle/NavSectionTitle';

export function DashboardFreelancerNavBar({ hidden }) {
  const { height } = useViewportSize();

  return (
    <Navbar height={height} width={{ md: 224 }} hidden={hidden}>
      <Navbar.Section grow component={ScrollArea} pr="sm">
        <Flex direction="column" gap={{ base: '0px', md: 'xl' }}>
          <div>
            <NavSectionTitle title="Start" />
            {/* start Links */}
            {sellerDashboardLinks.slice(0, 7).map(({ title, link, icon }) => (
              <NavItem key={title} title={title} link={link} icon={icon} />
            ))}
          </div>

          <div>
            <NavSectionTitle title="Organize and Manage" />
            {/* organize Manage Links */}
            {sellerDashboardLinks.slice(7, 9).map(({ title, link, icon }) => (
              <NavItem key={title} title={title} link={link} icon={icon} />
            ))}
          </div>

          <div>
            <NavSectionTitle title="Account" />
            {/* accounts Links */}
            {sellerDashboardLinks.slice(7, 9).map(({ title, link, icon }) => (
              <NavItem key={title} title={title} link={link} icon={icon} />
            ))}
          </div>
        </Flex>
      </Navbar.Section>
    </Navbar>
  );
}
