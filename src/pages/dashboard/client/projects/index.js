import { useRouter } from 'next/router';
import { Box } from '@mantine/core';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';

import { PageContainer } from '@/shared/components/PageContainer';
import { DashboardPageHeader } from '@/shared/components/DashboardPageHeader';
import { DashboardSectionCard } from '@/shared/components/DashboardSectionCard';
import { DashboardSectionCardNew } from '@/shared/components/DashboardSectionCardNew';
import { dashboardProjectPreviewDemo } from '@/shared/constants/dashboardProjectPreviewDemo';
import { DashboardProjectPreviewCard } from '@/shared/components/DashboardProjectPreviewCard';

function Projects() {
  const { user } = useSelector((state) => state.user);
  const { role } = user;

  const router = useRouter();

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

      <DashboardSectionCardNew title="Active Projects" contentFullWidth showAccordion>
        <Box>
          {dashboardProjectPreviewDemo.map((project) => {
            const itemId = uuidv4();
            return (
              <DashboardProjectPreviewCard
                id={project.id}
                key={itemId}
                cost={project.cost}
                title={project.title}
                status={project.status}
                expires={project.expires}
                created={project.created}
                category={project.category}
                pricingtype={project.pricingtype}
                proposalsRecived={project.proposalsRecived}
              />
            );
          })}
        </Box>
      </DashboardSectionCardNew>
    </PageContainer.Marketplace>
  );
}

export async function getStaticProps() {
  return { props: {} };
}

export default Projects;
