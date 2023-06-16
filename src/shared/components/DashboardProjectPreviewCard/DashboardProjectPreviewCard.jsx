/* eslint-disable operator-linebreak */
import { useState } from 'react';
import Link from 'next/link';
import {
  Box,
  Text,
  Title,
  Badge,
  Stack,
  Group,
  Flex,
  Skeleton,
  useMantineTheme,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Clock, Hourglass, LargeSuitcase } from 'iconoir-react';

import { iconCreator } from '@/shared/utils/iconCreator';
import { displayNumberInNaira } from '@/shared/utils/displayNumberInNaira';

import { CustomSuspense } from '../CustomSuspense';

import { useStyles } from './style.DashboardProjectPreviewCard';

function TitleProject({ title }) {
  return (
    <CustomSuspense
      fallback={
        <Stack w="100%">
          <Skeleton height={16} />
          <Skeleton height={16} width="70%" />
        </Stack>
      }
      dependency={title}
    >
      <Title className="sub-h1" lineClamp={2}>
        {title}
      </Title>
    </CustomSuspense>
  );
}

function Options({ expires, created, proposalsReceived }) {
  const { colors } = useMantineTheme();
  return (
    <Flex
      w="100%"
      gap={{ base: 'lg', md: 'xl' }}
      direction={{ base: 'column', md: 'row' }}
    >
      <CustomSuspense
        dependency={expires}
        fallback={<Skeleton height={16} width={80} />}
      >
        <Group spacing="sm">
          {iconCreator({
            icon: Hourglass,
            sizeOverride: 24,
            colorOverride: colors.danger[7],
          })}
          <Text className="label-md" fw="500!important" c="danger.7">
            Expires: {expires}
          </Text>
        </Group>
      </CustomSuspense>
      <CustomSuspense
        dependency={created}
        fallback={<Skeleton height={16} width={80} />}
      >
        <Group spacing="sm">
          {iconCreator({
            icon: Clock,
            sizeOverride: 24,
            colorOverride: colors.neutral[7],
          })}
          <Text className="label-md" fw="500!important">
            <span style={{ color: colors.neutral[7] }}>Created: </span>
            {/* TODO: Use TimeUtils to convert ISO to local time */}
            {created}
          </Text>
        </Group>
      </CustomSuspense>
      <CustomSuspense
        dependency={proposalsReceived}
        fallback={<Skeleton height={16} width={80} />}
      >
        <Group spacing="sm">
          <Group spacing="sm">
            {iconCreator({
              icon: LargeSuitcase,
              sizeOverride: 24,
              colorOverride: colors.neutral[7],
            })}
          </Group>
          <Text className="label-md" fw="500!important" c="neutral.7">
            Proposals:
          </Text>
          <Badge size="lg" variant="filled">
            {proposalsReceived} Received
          </Badge>
        </Group>
      </CustomSuspense>
    </Flex>
  );
}

function Price({ cost, priceType }) {
  return (
    <Flex
      direction="column"
      gap={{ base: 'sm', md: 'xl' }}
      justify={{ base: 'flex-start', md: 'flex-end' }}
    >
      <CustomSuspense
        dependency={priceType}
        fallback={<Skeleton height={16} width={80} />}
      >
        <Text
          className="label-md"
          fw="500!important"
          c="neutral.7"
          tt="capitalize"
        >
          {priceType} Budget
        </Text>
      </CustomSuspense>
      <CustomSuspense
        dependency={cost}
        fallback={<Skeleton height={16} width={80} />}
      >
        <Title className="sub-h3">{displayNumberInNaira(cost || 0)}</Title>
      </CustomSuspense>
    </Flex>
  );
}

export function DashboardProjectPreviewCard(props) {
  const { cost, title, expires, created, priceType, proposalsReceived, id } =
    props;

  const [hovered, setHovered] = useState(false);

  const { classes } = useStyles();

  const { breakpoints } = useMantineTheme();
  const matchSm = useMediaQuery(`(min-width: ${breakpoints.sm})`);

  return (
    <Link href={`/dashboard/client/projects/project/${id}` || ''}>
      <Box
        px={{ base: 0, md: '2xl' }}
        py={{ base: 'xl', md: '3xl' }}
        onMouseEnter={() => id && setHovered(true)}
        onMouseLeave={() => id && setHovered(false)}
        className={`${classes.wrapper} ${hovered && classes.wrapperHovered}`}
      >
        <Group position="apart">
          <Stack spacing="lg">
            <TitleProject title={title} />

            {matchSm === false && <Price cost={cost} priceType={priceType} />}

            <Options
              expires={expires}
              created={created}
              proposalsReceived={proposalsReceived}
            />
          </Stack>

          {matchSm && <Price cost={cost} priceType={priceType} />}
        </Group>
      </Box>
    </Link>
  );
}
