import { Box, Text, Grid, Stack, Title } from '@mantine/core';

import { PageContainer } from '@/shared/components/PageContainer';

import { useStyles } from './style.HomepageMarketplaceStatsSection';

const counts = [
  { count: '937M', title: 'Projects Completed' },
  { count: '834M', title: 'Freelancers' },
  { count: '83M', title: 'Order Received' },
];

const cardList = counts.map(({ count, title }) => (
  <Grid.Col key={title} span={6} sm={4}>
    <Stack justify="center" align="center" spacing="xs">
      <Title className="h2">{count}</Title>
      <Text className="subtitle-sm" color="neutral.6">
        {title}
      </Text>
    </Stack>
  </Grid.Col>
));

export function HomepageMarketplaceStatsSection() {
  const { classes } = useStyles();

  return (
    <Box className={classes.StatStripContainer} component="section">
      <PageContainer layout="main">
        <PageContainer.Main>
          <Grid grow>{cardList}</Grid>
        </PageContainer.Main>
      </PageContainer>
    </Box>
  );
}
