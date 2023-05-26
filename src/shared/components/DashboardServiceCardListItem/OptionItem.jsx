/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, memo } from 'react';
import { Text, Flex, Skeleton, useMantineTheme } from '@mantine/core';

import { iconCreator } from '@/shared/utils/iconCreator';

import { CustomSuspense } from '../CustomSuspense';

export const OptionItem = memo(({ icon, label }) => {
  const { colors } = useMantineTheme();

  const createIcon = useCallback(
    (Icon) => ({
      icon: Icon,
      sizeOverride: 20,
      colorOverride: colors.neutral[7],
    }),
    []
  );

  return (
    <CustomSuspense
      dependency={label}
      fallback={<Skeleton height="12px" w="82px" />}
    >
      <Flex wrap="nowrap" gap="sm">
        {iconCreator(createIcon(icon))}
        <Text
          className="label-sm"
          c="neutral.7"
          tt="capitalize"
          fw={'500!important'}
        >
          {label}
        </Text>
      </Flex>
    </CustomSuspense>
  );
});
