import Link from 'next/link';
import Capitalize from 'lodash/capitalize';
import { Text, Skeleton } from '@mantine/core';

export function ListCard({ link, name }) {
  return (
    <Link href={link || '#'}>
      {name ? (
        <Text className="label-lg" mb={4}>
          {Capitalize(name)}
        </Text>
      ) : (
        <Skeleton width={120} height={8} />
      )}
    </Link>
  );
}
