import { useRouter } from 'next/router';
import { NavArrowLeft } from 'iconoir-react';
import { Flex, useMantineTheme, Button } from '@mantine/core';

import { iconCreator } from '@/shared/utils/iconCreator';

export function DashboardGoBackButtonBar() {
  const { colors } = useMantineTheme();
  const router = useRouter();

  const goToPreviousPage = () => {
    router.back();
  };

  const icon = iconCreator({
    icon: NavArrowLeft,
    sizeOverride: 16,
    colorOverride: colors.brandPrimary[7],
  });

  return (
    <Flex py="xl">
      <Button
        radius={9999}
        variant="light"
        leftIcon={icon}
        onClick={() => goToPreviousPage()}
      >
        Go back
      </Button>
    </Flex>
  );
}
