import Link from 'next/link';
import {
  Grid,
  Stack,
  Text,
  Box,
  Title,
  Group,
  Breadcrumbs,
  Avatar,
  Anchor,
} from '@mantine/core';

import { getService } from '@/shared/services/getService';
import { PageContainer } from '@/shared/components/PageContainer';
import { RatingReviewBadge } from '@/shared/components/RatingReviewBadge';
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
        <Text className="label-md" tt="capitalize">
          {title}
        </Text>
      </Group>
    </Link>
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
                  ratings={data.ratings.rating}
                  totalComment={data.comments.totalCount}
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
