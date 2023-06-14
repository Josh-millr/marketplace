import { useState } from 'react';

import {
  Text,
  useMantineTheme,
  Stack,
  Divider,
  Group,
  Skeleton,
  Button,
  Flex,
  Box,
  MediaQuery,
} from '@mantine/core';
import { Clock, ProfileCircle, Cancel } from 'iconoir-react';

import { iconCreator } from '@/shared/utils/iconCreator';
import { displayNumberInNaira } from '@/shared/utils/displayNumberInNaira';

import { CustomSuspense } from '../CustomSuspense';
import { useStyles } from './style.DashboardProposalCard';

export function DashboardProposalCard(props) {
  const {
    cost,
    status,
    authorId,
    setCoverLetter,
    authorName,
    coverLetter,
    deliveryTime,
    submissionDate,
  } = props;

  const [hovered, setHovered] = useState(false);
  const { colors } = useMantineTheme();

  const { classes } = useStyles();

  const showCoverLetter = () => setCoverLetter(coverLetter);

  return (
    <Box
      py="xl"
      px={{ base: '0', md: 'xl' }}
      className={`${classes.wrapper} ${hovered && classes.wrapperHovered}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Flex direction={{ base: 'column', md: 'row' }} gap="2xl" w="100%">
        <Stack spacing="lg">
          {/* ... Cover Letter Preview */}

          <CustomSuspense
            dependency={coverLetter}
            fallback={<Skeleton height={16} w="100%" />}
          >
            <Text lineClamp={2} className="body-md">
              {coverLetter}
            </Text>
          </CustomSuspense>

          {/* ... Pricing .... */}
          <CustomSuspense>
            <Text className="h1" fw={'700!important'}>{`${displayNumberInNaira(
              cost || 0
            )}/${deliveryTime}`}</Text>
          </CustomSuspense>

          {/* ... Date & Author .... */}
          <Flex
            w="100%"
            direction={{ base: 'column', md: 'row' }}
            gap={{ base: 'lg', md: 'xl' }}
          >
            <CustomSuspense
              dependency={submissionDate}
              fallback={<Skeleton height={16} width={80} />}
            >
              <Group spacing="sm">
                {iconCreator({
                  icon: Clock,
                  sizeOverride: 24,
                  colorOverride: colors.neutral[6],
                })}
                <Group spacing="xs">
                  <Text className="label-md" fw="500!important" c="neutral.6">
                    Received:
                  </Text>
                  <Text className="label-md" fw="500!important">
                    {submissionDate}
                  </Text>
                </Group>
              </Group>
            </CustomSuspense>
            {/* .... */}
            <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
              <Divider orientation="vertical" />
            </MediaQuery>
            {/* .... */}
            <CustomSuspense
              dependency={authorName}
              fallback={<Skeleton height={16} width={80} />}
            >
              <Button
                size="xs"
                radius={9999}
                variant="light"
                leftIcon={iconCreator({
                  icon: ProfileCircle,
                  sizeOverride: 24,
                })}
              >
                {authorName}
              </Button>
            </CustomSuspense>
          </Flex>
        </Stack>

        {/* ... CTA .... */}
      </Flex>
    </Box>
  );
}
