import { useState } from 'react';
import { AppShell, Header } from '@mantine/core';

import { DashboardFooter } from './DashboardFooter/DashboardFooter';
import { DashboardHeader } from './DashboardHeader/DashboardHeader';
import { DashboardClientNavBar } from './DashboardNavBar/DashboardClientNavBar';
import { DashboardFreelancerNavBar } from './DashboardNavBar/DashboardFreelancerNavBar';

const styles = {
  main: { overflowX: 'hidden' },
};

export function DashboardLayout({ layout, children }) {
  const [opened, setOpened] = useState(false);

  let currentNavBar;
  if (layout === 'freelancer') {
    currentNavBar = (
      <DashboardFreelancerNavBar hidden={!opened} hide={setOpened} />
    );
  }
  if (layout === 'client') {
    currentNavBar = <DashboardClientNavBar hidden={!opened} hide={setOpened} />;
  }

  const header = (
    <Header height={64}>
      <DashboardHeader isMenuOpen={opened} openMenu={setOpened} />
    </Header>
  );
  const footer = <DashboardFooter />;

  return (
    <AppShell
      styles={styles}
      layout="alt"
      padding={0}
      navbar={currentNavBar}
      fixed={true}
      footer={footer}
      header={header}
    >
      {children}
    </AppShell>
  );
}
