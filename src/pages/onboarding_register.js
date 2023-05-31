import { Group } from "@mantine/core";

import { FreelancerForm } from "@/features/auth/Freelancer/components/FreelancerForm";

export default function OnboardingRegister() {
  return (
    <>
      <Group mt={48}>
        <FreelancerForm />
      </Group>
    </>
  );
}

export async function getStaticProps() {
  return { props: {} };
}
