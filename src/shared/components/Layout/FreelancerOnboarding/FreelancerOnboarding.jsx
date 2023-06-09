import { AppShell, Header } from "@mantine/core";

import { FreelancerOnboardingFooter } from "./FreelancerOnboardingFooter/FreelancerOnboardingFooter";
import { FreelancerOnboardingHeader } from "./FreelancerOnboardingHeader/FreelancerOnboardingHeader";
import { useStyles } from "./style.FreelancerOnboarding";

export function FreelancerOnboardingLayout({ children }) {
  const { classes } = useStyles();

  const header = (
    <Header className={classes.wrapper} height={64}>
      <FreelancerOnboardingHeader />
    </Header>
  );

  const footer = <FreelancerOnboardingFooter />;

  return (
    <AppShell
      padding={0}
      header={header}
      footer={footer}
      className={classes.main}
    >
      {children}
    </AppShell>
  );
}
