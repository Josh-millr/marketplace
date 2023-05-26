import { useState } from 'react';
import { Flex, Pagination } from '@mantine/core';

export function SectionPagination() {
  const [activePage, setActivePage] = useState(1);

  // TODO: Add the logic for pagination
  return (
    <Flex w="100%" justify="center" p="xl">
      <Pagination
        withEdges
        total={10}
        size="md"
        radius="xl"
        value={activePage}
        onChange={setActivePage}
      />
    </Flex>
  );
}
