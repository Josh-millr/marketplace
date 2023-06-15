import { useState } from 'react';
import { Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { projectDemo } from '@/shared/constants/projectDemo';
import { PageContainer } from '@/shared/components/PageContainer';
import { SectionEmptyBanner } from '@/shared/components/SectionEmptyBanner';
import { DashboardPageHeader } from '@/shared/components/DashboardPageHeader';
import { DashboardProposalCard } from '@/shared/components/DashboardProposalCard';
import { DashboardSectionCardNew } from '@/shared/components/DashboardSectionCardNew';
import { dashboardProposalsPreviewDemo } from '@/shared/constants/dashboardProposalsPreviewDemo';

function Proposals() {
  const [proposals, setProposals] = useState(projectDemo.proposals || []);
  const [coverLetter, setCoverLetter] = useState('');
  const [opened, { open, close }] = useDisclosure();

  const displayCoverLetter = async (letter) => {
    setCoverLetter(letter);
    open();
  };

  return (
    <PageContainer.Marketplace>
      <DashboardPageHeader title="Proposals" />

      <DashboardSectionCardNew contentFullWidth title="Proposals Pending">
        <Drawer
          opened={opened}
          onClose={close}
          title="Cover Letter"
          position="right"
          size={'xl'}
        >
          {coverLetter}
        </Drawer>

        {/* ... Proposals Received ... */}
        {proposals.length !== 0 ? (
          proposals.map((proposal) => (
            <DashboardProposalCard
              cost={proposal?.cost}
              status={proposal?.status}
              key={proposal?.proposalId}
              category={proposal?.category}
              authorId={proposal?.proposalId}
              authorName={proposal?.author?.name}
              coverLetter={proposal?.coverLetter}
              showCoverLetter={displayCoverLetter}
              deliveryTime={proposal?.deliveryTime}
              submissionDate={proposal?.submissionDate}
            />
          ))
        ) : (
          <SectionEmptyBanner sectionLabel="Proposals" />
        )}
      </DashboardSectionCardNew>
    </PageContainer.Marketplace>
  );
}

export async function getStaticProps() {
  return { props: {} };
}

export default Proposals;
