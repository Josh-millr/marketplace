import { useEffect } from 'react';
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
import { TimeUtil } from '@/shared/utils/TimeUtil';

export default function Home() {

  useEffect(() => {
    const getTime = async () => {
      const timeManager = new TimeUtil();

      try {
        const timestamp = '2023-07-15T12:34:00.000-04:00';

        const time = await timeManager.convertToLocalTime(timestamp);
        console.log("The converted time is:", time);
      } catch(error) {
        console.log("I caught an error with the code:", error)
      }
    }

    getTime();
  }, [])
  

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

export async function getStaticProps() {
  return { props: {} };
}

// export const getStaticProps = withAuthRedirect(async () =>
//   // Fetch the FAQ info from CMS

//   ({ props: {} }));
