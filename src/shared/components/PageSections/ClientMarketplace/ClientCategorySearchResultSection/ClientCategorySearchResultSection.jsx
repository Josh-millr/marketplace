import { Button, Center, SimpleGrid } from '@mantine/core';

import { useFetchLazy } from '@/shared/hooks/useFetchLazy';
import { ServiceCard } from '@/shared/components/ServiceCard';
import { getServicesByCategory } from '@/shared/services/getServicesByCategory';

export function ClientCategorySearchResultSection({ id }) {
  const { loadMore, resultLazy, maxResult } = useFetchLazy({
    initialBatchSize: 2,
    action: (limit) => getServicesByCategory(limit, id),
  });

  return (
    <>
      <SimpleGrid
        cols={1}
        spacing="xl"
        verticalSpacing="xl"
        style={{ justifyItems: 'center' }}
        breakpoints={[
          { minWidth: 'xs', cols: 2, spacing: 'xl' },
          { minWidth: 'md', cols: 3, spacing: 'xl' },
          { minWidth: 'lg', cols: 4, spacing: 'xl' },
        ]}
      >
        {resultLazy.map((service, index) => (
          <ServiceCard key={service?.key || index} data={service ?? {}} />
        ))}
      </SimpleGrid>

      <Center my="4xl">
        <Button onClick={loadMore} disabled={maxResult}>
          Load more
        </Button>
      </Center>
    </>
  );
}
