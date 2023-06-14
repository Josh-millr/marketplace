import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import {
  Stack,
  Flex,
  Badge,
  Skeleton,
  Title,
  Text,
  MediaQuery,
} from '@mantine/core';

import { CustomSuspense } from '@/shared/components/CustomSuspense';
import { projectDemo } from '@/shared/constants/projectDemo';
import { PageContainer } from '@/shared/components/PageContainer';
import { displayNumberInNaira } from '@/shared/utils/displayNumberInNaira';
import { SectionEmptyBanner } from '@/shared/components/SectionEmptyBanner';
import { DashboardSectionCardNew } from '@/shared/components/DashboardSectionCardNew';
import { DashboardProposalCard } from '@/shared/components/DashboardProposalCard';
import { DashboardGoBackButtonBar } from '@/shared/components/DashboardGoBackButtonBar';

export default function Project() {
  const [project, setProject] = useState(projectDemo);
  const [coverLetter, setCoverLetter] = useState('');

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    // Fetch project information and update the data state...
  }, []);

  return (
    <PageContainer.Marketplace>
      <DashboardGoBackButtonBar />

      <DashboardSectionCardNew contentFullWidth padSection>
        <Stack spacing="2xl">
          <div>
            <CustomSuspense
              dependency={project?.status}
              fallback={<Skeleton width={80} height={120} radius={9999} />}
            >
              <Badge size="lg" variant="filled">
                {project?.status}
              </Badge>
            </CustomSuspense>
          </div>

          <Flex
            w="100%"
            direction={{ base: 'column', md: 'row' }}
            gap={{ base: 'xl', md: 0 }}
            justify={{ base: 'flex-start', md: 'space-between' }}
          >
            {/* ... Title goes here ... */}
            <CustomSuspense
              dependency={project?.title}
              fallback={<Skeleton width={80} height={80} />}
            >
              <Title className="h1" fw={'700!important'} maw={692}>
                {project?.title}
              </Title>
            </CustomSuspense>

            {/* ... Budget Price goes here ... */}
            <Flex direction="column" gap={{ base: 'sm', md: 'xl' }}>
              <CustomSuspense
                dependency={project?.budget}
                fallback={<Skeleton width={80} height={16} />}
              >
                <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
                  <Text className="h2" fw={'500!important'}>
                    {displayNumberInNaira(project?.budget || 0)}
                  </Text>
                </MediaQuery>
              </CustomSuspense>

              <CustomSuspense
                dependency={project?.budget}
                fallback={<Skeleton width={80} height={16} />}
              >
                <MediaQuery largerThan="md" styles={{ display: 'none' }}>
                  <Text className="h1" fw={'500!important'}>
                    {displayNumberInNaira(project?.budget || 0)}
                  </Text>
                </MediaQuery>
              </CustomSuspense>

              <CustomSuspense
                dependency={project?.pricingType}
                fallback={<Skeleton width={80} height={16} />}
              >
                <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
                  <Text className="label-lg" fw={'500!important'} c="neutral.6">
                    {project?.pricingType}
                  </Text>
                </MediaQuery>
              </CustomSuspense>

              <CustomSuspense
                dependency={project?.pricingType}
                fallback={<Skeleton width={80} height={16} />}
              >
                <MediaQuery largerThan="md" styles={{ display: 'none' }}>
                  <Text className="label-md" fw={'500!important'} c="neutral.6">
                    {project?.pricingType}
                  </Text>
                </MediaQuery>
              </CustomSuspense>
            </Flex>
          </Flex>
        </Stack>
      </DashboardSectionCardNew>

      <DashboardSectionCardNew contentFullWidth>
        {/* ... Proposals Received ... */}
      </DashboardSectionCardNew>
    </PageContainer.Marketplace>
  );
}
