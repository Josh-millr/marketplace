import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Stack } from '@mantine/core';
import { useElementSize } from '@mantine/hooks';
import { useMediaQuery } from '@mantine/hooks';
import { PageContainer } from '@/shared/components/PageContainer';
// import { getUserServicesApi } from '@/shared/services/getUserServicesApi';
import { DashboardPageHeader } from '@/shared/components/DashboardPageHeader';
import { DashboardSectionCard } from '@/shared/components/DashboardSectionCard';
import { DashboardFinanceCardListItem } from '@/shared/components/DashboardFinanceCardListItem/DashboardFinanceCardLIstItem';
import { DashboardStatsCardBanner, DashboardTotalPayoutStatsCard } from '@/shared/components/DashboardStatsCards';
import { DashboardNetIncomeStatsCard } from '@/shared/components/DashboardStatsCards/DashboardNetIncomeStatsCard/DashboardNetIncomeStatsCard';
import { DashboardPendingStatsCard } from '@/shared/components/DashboardStatsCards/DashboardPendingStatsCard/DashboardPendingStatsCard';
import { DashboardAvailableForPayoutStatsCard } from '@/shared/components/DashboardStatsCards/DashboardAvailableForPayout/DashboardAvailableForPayout';
import { DashboardAcceptedStatsCard } from '@/shared/components/DashboardStatsCards/DashboardAcceptedStatsCard/DashboardAcceptedStatsCard';

function Finance() {
//   const [result, setResult] = useState([]);
  const router = useRouter();
  const { ref } = useElementSize(); // extra props: width, height

//   useEffect(() => {
//     getUserServicesApi().then((res) => {
//       setResult(res);
//     });
//   });
    const result = [
        {
            id: 1,
            title: "I will build a fully responsive design in HTML, bootstrap or JavaScript",
            amount: "₦18,230",
            category: "Web & App design",
            createdAt: "April 9, 2022",
            categoryType: "Services",
            status: "Received"

        },
        {
            id: 2,
            title: "I will build a fully responsive design in HTML, bootstrap or JavaScript",
            amount: "₦18,230",
            category: "Web & App design",
            createdAt: "April 9, 2022",
            categoryType: "Services",
            status: "Received"

        },
        {
            id: 3,
            title: "I will build a fully responsive design in HTML, bootstrap or JavaScript",
            amount: "₦18,230",
            category: "Web & App design",
            createdAt: "April 9, 2022",
            categoryType: "Project",
            status: "Pending"

        },
        {
            id: 4,
            title: "I will build a fully responsive design in HTML, bootstrap or JavaScript",
            amount: "₦18,230",
            category: "Web & App design",
            createdAt: "April 9, 2022",
            categoryType: "Services",
            status: "Received"

        },
    ]

    return (
        <div style={{ backgroundColor: useMediaQuery(`(max-width:75em)`) ? '#ffffff' : '#F0EFEB' }}>
    <PageContainer.Dashboard>
      <DashboardPageHeader
        title="My Finance"
        descr="View your overall financial statements and report"
       
      />
      <DashboardStatsCardBanner >
              <DashboardNetIncomeStatsCard />
              <DashboardPendingStatsCard />
              <DashboardAcceptedStatsCard/>
              <DashboardAvailableForPayoutStatsCard/>
      </DashboardStatsCardBanner>

      {/* // TODO: Fix the list virtualization & Implement the pagination */}

      <DashboardSectionCard contentFullWidth >
        <Stack spacing="xl">
          <div ref={ref}>
            {result.map(({ id, title, amount, category, createdAt, categoryType, status }) => (
              <DashboardFinanceCardListItem
                key={id}
                title={title}
                amount={amount}
                createdAt={createdAt}
                category={category}
                categoryType={categoryType}
                status={status}
              />
            ))}
          </div>
        </Stack>
      </DashboardSectionCard>
            </PageContainer.Dashboard>
            </div>
  );
}

export default Finance;
