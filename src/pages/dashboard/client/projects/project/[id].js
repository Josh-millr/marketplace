import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import {
  Title,
  Text,
  Stack,
  Skeleton,
  Badge,
  Group,
  Modal,
  Divider,
  Box,
  SimpleGrid,
} from '@mantine/core';
import { ViewGrid, Bin } from 'iconoir-react';
import Capitalize from 'lodash/capitalize';

import { iconCreator } from '@/shared/utils/iconCreator';
import { projectDemo } from '@/shared/constants/projectDemo';
import { PageContainer } from '@/shared/components/PageContainer';
import { displayNumberInNaira } from '@/shared/utils/displayNumberInNaira';
import { SectionEmptyBanner } from '@/shared/components/SectionEmptyBanner';
import { DashboardSectionCard } from '@/shared/components/DashboardSectionCard';
import { DashboardProposalCard } from '@/shared/components/DashboardProposalCard';
import { DashboardGoBackButtonBar } from '@/shared/components/DashboardGoBackButtonBar';

export default function Project() {
  const [data, setData] = useState();
  const [coverLetter, setCoverLetter] = useState('');
  const {
    title,
    description,
    category,
    proposals,
    expires,
    budget,
    status,
    proposalsRecived,
    pricingtype,
    experienceLevel,
  } = projectDemo;

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    // Fetch project information...
  }, []);

  console.log(coverLetter);

  return (
    <PageContainer.Marketplace>
      <DashboardGoBackButtonBar />

      <DashboardSectionCard contentFullWidth padSection>
        <Stack spacing="3xl">
          <Stack spacing="xl">
            <Group position="apart">
              {title ? (
                <Title className="h1">{title}</Title>
              ) : (
                <Skeleton height={16} width="70%" />
              )}

              <Badge>{Capitalize(status || '')}</Badge>
            </Group>

            {description ? (
              <Text className="body-md">{description}</Text>
            ) : (
              <Stack spacing="lg">
                <Skeleton height={12} width="100%" />
                <Skeleton height={12} width="100%" />
                <Skeleton height={12} width="70%" />
              </Stack>
            )}
          </Stack>

          <Divider />

          <SimpleGrid
            cols={2}
            verticalSpacing="xl"
            spacing="md"
            breakpoints={[
              { minWidth: 'sm', cols: 3, verticalSpacing: '2xl' },
              { minWidth: 'lg', cols: 4, verticalSpacing: '2xl' },
            ]}
          >
            {/* Category */}
            <Stack spacing="sm">
              <Group spacing="sm">
                {iconCreator({ icon: ViewGrid, sizeOveride: 16 })}
                <Text className="label-md" fw="700!important">
                  Category
                </Text>
              </Group>
              {category ? (
                <Text className="label-md">{Capitalize(category)}</Text>
              ) : (
                <Skeleton height={12} width="50%" />
              )}
            </Stack>

            {/* Expires */}
            <Stack spacing="sm">
              <Group spacing="sm">
                {iconCreator({ icon: Bin, sizeOveride: 16 })}
                <Text className="label-md" fw="700!important">
                  Expires
                </Text>
              </Group>
              {category ? (
                <Text className="label-md">{expires}</Text>
              ) : (
                <Skeleton height={12} width="50%" />
              )}
            </Stack>

            {/* Budget */}
            <Stack spacing="sm">
              <Group spacing="sm">
                {iconCreator({ icon: Bin, sizeOveride: 16 })}
                <Text className="label-md" fw="700!important">
                  Budget
                </Text>
              </Group>
              {budget ? (
                <Text className="label-md">{displayNumberInNaira(budget)}</Text>
              ) : (
                <Skeleton height={12} width="50%" />
              )}
            </Stack>

            {/* Pricing Type */}
            <Stack spacing="sm">
              <Group spacing="sm">
                {iconCreator({ icon: Bin, sizeOveride: 16 })}
                <Text className="label-md" fw="700!important">
                  Pricing Type
                </Text>
              </Group>
              {pricingtype ? (
                <Text className="label-md">{Capitalize(pricingtype)}</Text>
              ) : (
                <Skeleton height={12} width="50%" />
              )}
            </Stack>

            {/* Experience Level */}
            <Stack spacing="sm">
              <Group spacing="sm">
                {iconCreator({ icon: Bin, sizeOveride: 16 })}
                <Text className="label-md" fw="700!important">
                  Experience Level
                </Text>
              </Group>
              {experienceLevel ? (
                <Text className="label-md">{Capitalize(experienceLevel)}</Text>
              ) : (
                <Skeleton height={12} width="50%" />
              )}
            </Stack>
          </SimpleGrid>
        </Stack>
      </DashboardSectionCard>

      <DashboardSectionCard
        title={`Proposals - ${proposalsRecived} Received`}
        withTitle
        contentFullWidth
      >
        <Modal
          opened={coverLetter.length > 0}
          onClose={() => setCoverLetter('')}
          title="Cover Letter"
          size="xl"
        >
          {coverLetter}
        </Modal>

        <Box>
          {proposals ? (
            proposals.map((proposal) => (
              <DashboardProposalCard
                setCoverLetter={setCoverLetter}
                key={proposal.proposalId}
                cost={proposal.cost}
                status={proposal.status}
                category={proposal.category}
                authorId={proposal.author.id}
                proposalId={proposal.proposalId}
                authorName={proposal.author.name}
                coverLetter={proposal.coverLetter}
                deliveryTime={proposal.deliveryTime}
                submissionDate={proposal.submissionDate}
              />
            ))
          ) : (
            <SectionEmptyBanner sectionTitle="proposals" />
          )}
        </Box>
      </DashboardSectionCard>
    </PageContainer.Marketplace>
  );
}
