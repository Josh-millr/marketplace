import { useRouter } from 'next/router';

import { PageContainer } from '@/shared/components/PageContainer';
import { DashboardPageHeader } from '@/shared/components/DashboardPageHeader';
import { DashboardSectionCard } from '@/shared/components/DashboardSectionCard';
import { DashboardServiceCardListItem } from '@/shared/components/DashboardServiceCardListItem';

function MyServices() {
  const router = useRouter();

  return (
    <PageContainer.Dashboard>
      <DashboardPageHeader
        showButton
        btnLabel="Add Service"
        title="My Services"
        descr="View, create, delete and run other service actions"
        action={() => {
          router.push('/dashboard/freelancer/service/create-service');
        }}
      />

      <DashboardSectionCard contentFullWidth padSection>
        <DashboardServiceCardListItem
          createdAt="2nd january 2022"
          category="Web development"
          title="I will create a really beautiful website for you and you can rock is however you like"
        />
        <DashboardServiceCardListItem
          createdAt="2nd january 2022"
          category="Web development"
          title="I will create a really beautiful website for you"
        />
        <DashboardServiceCardListItem
          createdAt="2nd january 2022"
          category="Web development"
          title="I will create a really beautiful website for you"
        />
      </DashboardSectionCard>
    </PageContainer.Dashboard>
  );
}

export default MyServices;
