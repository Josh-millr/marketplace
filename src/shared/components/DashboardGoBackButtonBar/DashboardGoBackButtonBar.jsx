import { useRouter } from 'next/router';
import { ArrowLeft } from 'iconoir-react';
import { Flex, useMantineTheme, Button } from '@mantine/core';

import { iconCreator } from '@/shared/utils/iconCreator';

export function DashboardGoBackButtonBar() {
  const { colors } = useMantineTheme();
  const router = useRouter();

  return (
    <Flex py="xl">
      <Button
        onClick={() => router.back()}
        variant="subtle"
        leftIcon={iconCreator({
          icon: ArrowLeft,
          sizeOverride: 16,
          colorOverride: colors.brandPrimary[7],
        })}
      >
        Go back
      </Button>
    </Flex>
  );
}
