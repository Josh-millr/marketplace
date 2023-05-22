import { SimpleGrid } from '@mantine/core';

export function DashboardStatsCardBanner({ children }) {
  return (
    <SimpleGrid
      py={{ base: 'lg', sm: '2xl' }}
      cols={4}
      breakpoints={[
        { maxWidth: 'md', cols: 2 },
        { maxWidth: 'xs', cols: 1 },
      ]}
    >
      {children}
    </SimpleGrid>
  );
}
