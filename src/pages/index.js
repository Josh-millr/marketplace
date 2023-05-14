import {
  HomepageFaqSection,
  HomepageHeroSection,
  HomepageTestimonialSection,
  HomepageBlogPreviewsSection,
  HomepageProjectProcessSection,
  HomepageMarketplaceStatsSection,
  HomepagePlatformGuaranteeSection,
  HomepageRecruitHireBannerSection,
} from '@/shared/components/PageSections/Homepage';
import { MainLayout } from '@/shared/components/Layout';
import { withAuthRedirect } from '@/shared/hocs/withAuthRedirect';

export default function Home() {
  return (
    <>
      <HomepageHeroSection />
      <HomepageProjectProcessSection />
      <HomepageMarketplaceStatsSection />
      <HomepagePlatformGuaranteeSection />
      <HomepageTestimonialSection />
      <HomepageBlogPreviewsSection />
      <HomepageFaqSection />
      <HomepageRecruitHireBannerSection />
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export const getStaticProps = withAuthRedirect(async () =>
  // Fetch the FAQ info from CMS
  ({ props: {} }));
