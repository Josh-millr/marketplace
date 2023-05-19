import { useState } from 'react';
import { useSelector } from 'react-redux';
import { AppShell, Header } from '@mantine/core';

import { DesktopScreenCategoryMenu } from '@/features/categoryMenu';

import { useStyles } from './style.Marketplace';
import { MarketplaceFooter } from './MarketplaceFooter/MarketplaceFooter';
import { MarketplaceClientHeader } from './MarketplaceHeader/MarketplaceClientHeader';
import { MarketplaceClientNavBar } from './MarketplaceNavBar/MarketplaceClientNavBar';
import { MarketplaceFreelancerNavBar } from './MarketplaceNavBar/MarketplaceFreelancerNavBar';
import { MarketplaceFreelancerHeader } from './MarketplaceHeader/MarketplaceFreelancerHeader';



export function MarketplaceLayout({ layout, children }) {
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles();

  const { category } = useSelector((state) => state.general);

  let activeNavBar = null;
  if (layout === 'freelancer' && opened) {
    activeNavBar = <MarketplaceFreelancerNavBar />;
  } else if (layout === 'client' && opened) {
    activeNavBar = <MarketplaceClientNavBar />;
  }

  // let activeNavBar;
  // if (layout === 'freelancer') {
  //   activeNavBar = <MarketplaceFreelancerNavBar hidden={!opened} />;
  // }
  // if (layout === 'client') {
  //   activeNavBar = <MarketplaceClientNavBar hidden={!opened} />;
  // }

  let activeHeader;
  if (layout === 'freelancer') {
    activeHeader = (
      <MarketplaceFreelancerHeader isMenuOpen={opened} openMenu={setOpened} />
    );
  } else if (layout === 'client') {
    activeHeader = (
      <MarketplaceClientHeader isMenuOpen={opened} openMenu={setOpened} />
    );
  }

  const header = (
    <Header className={classes.wrapper} height={64}>
      {activeHeader}
    </Header>
  );

  const footer = <MarketplaceFooter />;

  return (
    <AppShell
      className={classes.main}
      padding={0}
      header={header}
      footer={footer}
      navbar={activeNavBar}
    >
      {layout === 'client' && (
        <DesktopScreenCategoryMenu list={category} />
      )}
      {children}
    </AppShell>
  );
}
