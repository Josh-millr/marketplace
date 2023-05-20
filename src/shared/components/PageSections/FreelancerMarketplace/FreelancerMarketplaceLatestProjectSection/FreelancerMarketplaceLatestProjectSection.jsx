/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useCallback } from 'react';
import { Stack, Title, Text, Button, Center } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { getProjectsApi } from '@/shared/services/getProjectsApi';

import { useFetchLazy } from '@/shared/hooks/useFetchLazy';
import { ProjectCard } from '@/shared/components/ProjectCard';

import { FreelancerMarketplaceProjectDetailsSection } from '../FreelancerMarketplaceProjectDetailsSection';

export function FreelancerMarketplaceLatestProjectSection() {
  const [opened, { open, close }] = useDisclosure(false);
  const [selectProject, setSelectedProject] = useState({});

  const { loadMore, resultLazy, maxResult } = useFetchLazy({
    initialBatchSize: 2,
    action: (limit) => getProjectsApi(limit),
  });

  const displayProjectDesc = useCallback(
    async (data) => {
      setSelectedProject(data);
      open();
    },
    [selectProject]
  );
  return (
    <Stack spacing="4xl" mt="lg">
      <Stack spacing={0}>
        <Title className="sub-h3">Latest Projects</Title>
        <Text color="neutral.6" className="subtitle-sm">
          Here is a curated list of latest projects that might catch your
          attention.
        </Text>
      </Stack>

      <FreelancerMarketplaceProjectDetailsSection
        opened={opened}
        close={close}
        data={selectProject}
      />

      <Stack spacing="md" w="100%" maw={1008}>
        {resultLazy.map((project, index) => (
          <ProjectCard
            key={project?.key || index}
            data={project ?? {}}
            selectProject={displayProjectDesc}
          />
        ))}
      </Stack>

      <Center my="4xl">
        <Button onClick={loadMore} disabled={maxResult} variant="outline">
          Load more
        </Button>
      </Center>
    </Stack>
  );
}
