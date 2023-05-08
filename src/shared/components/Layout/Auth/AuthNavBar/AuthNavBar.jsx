import Link from 'next/link';

import {
  Navbar,
  NavLink,
  Divider,
  SimpleGrid,
  MediaQuery,
  useMantineTheme,
} from '@mantine/core';

import { PageContainer } from '@/shared/components/PageContainer';

export function AuthNavBar({ hidden }) {
  const { colors } = useMantineTheme();

  return (
    <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
      <Navbar
        pt="xl"
        hiddenBreakpoint="sm"
        hidden={hidden}
        width={{ sm: 200 }}
      >
        <PageContainer.Main>
          <SimpleGrid cols={1} verticalSpacing="lg" pb={40}>
            <Link href="/">
              <NavLink
                variant="subtle"
                label="Become a Seller"
                style={{ color: colors.brandPrimary[7] }}
              />
            </Link>

            <Divider />
            {/**
             *
             * Add other navigation links
             *
             * */}
          </SimpleGrid>
          <Divider />
        </PageContainer.Main>
      </Navbar>
    </MediaQuery>
  );
}
