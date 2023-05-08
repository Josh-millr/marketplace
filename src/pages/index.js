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

export async function getStaticProps() {
  // Fetch the FAQ info from CMS
  return { props: {} };
}