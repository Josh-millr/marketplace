import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Stack, Flex, Badge, Skeleton } from '@mantine/core';

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
        <Stack spacing={{ base: 'xl', md: '2xl' }}>
          <div>
            <CustomSuspense
              dependency={project?.status}
              fallback={<Skeleton width={80} height={120} radius={9999} />}
            >
              <Badge size="xl" variant="filled">
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

            {/* ... Budget Price goes here ... */}
          </Flex>
        </Stack>
      </DashboardSectionCardNew>

      <DashboardSectionCardNew contentFullWidth>
        {/* ... Proposals Received ... */}
      </DashboardSectionCardNew>
    </PageContainer.Marketplace>
  );
}
