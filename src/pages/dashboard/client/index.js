import { useSelector } from 'react-redux';
import { PageContainer } from '@/shared/components/PageContainer';
import { SectionEmptyBanner } from '@/shared/components/SectionEmptyBanner';
import { DashboardSectionCardNew } from '@/shared/components/DashboardSectionCardNew';
import {
  DashboardStatsCardBanner,
  DashboardOngoingJobsStatsCard,
  DashboardCompletedJobsStatsCard,
  DashboardTotalPayoutStatsCard,
  DashboardTotalPostedProjectStatsCard,
} from '@/shared/components/DashboardStatsCards';

function BuyerDashboard() {
  const { user } = useSelector((state) => state.user);
  const { totalProjects, ongoingJobs, completedJobs, totalPayout } = user;

  return (
    <PageContainer.Marketplace>
      <DashboardStatsCardBanner>
        <DashboardTotalPostedProjectStatsCard totalCount={totalProjects} />
        <DashboardOngoingJobsStatsCard totalCount={ongoingJobs} />
        <DashboardCompletedJobsStatsCard totalCount={completedJobs} />
        <DashboardTotalPayoutStatsCard totalCount={totalPayout} />
      </DashboardStatsCardBanner>

      <DashboardSectionCardNew title="Notification" contentFullWidth padSection>
        {[].length === 0 && <SectionEmptyBanner sectionLabel="notifications" />}
      </DashboardSectionCardNew>
    </PageContainer.Marketplace>
  );
}

export async function getStaticProps() {
  return { props: {} };
}

export default BuyerDashboard;
