import { memo } from 'react';
import {
  Drawer,
  Title,
  Text,
  Badge,
  Grid,
  Group,
  Stack,
  Divider,
} from '@mantine/core';
import Capitalize from 'lodash/capitalize';
import { GraduationCap, Clock, ViewGrid } from 'iconoir-react';

import { iconCreator } from '@/shared/utils/iconCreator';
import { displayNumberInNaira } from '@/shared/utils/displayNumberInNaira';

function LabelGroup({ icon, label, data }) {
  return (
    <Group>
      {iconCreator({
        icon,
        sizeOveride: 32,
        strokeOveride: 1,
      })}
      <div>
        <Title className="label-lg" tt="capitalize" fw={'700!important'}>
          {data}
        </Title>
        <Text className="label-md" c="neutral.6" tt="capitalize">
          {label}
        </Text>
      </div>
    </Group>
  );
}

export const FreelancerMarketplaceProjectDetailsSection = memo((props) => {
  const { data, opened, close } = props;

  return (
    <Drawer.Root
      opened={opened}
      onClose={close}
      size={756}
      position="right"
      overlayProps={{ opacity: 0.5, blur: 4 }}
    >
      <Drawer.Overlay />
      <Drawer.Content>
        <Drawer.Header px="xl">
          <Drawer.CloseButton />
          <Group position="apart" w="100%" px="lg">
            <Badge size="md">{Capitalize(data?.category?.main)}</Badge>
            <Text className="label-md">{data?.createdAt}</Text>
          </Group>
        </Drawer.Header>

        <Drawer.Body>
          <Stack spacing="2xl">
            <Title className="sub-h2">{data?.title}</Title>
            <Text className="body-md">{data?.description}</Text>
          </Stack>

          <Stack spacing="xl">
            <Divider />
            <Grid>
              <Grid.Col span={6} md={4}>
                <LabelGroup
                  icon={GraduationCap}
                  label="Experience"
                  data={data.experienceLevel}
                />
              </Grid.Col>
              <Grid.Col span={6} md={4}>
                <LabelGroup
                  icon={Clock}
                  label="Projected Duration"
                  data={data?.projectedDuration}
                />
              </Grid.Col>
              <Grid.Col span={6} md={4}>
                <LabelGroup
                  icon={ViewGrid}
                  label="Category"
                  data={data?.category?.main}
                />
              </Grid.Col>
            </Grid>
            <Divider />
          </Stack>
        </Drawer.Body>
      </Drawer.Content>
    </Drawer.Root>
  );
});
