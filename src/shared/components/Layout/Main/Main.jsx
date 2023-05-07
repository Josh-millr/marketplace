import { useState } from 'react';
import { AppShell, Header } from '@mantine/core';

import { styles } from './style.Main';

import { MainHeader } from './MainHeader/MainHeader';
import { MainFooter } from './MainFooter/MainFooter';
import { MainNavBar } from './MainNavBar/MainNavBar';

export function MainLayout({ children }) {
  const [opened, setOpened] = useState(false);

  const navBar = <MainNavBar hidden={!opened} />;
  const footer = <MainFooter />;
  const header = (
    <Header height={64}>
      <MainHeader isMenuOpen={opened} openMenu={setOpened} />
    </Header>
  );

  return (
    <AppShell
      styles={styles}
      padding={0}
      header={header}
      navbar={navBar}
      footer={footer}
    >
      {children}
    </AppShell>
  );
}
