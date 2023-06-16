import { Box } from "@mantine/core";
import { v4 as uuidv4 } from "uuid";

import { PageContainer } from "@/shared/components/PageContainer";
import { DashboardPageHeader } from "@/shared/components/DashboardPageHeader";
import { DashboardSectionCard } from "@/shared/components/DashboardSectionCard";
import { DashboardProposalPreviewCard } from "@/shared/components/DashboardProposalPreviewCard";
import { dashboardProposalsPreviewDemo } from "@/shared/constants/dashboardProposalsPreviewDemo";

function Proposals() {
  return (
    <PageContainer.Marketplace>
      <DashboardPageHeader title="Proposals" />

      <DashboardSectionCard
        title="Received Proposals"
        withTitle
        contentFullWidth
      >
        <Box>
          {dashboardProposalsPreviewDemo.map((proposal) => {
            const itemId = uuidv4();
            return (
              <DashboardProposalPreviewCard
                key={itemId}
                cost={proposal.cost}
                category={proposal.category}
                projectTitle={proposal.projectTitle}
                deliveryTime={proposal.deliveryTime}
                submissionDate={proposal.submissionDate}
                authorName={proposal.author.name}
                status={proposal.status}
              />
            );
          })}
        </Box>
      </DashboardSectionCard>
    </PageContainer.Marketplace>
  );
}

export async function getStaticProps() {
  return { props: {} };
}

export default Proposals;
