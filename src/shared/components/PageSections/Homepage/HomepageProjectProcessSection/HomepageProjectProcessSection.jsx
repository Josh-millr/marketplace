import {
  EditPencil,
  VerifiedUser,
  CardSecurity,
  HeadsetHelp,
} from 'iconoir-react';
import { Box, Text, Stack, Title, Grid } from '@mantine/core';

import { PageContainer } from '@/shared/components/PageContainer';

import { useStyles } from './style.HomepageProjectProcessSection';

const steps = [
  {
    icon: EditPencil,
    title: 'Post a job',
    descr: 'Simply fill in a title and job description',
  },
  {
    icon: VerifiedUser,
    title: 'Choose freelancers',
    descr: 'Choose the best candidates from a pool of talented freelancers',
  },
  {
    icon: CardSecurity,
    title: 'Pay securely',
    descr: `Your funds are secured in escrow to ensure you receive exactly 
    what you paid for`,
  },
  {
    icon: HeadsetHelp,
    title: "We're are here to help",
    descr: 'Get 24/7 support via live chat and email',
  },
];

export function HomepageProjectProcessSection() {
  const { classes } = useStyles();
  return (
    <Box className={classes.stepStripContainer} component="section">
      <PageContainer layout="main">
        <PageContainer.Main>
          <Stack spacing="4xl">
            <Stack spacing="sm">
              <Title order={1} className="h1">
                Need something done?
              </Title>
              <Text className="subtitle-sm">
                How it works in three easy steps
              </Text>
            </Stack>

            <Grid gap="lg">
              {steps.map(({ icon: Icon, title, descr }) => (
                <Grid.Col span={12} sm={6} md={3} key={title}>
                  <Stack className={classes.stepCard} spacing="lg">
                    <Icon className={classes.icon} />
                    <Stack spacing="sm">
                      <Text className="subheading-sm" weight={700}>
                        {title}
                      </Text>
                      <Text className="subtitle-sm">{descr}</Text>
                    </Stack>
                  </Stack>
                </Grid.Col>
              ))}
            </Grid>
          </Stack>
        </PageContainer.Main>
      </PageContainer>
    </Box>
  );
}
