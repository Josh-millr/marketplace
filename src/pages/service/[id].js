import Link from 'next/link';
import {
  Grid,
  Stack,
  Text,
  Accordion,
  Box,
  Divider,
  Title,
  Group,
  Breadcrumbs,
  Avatar,
  Anchor,
  Button,
} from '@mantine/core';

import { getService } from '@/shared/services/getService';
import { useFetchLazy } from '@/shared/hooks/useFetchLazy';
import { ReviewCard } from '@/shared/components/ReviewCard';
import { PageContainer } from '@/shared/components/PageContainer';
import { getServiceReviews } from '@/shared/services/getServiceReviews';
import { displayNumberInNaira } from '@/shared/utils/displayNumberInNaira';
import { RatingReviewBadge } from '@/shared/components/RatingReviewBadge';
import { RatingProgressCard } from '@/shared/components/RatingProgressCard';
import { ServicePackageCard } from '@/shared/components/ServicePackageCard';
import { ServicePackageTable } from '@/shared/components/ServicePackageTable';
import { CarouselServiceGallery } from '@/shared/components/CarouselServiceGallery';
import { FreelancerProfilePreviewCard } from '@/shared/components/FreelancerProfilePreviewCard';

const items = [
  { title: 'Mantine', href: '#' },
  { title: 'Mantine hooks', href: '#' },
  { title: 'use-id', href: '#' },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
));

function UserInfo({ avatar, title, href }) {
  return (
    <Link href={href || '#'}>
      <Group spacing="sm">
        <Avatar src={avatar} size="md" radius={9999} />
        <Text className="label-md" tt="capitalize" fw={'700!important'}>
          {title}
        </Text>
      </Group>
    </Link>
  );
}

function FaqAccordion({ faq }) {
  return (
    <Accordion defaultValue={faq[0].value}>
      {faq.map((item, index) => (
        <Accordion.Item key={index} value={item.title}>
          <Accordion.Control>{item.title}</Accordion.Control>
          <Accordion.Panel>{item.description}</Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

function Reviews({ reviews, rating, totalComment }) {
  const { loadMore, resultLazy, maxResult } = useFetchLazy({
    initialBatchSize: 3,
    action: (limit) => getServiceReviews(limit),
  });

  return (
    <Stack spacing="3xl">
      <Stack spacing="2xl">
        {resultLazy.map((review, index) => (
          <ReviewCard
            key={index}
            description={review?.body ?? ''}
            img={review?.creator?.img ?? ''}
            name={review?.creator?.name ?? ''}
            review={totalComment ?? ''}
            rating={rating ?? ''}
          />
        ))}
      </Stack>
      <div>
        <Button variant="outline" onClick={loadMore} disabled={maxResult}>
          load more
        </Button>
      </div>
    </Stack>
  );
}

function AddOns({ addons }) {
  return (
    <Stack spacing="lg" maw={520}>
      {addons.map(({ title, price }, index) => (
        <Stack key={index}>
          <Group position="apart">
            <Text className="label-lg">{title}</Text>
            <Text className="label-lg" fw={'500!important'} pl="sm">
              {displayNumberInNaira(price)}
            </Text>
          </Group>
          <Divider />
        </Stack>
      ))}
    </Stack>
  );
}

export default function Service({ data }) {
  return (
    <PageContainer layout="marketplace">
      <PageContainer.Marketplace>
        <Grid>
          {/* Col Section 1 */}
          <Grid.Col span={12}>
            <Stack spacing="xl">
              {/* Service Title */}
              <Stack spacing="lg" maw={800}>
                <Breadcrumbs>{items}</Breadcrumbs>
                <Title className="h1">{data.title}</Title>
              </Stack>

              {/* Service Quick information */}
              <Group spacing="lg">
                <UserInfo
                  href={`/creator/${data.creator.id}`}
                  avatar={data.creator.img}
                  title={data.creator.name}
                />
                <RatingReviewBadge
                  ratings={data.creator.ratings.rating}
                  totalComment={data.reviews.totalReviews}
                />
              </Group>
            </Stack>

            <Grid py="2xl">
              <Grid.Col span={12} md={9}>
                {/* Service Gallery goes here */}
                <CarouselServiceGallery gallery={data.gallery} />
              </Grid.Col>
              <Grid.Col span={12} md={3}>
                {/* Package Pricing Card */}
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
                <Stack spacing="xl" py="xl">
                  {/* About Service */}
                  <Text className="h1">About this Service</Text>

                  <Text className="body-md" maw={800}>
                    {data.description}
                  </Text>
                </Stack>
                <Stack spacing="xl" py="2xl">
                  <Text className="sub-h1">Compare Packages</Text>

                  <ServicePackageTable
                    basic={data.packages.basic}
                    standard={data.packages.standard}
                    premium={data.packages.premium}
                  />
                </Stack>

                <Stack spacing="xl" py="2xl">
                  <Text className="sub-h1">Optional Add-ons</Text>
                  <AddOns addons={data.addons} />
                </Stack>

                <Stack spacing="xl" py="2xl">
                  <Text className="sub-h1">Frequently asked questions</Text>
                  <FaqAccordion faq={data.faq} />
                </Stack>

                {/* Reviews comments */}
                <Stack spacing="2xl" py="2xl">
                  <Text className="sub-h1">Rating & Review</Text>
                  <RatingProgressCard ratings={data.ratings} />
                  <Divider />
                  <Reviews
                    reviews={data.reviews.comments}
                    rating={data.ratings.rating}
                    totalComment={data.reviews.totalReviews}
                  />
                </Stack>

                {/* Freelancer Profile Preview Card */}
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
    const reponse = await getService(id);
    const data = reponse;

    return { props: { data } };
  } catch (error) {
    throw new Error(error, 500);
  }
};
