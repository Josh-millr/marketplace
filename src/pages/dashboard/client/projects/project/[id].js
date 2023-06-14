import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useDisclosure } from '@mantine/hooks';
import {
  Flex,
  Text,
  Badge,
  Title,
  Paper,
  Stack,
  Drawer,
  Skeleton,
  SimpleGrid,
  MediaQuery,
} from '@mantine/core';
import { ViewGrid, Hourglass, LargeSuitcase, HandCash } from 'iconoir-react';

import { iconCreator } from '@/shared/utils/iconCreator';
import { CustomSuspense } from '@/shared/components/CustomSuspense';
import { projectDemo } from '@/shared/constants/projectDemo';
import { PageContainer } from '@/shared/components/PageContainer';
import { displayNumberInNaira } from '@/shared/utils/displayNumberInNaira';
import { SectionEmptyBanner } from '@/shared/components/SectionEmptyBanner';
import { DashboardSectionCardNew } from '@/shared/components/DashboardSectionCardNew';
import { DashboardProposalCard } from '@/shared/components/DashboardProposalCard';
import { DashboardGoBackButtonBar } from '@/shared/components/DashboardGoBackButtonBar';

function OptionCard({ icon: Icon, label, content }) {
  return (
    <Paper withBorder w="100%" py="xl">
      <Flex
        direction="column"
        gap="xl"
        w="100%"
        justify="center"
        align="center"
      >
        {iconCreator({ icon: Icon, sizeOverride: 32, strokeOverride: 1 })}

        <Stack spacing="xs">
          <CustomSuspense
            dependency={content}
            fallback={<Skeleton width={40} height={16} />}
          >
            <Title
              className="label-md"
              tt="capitalize"
              m="auto"
              fw={'700!important'}
            >
              {content}
            </Title>
          </CustomSuspense>
          <CustomSuspense
            dependency={label}
            fallback={<Skeleton width={40} height={16} m="auto" />}
          >
            <Text className="label-md" c="neutral.6" tt="capitalize" m="auto">
              {label}
            </Text>
          </CustomSuspense>
        </Stack>
      </Flex>
    </Paper>
  );
}

function ProjectDetail() {
  const [project, setProject] = useState(projectDemo);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    // Fetch project information and update the data state...
  }, []);

  return (
    <DashboardSectionCardNew contentFullWidth padSection>
      <Stack spacing="xl">
        <div>
          {/* ... Status Badge goes here ...  */}
          <CustomSuspense
            dependency={project?.status}
            fallback={<Skeleton width={80} height={120} radius={9999} />}
          >
            <Badge size="lg" variant="filled">
              {project?.status}
            </Badge>
          </CustomSuspense>
        </div>

        <Flex
          w="100%"
          gap={{ base: 'xl', md: 0 }}
          direction={{ base: 'column', md: 'row' }}
          justify={{ base: 'flex-start', md: 'space-between' }}
        >
          {/* ... Title goes here ... */}
          <CustomSuspense
            dependency={project?.title}
            fallback={<Skeleton width={80} height={80} />}
          >
            <Title
              className="h1"
              fw={'700!important'}
              maw={692}
              tt={'capitalize'}
            >
              {project?.title}
            </Title>
          </CustomSuspense>

          {/* ... Budget Price goes here ... */}
          <Stack spacing={0}>
            {/* ... For Large Screens ...  */}
            <CustomSuspense
              dependency={project?.budget}
              fallback={<Skeleton width={80} height={16} />}
            >
              <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
                <Text className="h2" fw={'500!important'}>
                  {displayNumberInNaira(project?.budget || 0)}
                </Text>
              </MediaQuery>
            </CustomSuspense>

            <CustomSuspense
              dependency={project?.pricingType}
              fallback={<Skeleton width={80} height={16} />}
            >
              <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
                <Text
                  className="label-lg"
                  ml="auto"
                  fw={'500!important'}
                  c="neutral.6"
                  tt="capitalize"
                >
                  {project?.pricingType}
                </Text>
              </MediaQuery>
            </CustomSuspense>

            {/* ... For Small Screens ...  */}

            <CustomSuspense
              dependency={project?.budget}
              fallback={<Skeleton width={80} height={16} />}
            >
              <MediaQuery largerThan="md" styles={{ display: 'none' }}>
                <Text className="h1" fw={'500!important'}>
                  {displayNumberInNaira(project?.budget || 0)}
                </Text>
              </MediaQuery>
            </CustomSuspense>

            <CustomSuspense
              dependency={project?.pricingType}
              fallback={<Skeleton width={80} height={16} />}
            >
              <MediaQuery largerThan="md" styles={{ display: 'none' }}>
                <Text className="label-md" fw={'500!important'} c="neutral.6">
                  {project?.pricingType}
                </Text>
              </MediaQuery>
            </CustomSuspense>
          </Stack>
        </Flex>

        {/* ... Description goes here ... */}
        <CustomSuspense
          dependency={project?.description}
          fallback={
            <Stack w="100%">
              <Skeleton w="100%" />
              <Skeleton w="100%" />
              <Skeleton w="70%" />
            </Stack>
          }
        >
          <Text className="body-md">{project?.description}</Text>
        </CustomSuspense>

        {/* ... Options card goes here ... */}
        <SimpleGrid
          cols={1}
          breakpoints={[
            { minWidth: 'md', cols: 2 },
            { minWidth: 'lg', cols: 4 },
          ]}
        >
          {/* ... Items card goes here ... */}
          <OptionCard
            icon={ViewGrid}
            label="Category"
            content={project?.category}
          />
          <OptionCard
            icon={Hourglass}
            label="Expiry Date"
            content={project?.expires}
          />
          <OptionCard
            icon={LargeSuitcase}
            label="Pricing Type"
            content={project?.pricingType}
          />
          <OptionCard
            icon={HandCash}
            label="Experience Level"
            content={project?.experienceLevel}
          />
        </SimpleGrid>
      </Stack>
    </DashboardSectionCardNew>
  );
}

function Proposals() {
  const [proposals, setProposals] = useState(projectDemo.proposals);
  const [coverLetter, setCoverLetter] = useState('');
  const [opened, { open, close }] = useDisclosure();

  const displayCoverLetter = (letter) => {
    setCoverLetter(letter);
  };

  useEffect(() => {
    if (coverLetter.length > 0 && opened === true) open();
    if (coverLetter.length > 0 && opened === false) setCoverLetter('');
  }, [coverLetter, opened]);

  return (
    <DashboardSectionCardNew contentFullWidth title="Proposals Pending">
      <Drawer opened={opened} onClose={close} title="Cover Letter">
        {coverLetter}
      </Drawer>

      {/* ... Proposals Received ... */}
      {proposals.length !== 0 ? (
        proposals.map((proposal) => (
          <DashboardProposalCard
            cost={proposal?.cost}
            status={proposal?.status}
            key={proposal?.proposalId}
            category={proposal?.category}
            authorId={proposal?.proposalId}
            authorName={proposal?.author?.name}
            coverLetter={proposal?.coverLetter}
            showCoverLetter={displayCoverLetter}
            deliveryTime={proposal?.deliveryTime}
            submissionDate={proposal?.submissionDate}
          />
        ))
      ) : (
        <SectionEmptyBanner sectionLabel="Proposals" />
      )}
    </DashboardSectionCardNew>
  );
}
export default function Project() {
  return (
    <PageContainer.Marketplace>
      <DashboardGoBackButtonBar />

      <Stack spacing="2xl" mb="3xl">
        <ProjectDetail />
        <Proposals />
      </Stack>
    </PageContainer.Marketplace>
  );
}
