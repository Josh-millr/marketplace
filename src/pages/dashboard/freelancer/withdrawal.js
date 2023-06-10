import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Stack } from '@mantine/core';
import { useElementSize } from '@mantine/hooks';
import { useMediaQuery } from '@mantine/hooks';
import { PageContainer } from '@/shared/components/PageContainer';
// import { getUserServicesApi } from '@/shared/services/getUserServicesApi';
import { DashboardPageHeader } from '@/shared/components/DashboardPageHeader';
import { DashboardSectionCard } from '@/shared/components/DashboardSectionCard';
import { DashboardWithdrawalCardListItem } from '@/shared/components/DashboardWithdrawalCardListItem';

function Withdrawal() {
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
      withdrawalMethod: 'Flutterwave',
      amount: '₦51,800',
      createdAt: 'April 9, 2022',
      status: 'Sent',
    },
    {
      id: 2,
      withdrawalMethod: 'Flutterwave',
      amount: '₦51,800',
      createdAt: 'April 9, 2022',
      status: 'Pending',
    },
    {
      id: 3,
      withdrawalMethod: 'Flutterwave',
      amount: '₦51,800',
      createdAt: 'April 9, 2022',
      status: 'Sent',
    },
    {
      id: 4,
      withdrawalMethod: 'Flutterwave',
      amount: '₦51,800',
      createdAt: 'April 9, 2022',
      status: 'Rejected',
    },
  ];

  return (
    <div
      style={{
        backgroundColor: useMediaQuery(`(max-width:75em)`)
          ? '#ffffff'
          : '#F0EFEB',
        paddingBottom: '22px',
      }}
    >
      <PageContainer.Dashboard>
        <DashboardPageHeader
          title="Withdrawal"
          showButton
          btnLabel="+ Add service"
          action={() => {
            router.push('/dashboard/freelancer/service/create-service');
          }}
        />

        {/* // TODO: Fix the list virtualization & Implement the pagination */}

        <DashboardSectionCard contentFullWidth title="Withdrawal Status">
          <Stack spacing="xl">
            <div ref={ref}>
              {result.map(
                ({ id, withdrawalMethod, amount, createdAt, status }) => (
                  <DashboardWithdrawalCardListItem
                    key={id}
                    withdrawalMethod={withdrawalMethod}
                    amount={amount}
                    createdAt={createdAt}
                    status={status}
                  />
                )
              )}
            </div>
          </Stack>
        </DashboardSectionCard>
      </PageContainer.Dashboard>
    </div>
  );
}

export async function getStaticProps() {
  return { props: {} };
}

export default Withdrawal;
