/* eslint-disable react-hooks/exhaustive-deps */
import { Stack, Title, Text, Button, Center } from '@mantine/core';

import { getProjectsApi } from '@/shared/services/getProjectsApi';

import { useFetchLazy } from '@/shared/hooks/useFetchLazy';
import { ProjectCard } from '@/shared/components/ProjectCard';

export function FreelancerMarketplaceLatestProjectSection() {
  const { loadMore, resultLazy, maxResult } = useFetchLazy({
    initialBatchSize: 2,
    action: (limit) => getProjectsApi(limit),
  });

  return (
    <Stack spacing="4xl" mt="lg">
      <Stack spacing={0}>
        <Title className="sub-h3">Latest Projects</Title>
        <Text color="neutral.6" className="subtitle-sm">
          Here is a curated list of latest projects that might catch your
          attention.
        </Text>
      </Stack>

      <Stack spacing={0}>
        {resultLazy.map((project, index) => (
          <ProjectCard key={project?.key || index} data={project ?? {}} />
        ))}
      </Stack>

      <Center my="4xl">
        <Button onClick={loadMore} disabled={maxResult}>
          Load more
        </Button>
      </Center>
    </Stack>
  );
}
