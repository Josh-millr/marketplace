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
        {[].length === 0 && <SectionEmptyBanner sectionLabel="notifications" />}
      </DashboardSectionCardNew>
    </PageContainer.Marketplace>
  );
}

export async function getStaticProps() {
  return { props: {} };
}

export default Workspace;
