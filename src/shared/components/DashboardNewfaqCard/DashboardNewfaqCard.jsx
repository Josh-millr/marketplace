import { Trash } from 'iconoir-react';
import { Text, Title, Box, Stack, Grid, ActionIcon } from '@mantine/core';

import { iconCreator } from '@/shared/utils/iconCreator';

export function DashboardNewfaqCard({title, description, id, deleteFaq}) {
  return (
    <Grid gutter="2xl" gutterSm='5xl' w='100%' py='xl'>
      <Grid.Col span={12} sm="auto">
        <Stack spacing='sm'>
          <Title className='sub-h1' tt='capitalize'>
            {title}
          </Title>
          <Text className='body-md'>
            {description}
          </Text>
        </Stack>
      </Grid.Col>
      <Grid.Col span={12} sm="content">
        <ActionIcon onClick={() => deleteFaq && deleteFaq(id)}>
          {iconCreator({icon: Trash, sizeOverride: 24})}
        </ActionIcon>
      </Grid.Col>
    </Grid>
  );
}
