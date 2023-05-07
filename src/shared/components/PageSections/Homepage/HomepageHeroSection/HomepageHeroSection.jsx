import Image from 'next/image';
import { Box, Text, Flex, Stack, Title } from '@mantine/core';

import { PageContainer } from '@/shared/components/PageContainer';

import { useStyles } from './styles.HomepageHeroSection';
import { RatingBubble } from './Bubble/RatingBubble';
import { CustomSearchForm } from './CustomSearchForm';
import { ProjectBubble } from './Bubble/ProjectBubble';

function HomepageHeroSectionImage() {
  const { classes } = useStyles();

  return (
    <Box component="div" className={classes.layer}>
      <Box className={`${classes.layer} ${classes.layer1}`}>
        {/* layer 1 - Overlay */}
        <div className={`${classes.overlay}`}></div>
      </Box>
      <Box className={`${classes.layer} ${classes.layer2}`}>
        {/* layer 2 - Activity Bubbles */}
        <RatingBubble />
        <ProjectBubble />
      </Box>
      <Box className={`${classes.layer} ${classes.layer3}`}>
        {/* layer 3 - Image */}
        <Image
          fill
          className={classes.image}
          style={{ objectFit: 'contain' }}
          alt="An african woman smilling and folding her arms"
          src="/images/background-cut/PNG/bgcut-african-woman-folding-arms-537x537.png"
        />
      </Box>
    </Box>
  );
}

export function HomepageHeroSection() {
  return (
    <Box
      w="100%"
      component="header"
      bg="barbarianFlesh.1"
      pt={{ base: '7xl', md: '0' }}
    >
      <PageContainer layout="main">
        <PageContainer.Main>
          <Flex direction={{ base: 'column', md: 'row' }} align="center">
            <Stack spacing="2xl">
              <Stack spacing="sm">
                <Title order={1} className="display-sm">
                  Get More Work Done With Talented Freelancers.
                </Title>
                <Text className="subtitle-sm" color="neutral.6">
                  Connect with the right freelancers for the job.
                </Text>
              </Stack>

              <div>
                <CustomSearchForm />
              </div>
            </Stack>

            <div style={{ width: '100%', overflow: 'hidden' }}>
              <HomepageHeroSectionImage />
            </div>
          </Flex>
        </PageContainer.Main>
      </PageContainer>
    </Box>
  );
}
