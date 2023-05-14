import { Grid, Stack } from '@mantine/core';

import { getServiceApi } from '@/shared/services/getServiceApi';
import { PageContainer } from '@/shared/components/PageContainer';
import { ServicePackageCard } from '@/shared/components/ServicePackageCard';
import { CarouselServiceGallery } from '@/shared/components/CarouselServiceGallery';
import { FreelancerProfilePreviewCard } from '@/shared/components/FreelancerProfilePreviewCard';
import {
  ServiceFaqSection,
  ServiceReviewSection,
  ServiceAddonsSection,
  ServicePageTitleSection,
  ServiceQuickInfoSection,
  ServiceDescriptionSection,
  ServiceComparePackagesSection,
} from '@/shared/components/PageSections/Service';

export default function Service({ data }) {
  return (
    <PageContainer layout="marketplace">
      <PageContainer.Marketplace>
        <Grid>
          {/* Col Section 1 */}
          <Grid.Col span={12}>
            <Stack spacing="xl">
              {/* Service Title */}
              <ServicePageTitleSection title={data.title} />

              {/* Service Quick information */}
              <ServiceQuickInfoSection
                creatorID={data.creator.id}
                creatorImg={data.creator.img}
                creatorName={data.creator.name}
                creatorRating={data.creator.ratings.rating}
                creatorReview={data.reviews.totalReviews}
              />
            </Stack>

            <Grid py="2xl">
              <Grid.Col span={12} md={9}>
                <CarouselServiceGallery gallery={data.gallery} />
              </Grid.Col>

              <Grid.Col span={12} md={3}>
                <ServicePackageCard
                  basic={data.packages.basic}
                  standard={data.packages.standard}
                  premium={data.packages.premium}
                />
              </Grid.Col>
            </Grid>
          </Grid.Col>

          {/* Col Section 2 */}
          <Grid.Col span={12}>
            <Grid>
              <Grid.Col span={12} md={9}>
                <ServiceDescriptionSection description={data.description} />

                <ServiceComparePackagesSection packages={data.packages} />

                <ServiceAddonsSection addons={data.addons} />

                <ServiceFaqSection faq={data.faq} />

                <FreelancerProfilePreviewCard
                  name={data.creator.name}
                  avatar={data.creator.img}
                  username={data.creator.id}
                  country={data.creator.country}
                  createdAt={data.creator.createdAt}
                  languages={data.creator.languages}
                  profession={data.creator.profession}
                  comments={data.creator.commentsCount}
                  ratings={data.creator.ratings.rating}
                  description={data.creator.description}
                />

                <ServiceReviewSection
                  reviews={data.reviews}
                  ratings={data.ratings}
                />
              </Grid.Col>
              <Grid.Col span={12} md={3}>
                {/* empty block */}
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>
      </PageContainer.Marketplace>
    </PageContainer>
  );
}

export const getServerSideProps = async (context) => {
  const { id } = context.params;

  try {
    const reponse = await getServiceApi(id);
    const data = reponse;

    return { props: { data } };
  } catch (error) {
    throw new Error(error, 500);
  }
};
