import Image from 'next/image';

import { Flex, Text, Grid, Box, Stack, useMantineTheme } from '@mantine/core';
import {
  CardSecurity,
  NoCoin,
  VerifiedBadge,
  CheckCircle,
} from 'iconoir-react';

import { PageContainer } from '@/shared/components/PageContainer';

import { useStyles } from './style.HomepagePlatformGuaranteeSection';

const benefitList = [
  {
    icon: VerifiedBadge,
    title: 'Proof of quality',
    descr: `Our review and rating system makes it easy for you to check the 
    credibility of the freelancer you're hiring.`,
  },
  {
    icon: NoCoin,
    title: 'No cost until you hire',
    descr: `Freelancers only gets paid when you’re satisfied with the quality 
    of the delivery.`,
  },
  {
    icon: CardSecurity,
    title: 'Safe and secure',
    descr: 'Our escrow system guarantees that your funds are secured.',
  },
];

const benefitSummary = [
  { point: 'Works for every budget' },
  { point: 'Fast and reliable' },
  { point: 'Protected payment, every time' },
  { point: '24/7 support' },
];

export function HomepagePlatformGuaranteeSection() {
  const { classes } = useStyles();
  const { colors } = useMantineTheme();

  const benefitCompList = benefitList.map(({ icon: Icon, title, descr }) => (
    <Flex gap="sm" key={title}>
      <Icon className={classes.icon} />
      <Stack spacing={0}>
        <Text className="subheading-sm" fw={700}>
          {title}
        </Text>
        <Text className="body-sm" color="neutral.7" maw={275}>
          {descr}
        </Text>
      </Stack>
    </Flex>
  ));

  const benefitCompSummary = benefitSummary.map(({ point }) => (
    <Flex gap="sm" key={point}>
      <CheckCircle height={20} width={20} color={colors.neutral[1]} />
      <Text className="label-sm" fw={700}>
        {point}
      </Text>
    </Flex>
  ));

  return (
    <Box className={classes.platformBenefitContainer} component="section">
      <PageContainer layout="main">
        <PageContainer.Main>
          <Grid gutter="3xl">
            {/* Section text content */}
            <Grid.Col span={12} md={6}>
              <Stack spacing="2xl">
                <Text className="h1" fw={700}>
                  A whole world of freelance talent at your fingertips
                </Text>
                <Stack spacing="xl">{benefitCompList}</Stack>
              </Stack>
            </Grid.Col>

            {/* Section visual content */}
            <Grid.Col span={12} md={6}>
              <Box component="div" className={classes.sectionSummany}>
                <div className={classes.pointSummaryWrapper}>
                  <Box className={classes.pointSummaryContainer}>
                    <Stack spacing="xl">{benefitCompSummary}</Stack>
                  </Box>
                </div>

                <div className={classes.imageWrapper}>
                  <Box component="div" className={classes.imageContainer}>
                    <Image
                      fill
                      alt="american woman staring"
                      style={{ objectFit: 'cover', borderRadius: '4px' }}
                      src="/images/background/JPG/bg-black-freelancer-on-smilling-1280x853.jpg"
                    />
                  </Box>
                </div>
              </Box>
            </Grid.Col>
          </Grid>
        </PageContainer.Main>
      </PageContainer>
    </Box>
  );
}
