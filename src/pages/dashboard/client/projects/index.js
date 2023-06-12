import { useRouter } from 'next/router';
import { Box } from '@mantine/core';
import { useSelector } from 'react-redux';

import { PageContainer } from '@/shared/components/PageContainer';
import { DashboardPageHeader } from '@/shared/components/DashboardPageHeader';
import { DashboardSectionCardNew } from '@/shared/components/DashboardSectionCardNew';
import { dashboardProjectPreviewDemo } from '@/shared/constants/dashboardProjectPreviewDemo';
import { DashboardProjectPreviewCard } from '@/shared/components/DashboardProjectPreviewCard';

function Projects() {
  const router = useRouter();

  const { user } = useSelector((state) => state.user);
  const { role } = user;

  return (
    <PageContainer.Marketplace>
      <DashboardPageHeader
        title="My Projects"
        showButton
        btnLabel="Create Project"
        action={() => {
          router.push(`/dashboard/${role}/projects/create-projects`);
        }}
      />

      <DashboardSectionCardNew title="Active Projects" contentFullWidth>
        <Box>
          {dashboardProjectPreviewDemo.map((project) => (
            <DashboardProjectPreviewCard
              id={project.id}
              key={project.id}
              cost={project.cost}
              title={project.title}
              expires={project.expires}
              created={project.created}
              priceType={project.pricingType}
              proposalsReceived={project.proposalsReceived}
            />
          ))}
        </Box>
      </DashboardSectionCardNew>
    </PageContainer.Marketplace>
  );
}

export async function getStaticProps() {
  return { props: {} };
}

export default Projects;
