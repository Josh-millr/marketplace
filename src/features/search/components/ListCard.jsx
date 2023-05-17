import Link from 'next/link';
import { NavArrowRight } from 'iconoir-react';
import { Text, Skeleton, Group } from '@mantine/core';

import { iconCreator } from '@/shared/utils/iconCreator';
import { CustomSuspense } from '@/shared/components/CustomSuspense';

export function ListCard({ href, label }) {
  return (
    <Link href={href || '#'}>
      <CustomSuspense
        dependency={label}
        fallback={<Skeleton width={120} height={12} />}
      >
        <Group position="apart">
          <Text className="label-lg" tt="capitalize">
            {label}
          </Text>
          {iconCreator({ icon: NavArrowRight })}
        </Group>
      </CustomSuspense>
    </Link>
  );
}
