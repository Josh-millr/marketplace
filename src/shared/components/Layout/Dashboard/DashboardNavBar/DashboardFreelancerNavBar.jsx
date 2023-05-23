import { useViewportSize } from '@mantine/hooks';
import { Navbar, Flex, ScrollArea } from '@mantine/core';

import { freelancerDashboardLinks } from '@/shared/constants/dashboardLinks';

import {
  NavItem,
  NavSectionTitle,
  BackToMarketplace,
  DashboardNavBarMobileHeader,
} from '../Elements';

export function DashboardFreelancerNavBar({ hidden, hide }) {
  const { height } = useViewportSize();

  return (
    <Navbar height={height} width={{ md: 224 }} hidden={hidden}>
      <Navbar.Section>
        <DashboardNavBarMobileHeader hide={hide} />
      </Navbar.Section>

      <Navbar.Section>
        <BackToMarketplace role="freelancer" />
      </Navbar.Section>

      <Navbar.Section grow component={ScrollArea} pr="sm">
        <Flex direction="column" gap={{ base: '0px', md: 'xl' }}>
          <div>
            <NavSectionTitle title="Start" />
            {/* start Links */}
            {freelancerDashboardLinks.slice(0, 7).map(({ title, link, icon }) => (
              <NavItem key={title} title={title} link={link} icon={icon} />
            ))}
          </div>

          <div>
            <NavSectionTitle title="Organize and Manage" />
            {/* organize Manage Links */}
            {/* {freelancerDashboardLinks.slice(7, 9).map(({ title, link, icon }) => (
              <NavItem key={title} title={title} link={link} icon={icon} />
            ))} */}
          </div>

          <div>
            <NavSectionTitle title="Account" />
            {/* accounts Links */}
            {freelancerDashboardLinks.slice(7, 9).map(({ title, link, icon }) => (
              <NavItem key={title} title={title} link={link} icon={icon} />
            ))}
          </div>
        </Flex>
      </Navbar.Section>
    </Navbar>
  );
}
