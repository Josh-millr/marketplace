import { useState, useEffect } from 'react';
import { Tabs } from '@mantine/core';

import { getAllJobs } from '@/shared/services/getAllJobs';
import { PageContainer } from '@/shared/components/PageContainer';
import { SectionEmptyBanner } from '@/shared/components/SectionEmptyBanner';
import { DashboardPageHeader } from '@/shared/components/DashboardPageHeader';
import { DashboardSectionCardNew } from '@/shared/components/DashboardSectionCardNew';
import { DashboardClientWorkspaceCard } from '@/shared/components/DashboardClientWorkspaceCard';

function Workspace() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getAllJobs().then((data) => {
      setJobs(data);
    });
  }, []);
  return (
    <PageContainer.Marketplace>
      <DashboardPageHeader title="My Workspace" />

      <DashboardSectionCardNew contentFullWidth>
        <Tabs defaultValue="ongoing">
          <Tabs.List>
            <Tabs.Tab value="ongoing">Ongoing Jobs</Tabs.Tab>
            <Tabs.Tab value="completed">Completed Jobs</Tabs.Tab>
            <Tabs.Tab value="cancelled">Cancelled Jobs</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="ongoing" pt="xs">
            {jobs
              .filter((job) => job.status === 'in progress')
              .map(({ id, title, status, dueDate, freelancer }) => (
                <DashboardClientWorkspaceCard
                  key={id}
                  title={title}
                  status={status}
                  dueDate={dueDate}
                  freelancerName={freelancer?.name}
                  freelancerUsername={freelancer?.id}
                  freelancerAvatar={freelancer?.img}
                />
              ))}
          </Tabs.Panel>

          <Tabs.Panel value="completed" pt="xs">
            {jobs
              .filter((job) => job.status === 'completed')
              .map(({ id, title, status, dueDate, freelancer }) => (
                <DashboardClientWorkspaceCard
                  key={id}
                  title={title}
                  status={status}
                  dueDate={dueDate}
                  freelancerName={freelancer?.name}
                  freelancerUsername={freelancer?.id}
                  freelancerAvatar={freelancer?.img}
                />
              ))}
          </Tabs.Panel>

          <Tabs.Panel value="cancelled" pt="xs">
            {jobs
              .filter((job) => job.status === 'cancelled')
              .map(({ id, title, status, dueDate, freelancer }) => (
                <DashboardClientWorkspaceCard
                  key={id}
                  title={title}
                  status={status}
                  dueDate={dueDate}
                  freelancerName={freelancer?.name}
                  freelancerUsername={freelancer?.id}
                  freelancerAvatar={freelancer?.img}
                />
              ))}
          </Tabs.Panel>
        </Tabs>
        {jobs.length === 0 && <SectionEmptyBanner sectionLabel="Jobs" />}
      </DashboardSectionCardNew>
    </PageContainer.Marketplace>
  );
}

export async function getStaticProps() {
  return { props: {} };
}

export default Workspace;
