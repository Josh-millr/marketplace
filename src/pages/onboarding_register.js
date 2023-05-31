import { Group } from "@mantine/core";

import { FreelancerForm } from "@/features/auth/Freelancer/components/FreelancerForm";

export default function OnboardingRegister() {
  return <FreelancerForm />;
}

export async function getStaticProps() {
  return { props: {} };
}
