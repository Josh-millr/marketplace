import Link from 'next/link';
import { NavArrowRight } from 'iconoir-react';
import { Avatar, Group, Text, Skeleton } from '@mantine/core';

import { iconCreator } from '@/shared/utils/iconCreator';
import { CustomSuspense } from '@/shared/components/CustomSuspense';

export function FreelancePreviewCard({ name, img, job, href }) {
  return (
    <Link href={href || '#'}>
      <Group position="apart">
        <Group spacing="md" position="apart">
          <CustomSuspense
            fallback={img}
            dependency={<Skeleton height={48} circle />}
          >
            <Avatar size={48} radius={9999} src={img} />
          </CustomSuspense>

          <div>
            <CustomSuspense
              dependency={name}
              fallback={<Skeleton mb={8} height={12} width={120} radius="xl" />}
            >
              <Text className="label-md" tt="capitalize">
                {name}
              </Text>
            </CustomSuspense>

            <CustomSuspense
              fallback={job}
              dependency={<Skeleton height={12} width={120} radius="xl" />}
            >
              <Text className="label-md" c="neutral.6" tt="capitalize">
                {job}
              </Text>
            </CustomSuspense>
          </div>
        </Group>

        <CustomSuspense
          fallback={href}
          dependency={<Skeleton height={24} width={24} radius="sm" />}
        >
          {iconCreator({ icon: NavArrowRight, sizeOveride: 20 })}
        </CustomSuspense>
      </Group>
    </Link>
  );
}
