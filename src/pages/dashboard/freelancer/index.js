import { SimpleGrid } from '@mantine/core';

// import {
//   WorkOfferStat,
//   TotalReveiwStat,
//   WorkInQueueStat,
//   WorkCompletedStat,
// } from '@/shared/components/StatCard';
import { DashboardPageHeader } from '@/shared/components/DashboardPageHeader';
import { PageContainer } from '@/shared/components/PageContainer';
import { NotificationList } from '@/features/NotificationList';

function FreelancerDashboard() {
  return (
    <PageContainer.Dashboard>
      <DashboardPageHeader
        title="Dashboard"
        descr="see and overview of you profie, including your notification"
      />

      <SimpleGrid
        pt={{ base: 'lg', sm: '0px' }}
        pb={{ base: 'lg', sm: '0px' }}
        cols={4}
        breakpoints={[
          { maxWidth: 'md', cols: 2 },
          { maxWidth: 'xs', cols: 1 },
        ]}
      >
        {/* <WorkOfferStat count={12839} newCount={28} />
        <WorkInQueueStat count={12839} newCount={28} />
        <WorkCompletedStat count={12839} newCount={28} />
        <TotalReveiwStat count={12839} newCount={28} /> */}
      </SimpleGrid>

      <NotificationList />
    </PageContainer.Dashboard>
  );
}

export default FreelancerDashboard;
