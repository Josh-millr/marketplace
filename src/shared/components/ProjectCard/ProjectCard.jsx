import { Flex, Divider, Text, Title, Stack, Group } from '@mantine/core';

import { CustomSuspense } from '../CustomSuspense';

export function ProjectCard({ data }) {
  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      gap={{ base: 'xl', sm: '4xl' }}
    >
      <div>
        <Stack spacing=""></Stack>
      </div>

      <div>{/* The Button */}</div>
    </Flex>
  );
}
