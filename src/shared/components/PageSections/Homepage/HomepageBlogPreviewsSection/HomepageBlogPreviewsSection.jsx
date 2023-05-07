import Link from 'next/link';
import {
  Text,
  Space,
  Stack,
  Title,
  Group,
  Center,
  Flex,
  SimpleGrid,
} from '@mantine/core';
import { ArrowRight } from 'iconoir-react';
import { v4 as uuidv4 } from 'uuid';

import { PageContainer } from '@/shared/components/PageContainer';
import { insightsData } from '@/shared/constants/insightsData';

import { useStyle } from './style.HomepageBlogPreviewsSection';
import { InsightCard } from './InsightCard/InsightCard';

export function HomepageBlogPreviewsSection() {
  const { classes, theme } = useStyle();

  return (
    <div className={classes.insightContainer}>
      <PageContainer layout="main">
        <PageContainer.Main>
          <Stack spacing="4xl">
            <Flex direction="column" gap={{ base: 'lg', md: 'sm' }}>
              <Group position="apart" w="100%">
                <Title className="h1">Insight</Title>
                <Link href="/">
                  <Center inline>
                    <Text className="label-md">All Categories</Text>
                    <Space w="sm" />
                    <ArrowRight color={`${theme.colors.neutral[1]}`} />
                  </Center>
                </Link>
              </Group>
              <Text className="subtitle-sm">
                See how you can up your career with our blog
              </Text>
            </Flex>

            <SimpleGrid
              cols={1}
              spacing="3xl"
              breakpoints={[
                { minWidth: 'xs', cols: 2, spacing: 'md' },
                { minWidth: 'md', cols: 4, spacing: 'md' },
              ]}
            >
              {insightsData.map(({ imgSrc, title, description, date }) => {
                const id = uuidv4();
                return (
                  <InsightCard
                    key={id}
                    date={date}
                    title={title}
                    imgSrc={imgSrc}
                    description={description}
                  />
                );
              })}
            </SimpleGrid>
          </Stack>
        </PageContainer.Main>
      </PageContainer>
    </div>
  );
}
