import { useState } from 'react';

import {
  Text,
  ActionIcon,
  Badge,
  useMantineTheme,
  Stack,
  Divider,
  Group,
  Button,
  Flex,
  Box,
} from '@mantine/core';
import { Clock, ProfileCircle, Trash, EyeAlt } from 'iconoir-react';

import { iconCreator } from '@/shared/utils/iconCreator';
import { displayNumberInNaira } from '@/shared/utils/displayNumberInNaira';
import { useStyles } from './style.DashboardProposalPreviewCard';

export function DashboardProposalPreviewCard(props) {
  const {
    cost,
    status,
    category,
    authorId,
    proposalId,
    authorName,
    projectTitle,
    deliveryTime,
    submissionDate,
  } = props;

  const [hovered, setHovered] = useState(false);
  const { colors } = useMantineTheme();

  const { classes } = useStyles();

  return (
    <Box
      className={`${classes.wrapper} ${hovered && classes.wrapperHovered}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Stack spacing="lg">
        <Stack spacing="sm">
          <Group position="apart">
            {/* <Badge></Badge> */}
            <Text className="label-md" color="neutral.6" fw={'700!important'}>
              {category}
            </Text>
            <Text className="label-md" fw={'700!important'}>{`${displayNumberInNaira(
              cost
            )}/${deliveryTime}`}</Text>
          </Group>

          <Text
            className={`${classes.title} ${
              hovered && classes.titleHovered
            } body-md`}
          >
            {projectTitle}
          </Text>
        </Stack>

        <Flex gap="md">
          <Group spacing="xs">
            <Group spacing="xs">
              {iconCreator({ icon: Clock, sizeOverride: 16 })}
              <Text className="label-sm" fw="700!important">
                Received:
              </Text>
            </Group>
            <Text className="label-sm" fw="700!important">
              {submissionDate}
            </Text>
          </Group>

          <Divider orientation="vertical" />

          <Group spacing="xs">
            <Group spacing="xs">
              {iconCreator({ icon: ProfileCircle, sizeOverride: 16 })}
              <Text className="label-sm" fw="700!important">
                Creator:
              </Text>
            </Group>
            <Text className="label-sm" fw="700!important">
              {authorName}
            </Text>
          </Group>
        </Flex>

        <Group position="apart">
          <Flex gap="md">
            <Button variant="outline">Hire now</Button>
            <ActionIcon size="lg" variant="light">
              {iconCreator({ icon: Trash, colorOverride: colors.danger[8] })}
            </ActionIcon>

            <ActionIcon size="lg" variant="light">
              {iconCreator({ icon: EyeAlt })}
            </ActionIcon>
          </Flex>
          <Badge>{status}</Badge>
        </Group>
      </Stack>
    </Box>
  );
}
