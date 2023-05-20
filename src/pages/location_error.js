import { Group } from '@mantine/core';

import { FreelancerLocationErrorPage } from '@/features/auth/Freelancer';

export default function LocationError() {
  return (
    <>
      <Group mt={48}>
        <FreelancerLocationErrorPage />
      </Group>
    </>
  );
}

export async function getStaticProps() {
  return { props: {} };
}
