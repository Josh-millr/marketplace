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
// import { withAuthRedirect } from '@/shared/hocs/withAuthRedirect';

export default function Home() {
  const name = 'james';
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

// export const getStaticProps = withAuthRedirect(async () =>
//   // Fetch the FAQ info from CMS

//   ({ props: {} }));
