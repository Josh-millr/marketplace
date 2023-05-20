import { PageContainer } from '@/shared/components/PageContainer';
import { FreelancerMarketplaceLatestProjectSection } from '@/shared/components/PageSections/FreelancerMarketplace/FreelancerMarketplaceLatestProjectSection';

export default function FreelancerHome() {
  return (
    <>
      <PageContainer layout="marketplace">
        <PageContainer.Marketplace>
          <FreelancerMarketplaceLatestProjectSection />
        </PageContainer.Marketplace>
      </PageContainer>
    </>
  );
}
