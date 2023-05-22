import { useState } from 'react';
import Link from 'next/link';
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
import { Clock, MultiplePages, Trash, BinMinus } from 'iconoir-react';

import { iconCreator } from '@/shared/utils/iconCreator';
import { displayNumberInNaira } from '@/shared/utils/displayNumberInNaira';
import { useStyles } from './style.DashboardProjectPreviewCard';

export function DashboardProjectPreviewCard(props) {
  const {
    cost,
    title,
    status,
    expires,
    created,
    id,
    category,
    pricingtype,
    proposalsRecived,
  } = props;

  const [hovered, setHovered] = useState(false);

  const { colors } = useMantineTheme();
  const { classes } = useStyles();

  return (
    <Link href={`/dashboard/buyer/projects/project/${id}` || ''}>
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
              <Text
                className="label-md"
                fw={'700!important'}
              >{`${displayNumberInNaira(cost)}/${pricingtype}`}</Text>
            </Group>

            <Text
              className={`${classes.title} ${
                hovered && classes.titleHovered
              } body-md`}
            >
              {title}
            </Text>
          </Stack>

          <Flex gap="md">
            <Group spacing="xs">
              <Group spacing="xs">
                {iconCreator({ icon: Clock, sizeOveride: 16 })}
                <Text className="label-sm" fw="700!important">
                  Created:
                </Text>
              </Group>
              <Text className="label-sm" fw="700!important">
                {created}
              </Text>
            </Group>

            <Divider orientation="vertical" />

            <Group spacing="xs">
              <Group spacing="xs">
                {iconCreator({ icon: MultiplePages, sizeOveride: 16 })}
                <Text className="label-sm" fw="700!important">
                  Proposals:
                </Text>
              </Group>
              <Text className="label-sm" fw="700!important">
                {proposalsRecived}
              </Text>
            </Group>

            <Divider orientation="vertical" />

            <Group spacing="xs">
              <Group spacing="xs">
                {iconCreator({
                  icon: BinMinus,
                  sizeOveride: 16,
                  colorOveride: colors.danger[7],
                })}
                <Text
                  className="label-sm"
                  fw="700!important"
                  color={colors.danger[7]}
                >
                  Expires:
                </Text>
              </Group>
              <Text
                className="label-sm"
                fw="700!important"
                color={colors.danger[7]}
              >
                {expires}
              </Text>
            </Group>
          </Flex>

          <Group position="apart">
            <Flex gap="md">
              <Button variant="outline">View Proposals</Button>
              <ActionIcon size="lg">
                {iconCreator({ icon: Trash, colorOveride: colors.danger[8] })}
              </ActionIcon>
            </Flex>
            <Badge size="sm">{status}</Badge>
          </Group>
        </Stack>
      </Box>
    </Link>
  );
}
