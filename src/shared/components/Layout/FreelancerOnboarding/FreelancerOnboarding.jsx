import { useState } from 'react';
import { useSelector } from 'react-redux';
import { AppShell, Header } from '@mantine/core';

import { DesktopScreenCategoryMenu } from '@/features/categoryMenu';
import { useStyles } from './style.FreelancerOnboarding';
import { FreelancerOnboardingFooter } from './FreelancerOnboardingFooter/FreelancerOnboardingFooter';
import { FreelancerOnboardingHeader } from './FreelancerOnboardingHeader/FreelancerOnboardingHeader';

export function FreelancerOnboardingLayout({ children }) {
  const { category } = useSelector((state) => state.general);
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles();

  const activeHeader = (
    <FreelancerOnboardingHeader isMenuOpen={opened} openMenu={setOpened} />
  );

  const header = (
    <Header className={classes.wrapper} height={64}>
      {activeHeader}
    </Header>
  );

  const footer = <FreelancerOnboardingFooter />;

  return (
    <AppShell
      className={classes.main}
      padding={0}
      header={header}
      footer={footer}
    >
      <DesktopScreenCategoryMenu list={category} />
      {children}
    </AppShell>
  );
}
