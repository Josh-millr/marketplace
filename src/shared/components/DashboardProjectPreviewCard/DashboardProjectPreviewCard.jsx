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
  useMantineTheme,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Clock, Hourglass, LargeSuitcase } from 'iconoir-react';

import { iconCreator } from '@/shared/utils/iconCreator';
import { displayNumberInNaira } from '@/shared/utils/displayNumberInNaira';

import { useStyles } from './style.DashboardProjectPreviewCard';

function TitleProject({ title }) {
  return <Title className="sub-h1">{title}</Title>;
}

function Options({ expires, created, proposalsReceived }) {
  const { colors } = useMantineTheme();
  return (
    <Flex
      w="100%"
      gap={{ base: 'lg', md: 'xl' }}
      direction={{ base: 'column', md: 'row' }}
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
      <Group spacing="sm">
        {iconCreator({
          icon: Clock,
          sizeOverride: 24,
          colorOverride: colors.neutral[7],
        })}
        <Text className="label-md" fw="500!important">
          <span style={{ color: colors.neutral[7] }}>Created: </span>
          {created}
        </Text>
      </Group>
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
      <Text className="label-md" fw="500!important" c="neutral.7">
        {priceType} Budget
      </Text>
      <Title className="sub-h3">{displayNumberInNaira(cost)}</Title>
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
    <Link href={`/dashboard/buyer/projects/project/${id}` || ''}>
      <Box
        px={{ base: 0, md: '2xl' }}
        py={{ base: 'xl', md: '3xl' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
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
