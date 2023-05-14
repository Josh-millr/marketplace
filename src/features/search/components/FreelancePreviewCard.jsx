import Link from 'next/link';
import { useRouter } from 'next/router';
import { ArrowRight } from 'iconoir-react';
import {
  ActionIcon,
  Avatar,
  Group,
  Stack,
  Text,
  Space,
  Skeleton,
} from '@mantine/core';

import { iconCreator } from '@/shared/utils/iconCreator';

export function FreelancePreviewCard({ name, img, job, link }) {
  const router = useRouter();

  return (
    <Link href={link || '#'}>
          <Group spacing="sm">
      {img ? (
        <Avatar size={48} radius={9999} src={img} />
      ) : (
        <Skeleton height={48} circle />
      )}

      <Stack spacing={0}>
        {name ? (
          <Text className="label-md" fw={'500!important'}>
            {name}
          </Text>
        ) : (
          <Skeleton mb={8} height={12} width={120} radius="xl" />
        )}

        {job ? (
          <Text className="label-md" c="neutral.6" fz="xs">
            {job}
          </Text>
        ) : (
          <Skeleton height={12} width={120} radius="xl" />
        )}
      </Stack>

      <Space ml="auto" />

      <div style={{ marginRight: '16px' }}>
        {link ? (
          <ActionIcon onClick={() => router.push(`${link}`)}>
            {iconCreator({ icon: ArrowRight, sizeOveride: 16 })}
          </ActionIcon>
        ) : (
          <Skeleton height={24} width={24} radius="sm" />
        )}
      </div>
    </Group>
    </Link>
  );
}
