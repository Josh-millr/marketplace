// import { useState } from 'react';
import { AppShell, Header } from '@mantine/core';
// import { useRouter } from 'next/router';

// import { DesktopScreenCategoryMenu } from '@/features/categoryMenu';

import { FreelancerOnboardingFooter } from './FreelancerOnboardingFooter/FreelancerOnboardingFooter';
import { FreelancerOnboardingHeader } from './FreelancerOnboardingHeader/FreelancerOnboardingHeader';
import { useStyles } from './style.FreelancerOnboarding';

export function FreelancerOnboardingLayout({ children }) {
  // const [opened, setOpened] = useState(false);
  const { classes } = useStyles();
  // const router = useRouter();

  // const showNavbar = router.pathname === '/form';

  // const activeNavBar = showNavbar ? <FreelancerOnboardingNavBar /> : null;

  const header = (
    <Header className={classes.wrapper} height={64}>
      <FreelancerOnboardingHeader />
    </Header>
  );

  const footer = <FreelancerOnboardingFooter />;

  return (
    <AppShell
      className={classes.main}
      padding={0}
      header={header}
      footer={footer}
      // navbar={activeNavBar}
    >
      {/* {showNavbar && <DesktopScreenCategoryMenu list={category} />} */}
      {children}
    </AppShell>
  );
}
