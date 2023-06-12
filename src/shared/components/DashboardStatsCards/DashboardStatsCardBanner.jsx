import { SimpleGrid } from '@mantine/core';

export function DashboardStatsCardBanner({ children }) {
  return (
    <SimpleGrid
      cols={4}
      py={{ base: 'lg', sm: '2xl' }}
      breakpoints={[
        { maxWidth: 'xs', cols: 1 },
        { maxWidth: 'md', cols: 2 },
        { maxWidth: 'lg', cols: 2 },
        { maxWidth: 'xl', cols: 1 },
      ]}
    >
      {children}
    </SimpleGrid>
  );
}
