import { Group } from '@mantine/core';

import { FreelancerOnboardingLayout } from '@/shared/components/Layout';
import { FreelancerForm } from '@/features/auth/Freelancer/components/FreelancerForm';

export default function OnboardingRegister() {
  return (
    <>
      <Group mt={48}>
        <FreelancerForm />
      </Group>
    </>
  );
}

OnboardingRegister.getLayout = function getLayout(page) {
  return <FreelancerOnboardingLayout>{page}</FreelancerOnboardingLayout>;
};

export async function getStaticProps() {
  return { props: {} };
}