import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Flex,
  Navbar,
  Button,
  NavLink,
  Divider,
  SimpleGrid,
  MediaQuery,
  useMantineTheme,
} from '@mantine/core';
import { PageContainer } from '@/shared/components/PageContainer';

export function MainNavBar({ hidden }) {
  const router = useRouter();
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

            <Flex gap="sm" wrap="nowrap">
              <Button
                fullWidth
                size="md"
                variant="outline"
                onClick={() => router.push('/login')}
              >
                Login
              </Button>
              <Button
                fullWidth
                size="md"
                variant="filled"
                onClick={() => router.push('/register')}
              >
                Join
              </Button>
            </Flex>
          </SimpleGrid>
          <Divider />
        </PageContainer.Main>
      </Navbar>
    </MediaQuery>
  );
}
