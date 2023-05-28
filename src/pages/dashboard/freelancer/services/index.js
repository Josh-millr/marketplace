import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Stack } from '@mantine/core';
import { useElementSize } from '@mantine/hooks';

import { PageContainer } from '@/shared/components/PageContainer';
import { getUserServicesApi } from '@/shared/services/getUserServicesApi';
import { DashboardPageHeader } from '@/shared/components/DashboardPageHeader';
import { DashboardSectionCard } from '@/shared/components/DashboardSectionCard';
import { DashboardServiceCardListItem } from '@/shared/components/DashboardServiceCardListItem';

function MyServices() {
  const [result, setResult] = useState([]);
  const router = useRouter();
  const { ref } = useElementSize(); // extra props: width, height

  useEffect(() => {
    getUserServicesApi().then((res) => {
      setResult(res);
    });
  });

  return (
    <PageContainer.Dashboard>
      <DashboardPageHeader
        showButton
        btnLabel="Add Service"
        title="My Services"
        descr="View, create, delete and run other service actions"
        action={() => {
          router.push(`${router.pathname}/create`);
        }}
      />

      {/* // TODO: Fix the list virtualization & Implement the pagination */}

      <DashboardSectionCard contentFullWidth title="Services">
        <Stack spacing="xl">
          <div ref={ref}>
            {result.map(({ id, title, category, createdAt }) => (
              <DashboardServiceCardListItem
                key={id}
                title={title}
                createdAt={createdAt}
                category={category.main}
              />
            ))}
          </div>
        </Stack>
      </DashboardSectionCard>
    </PageContainer.Dashboard>
  );
}

export default MyServices;
