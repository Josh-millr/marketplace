import { Tabs } from '@mantine/core';

import { PageContainer } from '@/shared/components/PageContainer';
import { SectionEmptyBanner } from '@/shared/components/SectionEmptyBanner';
import { DashboardPageHeader } from '@/shared/components/DashboardPageHeader';
import { DashboardSectionCardNew } from '@/shared/components/DashboardSectionCardNew';

function Workspace() {
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
            Ongoing
          </Tabs.Panel>

          <Tabs.Panel value="completed" pt="xs">
            Completed
          </Tabs.Panel>

          <Tabs.Panel value="cancelled" pt="xs">
            Canceled
          </Tabs.Panel>
        </Tabs>
        {[].length === 0 && <SectionEmptyBanner sectionLabel="No jobs" />}
      </DashboardSectionCardNew>
    </PageContainer.Marketplace>
  );
}

export async function getStaticProps() {
  return { props: {} };
}

export default Workspace;
