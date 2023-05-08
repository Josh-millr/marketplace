import { useState } from 'react';
import { AppShell, Header } from '@mantine/core';

import { styles } from './style.Auth';

import { AuthNavBar } from './AuthNavBar/AuthNavBar';
import { AuthHeader } from './AuthHeader/AuthHeader';
import { AuthFooter } from './AuthFooter/AuthFooter';

export function AuthLayout({ children }) {
  const [opened, setOpened] = useState(false);

  const navBar = <AuthNavBar hidden={!opened} />;
  const footer = <AuthFooter />;
  const header = (
    <Header height={64}>
      <AuthHeader isMenuOpen={opened} openMenu={setOpened} />
    </Header>
  );

  return (
    <AppShell
      padding={0}
      styles={styles}
      header={header}
      navbar={navBar}
      footer={footer}
    >
      {children}
    </AppShell>
  );
}
