import { useSelector } from 'react-redux';
import { PageContainer } from '@/shared/components/PageContainer';
import { SectionEmptyBanner } from '@/shared/components/SectionEmptyBanner';
import { DashboardSectionCard } from '@/shared/components/DashboardSectionCard';
import {
  DashboardStatsCardBanner,
  DashboardOngoingJobsStatsCard,
  DashboardCompletedJobsStatsCard,
  DashboardTotalPayoutStatsCard,
  DashboardTotalPostedProjectStatsCard,
} from '@/shared/components/DashboardStatsCards';

function BuyerDashboard() {
  const { user } = useSelector((state) => state.user);
  const {
    totalProjects,
    ongoingJobs,
    completedJobs,
    totalPayout,
    // notifications, TODO: Add once property is present in state
  } = user;

  return (
    <PageContainer.Marketplace>
      <DashboardStatsCardBanner>
        <DashboardTotalPostedProjectStatsCard totalCount={totalProjects} />
        <DashboardOngoingJobsStatsCard totalCount={ongoingJobs} />
        <DashboardCompletedJobsStatsCard totalCount={completedJobs} />
        <DashboardTotalPayoutStatsCard totalCount={totalPayout} />
      </DashboardStatsCardBanner>

      <DashboardSectionCard withTitle title="Nofitication" contentFullWidth>
        {/* Notification list goes here */}
        {[].length === 0 && <SectionEmptyBanner sectionLabel="notifications" />}
      </DashboardSectionCard>

      {/* Recent Proposals list goes here */}
      {/* <DashboardSectionCard withTitle title="Recent Proposals">
      </DashboardSectionCard> */}
    </PageContainer.Marketplace>
  );
}

export default BuyerDashboard;
