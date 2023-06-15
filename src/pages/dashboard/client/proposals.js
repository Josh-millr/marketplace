import { Box } from '@mantine/core';

import { PageContainer } from '@/shared/components/PageContainer';
import { DashboardPageHeader } from '@/shared/components/DashboardPageHeader';
import { DashboardSectionCard } from '@/shared/components/DashboardSectionCard';
import { DashboardProposalPreviewCard } from '@/shared/components/DashboardProposalPreviewCard';
import { dashboardProposalsPreviewDemo } from '@/shared/constants/dashboardProposalsPreviewDemo';
import { DashboardProposalCard } from '@/shared/components/DashboardProposalCard';

function Proposals() {
  return (
    <PageContainer.Marketplace>
      <DashboardPageHeader title="Proposals" />

      <DashboardSectionCard
        title="Received Proposals"
        withTitle
        contentFullWidth
      >
        <Box>{/* ... Proposal Cards ... */}</Box>
      </DashboardSectionCard>
    </PageContainer.Marketplace>
  );
}

export async function getStaticProps() {
  return { props: {} };
}

export default Proposals;
