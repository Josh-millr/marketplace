import { PageContainer } from '@/shared/components/PageContainer';
import { OnboardingWelcome } from '@/features/auth/Freelancer/components/OnboardingWelcome';

export default function Onboarding() {
  return (
    <>
      <PageContainer layout="marketplace">
        <PageContainer.Marketplace>
          <OnboardingWelcome />
        </PageContainer.Marketplace>
      </PageContainer>
    </>
  );
}

export async function getStaticProps() {
  return { props: {} };
}
