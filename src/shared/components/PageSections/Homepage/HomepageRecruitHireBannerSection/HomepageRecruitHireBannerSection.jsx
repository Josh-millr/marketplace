import { useRouter } from 'next/router';
import {
  Box,
  Text,
  Title,
  Stack,
  Button,
} from '@mantine/core';

import { PageContainer } from '@/shared/components/PageContainer';

import { useStyles } from './style.HomepageRecruitHireBannerSection';

export function HomepageRecruitHireBannerSection() {
  const router = useRouter();
  const { classes } = useStyles();

  return (
    <Box className={classes.wrapper} component="section">
      <PageContainer.Main>
        <Stack spacing="4xl" className={classes.content}>
          <Stack spacing="sm">
            <Title order={1} className="h1">
              Find the talent needed to get your business growing.
            </Title>
            <Text className="subtitle-sm">
              Recruit and hire from a pool of Nigerian talent.
            </Text>
          </Stack>

          <Box w={152}>
            <Button
              size="md"
              variant="filled"
              onClick={() => router.push('/register')}
            >
              Get Started
            </Button>
          </Box>
        </Stack>
      </PageContainer.Main>
    </Box>
  );
}
