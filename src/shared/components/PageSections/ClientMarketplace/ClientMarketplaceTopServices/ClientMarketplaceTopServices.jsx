/* eslint-disable react-hooks/exhaustive-deps */
import { Stack, Title, Text, Button, Center, SimpleGrid } from '@mantine/core';

import { useFetchLazy } from '@/shared/hooks/useFetchLazy';
import { ServiceCard } from '@/shared/components/ServiceCard';
import { getServicesApi } from '@/shared/services/getServicesApi';

export function ClientMarketplaceTopServices() {
  const { loadMore, resultLazy } = useFetchLazy({
    initialBatchSize: 2,
    action: (limit) => getServicesApi(limit),
  });

  return (
    <Stack spacing="4xl" mt="lg">
      <Stack spacing={0}>
        <Title className="sub-h3">Top Services You May Need</Title>
        <Text color="neutral.6" className="subtitle-sm">
          Here is a curated list of top services that might catch your
          attention.
        </Text>
      </Stack>

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
        <Button onClick={loadMore}>Load more</Button>
      </Center>
    </Stack>
  );
}
