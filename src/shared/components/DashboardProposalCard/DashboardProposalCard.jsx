import { memo } from 'react';
import {
  Box,
  Text,
  Flex,
  Group,
  Stack,
  Button,
  Divider,
  Skeleton,
  ActionIcon,
  MediaQuery,
  useMantineTheme,
} from '@mantine/core';
import { Clock, ProfileCircle, Cancel, Page } from 'iconoir-react';

import { iconCreator } from '@/shared/utils/iconCreator';
import { displayNumberInNaira } from '@/shared/utils/displayNumberInNaira';

import { CustomSuspense } from '../CustomSuspense';
import { useStyles } from './style.DashboardProposalCard';

export const DashboardProposalCard = memo((props) => {
  const { showCoverLetter, ...proposal } = props;

  const { colors } = useMantineTheme();
  const { classes } = useStyles();

  const showLetter = () => showCoverLetter(proposal?.coverLetter);

  return (
    <Box py="xl" px={{ base: '0', md: 'xl' }} className={`${classes.wrapper}`}>
      <Flex direction={{ base: 'column', md: 'row' }} gap="2xl" w="100%">
        <Stack spacing="lg">
          {/* ... Cover Letter Preview */}

          <CustomSuspense
            dependency={proposal?.coverLetter}
            fallback={<Skeleton height={16} w="100%" />}
          >
            <Text lineClamp={2} className="body-md">
              {proposal?.coverLetter}
            </Text>
          </CustomSuspense>

          {/* ... Pricing .... */}
          <CustomSuspense>
            <Text className="h1" fw={'700!important'}>{`${displayNumberInNaira(
              proposal?.cost || 0
            )}/${proposal?.deliveryTime}`}</Text>
          </CustomSuspense>

          {/* ... Date & Author .... */}
          <Flex
            w="100%"
            direction={{ base: 'column', md: 'row' }}
            gap={{ base: 'lg', md: 'xl' }}
          >
            <CustomSuspense
              dependency={proposal?.submissionDate}
              fallback={<Skeleton height={16} width={80} />}
            >
              <Group spacing="sm">
                {iconCreator({
                  icon: Clock,
                  colorOverride: colors.neutral[6],
                })}
                <Group spacing="xs">
                  <Text className="label-md" fw="500!important" c="neutral.6">
                    Received:
                  </Text>
                  <Text className="label-md" fw="500!important">
                    {proposal?.submissionDate}
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
              dependency={proposal?.authorName}
              fallback={<Skeleton height={16} width={80} />}
            >
              <div>
                <Button
                  size="xs"
                  radius={9999}
                  variant="light"
                  leftIcon={iconCreator({
                    icon: ProfileCircle,
                  })}
                >
                  {proposal?.authorName}
                </Button>
              </div>
            </CustomSuspense>
          </Flex>
        </Stack>

        {/* ... CTA .... */}
        <Flex direction="row" gap="lg">
          <ActionIcon variant="light" onClick={showLetter}>
            {iconCreator({ icon: Page, sizeOverride: 24 })}
          </ActionIcon>
          <ActionIcon variant="light">
            {iconCreator({
              icon: Cancel,
              sizeOverride: 24,
              colorOverride: colors.danger[7],
            })}
          </ActionIcon>
          <Button>Hire</Button>
        </Flex>
      </Flex>
    </Box>
  );
});
