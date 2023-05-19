import { useState } from 'react';
import { useRouter } from 'next/router';
import { useStyles } from './style.FreelancerOnboarding';
import { AppShell, Header } from '@mantine/core';

import { DesktopScreenCategoryMenu } from '@/features/categoryMenu';
import { FreelancerOnboardingFooter } from './FreelancerOnboardingFooter/FreelancerOnboardingFooter';
import { FreelancerOnboardingHeader } from './FreelancerOnboardingHeader/FreelancerOnboardingHeader';
import { FreelancerOnboardingNavBar } from './FreelancerOnboardingNavBar/FreelancerOnboardingNavBar';

export function FreelancerOnboardingLayout({ children }) {
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles();
  const router = useRouter();

  const showNavbar = router.pathname === '/form';

  const activeNavBar = showNavbar ? <FreelancerOnboardingNavBar /> : null;

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
      navbar={activeNavBar}
    >
      {showNavbar && <DesktopScreenCategoryMenu list={category} />}
      {children}
    </AppShell>
  );
}
