import Link from 'next/link';
import { Text, useMantineTheme, Flex, Box } from '@mantine/core';
import { ArrowLeft } from 'iconoir-react';

import { iconCreator } from '@/shared/utils/iconCreator';

export function BackToMarketplace({ role }) {
  const { colors } = useMantineTheme();

  return (
    <Box px="lg" py="xl">
      <Link href={`/${role}/`}>
        <Flex wrap="nowrap" gap='sm' align='center'>
          {iconCreator({
            icon: ArrowLeft,
            sizeOverride: 16,
            colorOverride: colors.brandPrimary[7],
          })}
          <Text className="label-md" fw={'500!important'} c="brandPrimary.7">
            Go to marketplace
          </Text>
        </Flex>
      </Link>
    </Box>
  );
}
