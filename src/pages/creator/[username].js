import {
  Grid,
  Flex,
  Stack,
  Text,
  Divider,
  Spoiler,
  SimpleGrid,
  MediaQuery,
  useMantineTheme,
} from '@mantine/core';
import { HiStar } from 'react-icons/hi';

import {
  FreelancerProfileDisplayBanner,
  FreelancerProfileStatsSection,
} from '@/shared/components/PageSections/FreelancerProfile';
import { displayFullName } from '@/shared/utils/displayFullName';
import { PageContainer } from '@/shared/components/PageContainer';
import { CertificationCard } from '@/shared/components/CertificationCard';
import { SectionEmptyBanner } from '@/shared/components/SectionEmptyBanner';
import { calculateAverageRating } from '@/shared/utils/calculateAverageRating';
import { FreelancerSkillsCard } from '@/shared/components/FreelancerSkillsCard';
import { CommentSectionReadMode } from '@/shared/components/PageSections/Comments';
import { getFreelancerProfileApi } from '@/shared/services/getFreelancerProfileApi';
import { FreelancerProfileInfoCard } from '@/shared/components/FreelancerProfileInfoCard';

export default function SellerProfile({ data }) {
  const theme = useMantineTheme();

  const fullname = displayFullName({
    firstname: data.firstname,
    lastname: data.lastname,
  });
  return (
    <div>
      <FreelancerProfileDisplayBanner
        name={fullname}
        img={data.img}
        role={data.role}
        rating={data.ratings.rating}
        reviews={data.reviews.totalReviews}
      />

      <PageContainer layout="marketplace">
        <PageContainer.Marketplace>
          <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <Stack spacing="lg" py="2xl">
              <Flex gap="md">
                <HiStar size={20} color={theme.colors.brandPrimary[6]} />
                <Text className="label-md">
                  {`${calculateAverageRating(data.ratings.rating)} `}
                  <span>{`(${data.reviews.totalReviews} Review)`}</span>
                </Text>
              </Flex>
            </Stack>
          </MediaQuery>

          <Grid>
            <Grid.Col span={12} md={9} order={2} orderMd={1}>
              <FreelancerProfileStatsSection
                totalJobs={data.totalJobs}
                totalHours={data.totalHours}
                totalEarnings={data.totalEarnings}
              />

              <Stack spacing="xl" py="2xl">
                <Text className="sub-h1">Description</Text>

                <Text className="body-md" maw={800}>
                  <Spoiler
                    maxHeight={200}
                    showLabel="Show more"
                    hideLabel="Hide"
                  >
                    {data.description}
                  </Spoiler>
                </Text>
              </Stack>

              <Divider />

              <Stack spacing="xl" py="2xl">
                <Text className="sub-h1">Awards & Certificates</Text>
                <Stack spacing="xl">
                  {data.certificates.map(({ _id, ...cert }) => (
                    <CertificationCard
                      key={_id}
                      title={cert.title}
                      issuer={cert.issuer}
                      issueDate={cert.issueDate}
                      credentialId={cert.credentialId}
                      credentialUrl={cert.credentialUrl}
                    />
                  ))}
                </Stack>
              </Stack>

              <Stack spacing="xl" py="2xl">
                <Text className="sub-h1">Featured Services</Text>

                {data.services.active.length > 0 ? (
                  <SimpleGrid
                    cols={1}
                    spacing="xl"
                    verticalSpacing="xl"
                    style={{ justifyItems: 'center' }}
                    breakpoints={[
                      { minWidth: 'xs', cols: 2, spacing: 'xl' },
                      { minWidth: 'lg', cols: 3, spacing: 'xl' },
                    ]}
                  >
                    {/* {data.activeServices.slice(0, 3).map((service) => {
                    return <ServiceCard key={id} data={service ?? {}} />;
                  })} */}
                  </SimpleGrid>
                ) : (
                  <SectionEmptyBanner sectionLabel="Services" />
                )}
              </Stack>

              <Divider />

              <Stack spacing="xl" py="2xl">
                <Text className="sub-h1">
                  {data.reviews.totalReviews} Reviews
                </Text>
                <CommentSectionReadMode userID={data.username} />
              </Stack>
            </Grid.Col>
            <Grid.Col span={12} md={3} order={1} orderMd={2}>
              <Stack spacing="md">
                <FreelancerProfileInfoCard
                  gender={data.gender}
                  location={data.location}
                  languages={data.languages}
                  joinedDate={data.createdAt}
                />
                <FreelancerSkillsCard skills={data.skills} />
              </Stack>
            </Grid.Col>
          </Grid>
        </PageContainer.Marketplace>
      </PageContainer>
    </div>
  );
}

// TODO: Add the freelaner fetch logic and add error handling
export async function getServerSideProps(context) {
  const { username } = context.params;

  const response = await getFreelancerProfileApi(username);

  return { props: { data: response } };
}
