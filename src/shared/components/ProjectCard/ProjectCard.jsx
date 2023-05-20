import {
  Grid,
  Divider,
  Text,
  Title,
  Box,
  Spoiler,
  Stack,
  Button,
  Group,
  MediaQuery,
  Skeleton,
} from '@mantine/core';
import { GraduationCap, Clock, ViewGrid } from 'iconoir-react';

import { iconCreator } from '@/shared/utils/iconCreator';
import { displayNumberInNaira } from '@/shared/utils/displayNumberInNaira';

import { useStyles } from './style.ProjectCard';
import { CustomSuspense } from '../CustomSuspense';

export function ProjectCard({ data, selectProject }) {
  const { classes } = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Grid>
        <Grid.Col span={12} md={9} onClick={() => selectProject(data)}>
          <Stack spacing="xl">
            <Stack>
              <Group position="apart">
                <CustomSuspense
                  dependency={data?.title}
                  fallback={<Skeleton height={12} width="30%" />}
                >
                  <Title className="sub-h3">{data?.title}</Title>
                </CustomSuspense>
                <CustomSuspense
                  dependency={data?.createdAt}
                  fallback={<Skeleton height={12} width="30%" />}
                >
                  <Text className="label-md" fw="700!important" c="neutral.7">
                    {`Posted at - ${data?.createdAt}`}
                  </Text>
                </CustomSuspense>
              </Group>
              <CustomSuspense
                dependency={data?.proposalRecived}
                fallback={<Skeleton height={12} width={'10%'} />}
              >
                <Text className="label-md" fw={'700!important'} tt="capitalize">
                  {`Proposals Recieved: ${data?.proposalRecived}`}
                </Text>
              </CustomSuspense>
            </Stack>

            <MediaQuery largerThan="md" styles={{ display: 'none' }}>
              <Stack spacing="xs" align="flex-start">
                <CustomSuspense
                  dependency={data?.budget}
                  fallback={<Skeleton height={16} width="50%" />}
                >
                  <Title className="h1">
                    {data?.budget && displayNumberInNaira(data?.budget)}
                  </Title>
                </CustomSuspense>

                <CustomSuspense
                  dependency={data?.priceType}
                  fallback={<Skeleton height={16} width="53%" />}
                >
                  <Text className="label-md" tt="capitalize" c="neutral.6">
                    {`Budget (${data?.priceType})`}
                  </Text>
                </CustomSuspense>
              </Stack>
            </MediaQuery>

            <Stack spacing="md">
              <Group c="neutral.7">
                <CustomSuspense
                  dependency={data?.experienceLevel}
                  fallback={<Skeleton height={12} width={'10%'} />}
                >
                  <Group spacing="xs">
                    {iconCreator({ icon: GraduationCap, sizeOveride: 20 })}
                    <Text
                      className="label-md"
                      fw={'500!important'}
                      tt="capitalize"
                    >
                      {`Experience: ${data?.experienceLevel}`}
                    </Text>
                  </Group>
                </CustomSuspense>
                <CustomSuspense
                  dependency={data?.projectedDuration}
                  fallback={<Skeleton height={12} width={'10%'} />}
                >
                  <Group spacing="xs">
                    {iconCreator({ icon: Clock, sizeOveride: 20 })}
                    <Text
                      className="label-md"
                      fw={'500!important'}
                      tt="capitalize"
                    >
                      {`Projected Duration: ${data?.projectedDuration} days`}
                    </Text>
                  </Group>
                </CustomSuspense>
                <CustomSuspense
                  dependency={data?.category?.main}
                  fallback={<Skeleton height={12} width={'10%'} />}
                >
                  <Group spacing="xs">
                    {iconCreator({ icon: ViewGrid, sizeOveride: 20 })}
                    <Text
                      className="label-md"
                      fw={'500!important'}
                      tt="capitalize"
                    >
                      {`Category: ${data?.category?.main}`}
                    </Text>
                  </Group>
                </CustomSuspense>
              </Group>

              <CustomSuspense
                dependency={data?.description}
                fallback={
                  <Stack spacing="lg">
                    <Skeleton height={12} width={'100%'} />
                    <Skeleton height={12} width={'100%'} />
                    <Skeleton height={12} width={'60%'} />
                  </Stack>
                }
              >
                <Spoiler maxHeight={240} showLabel="Show more" hideLabel="Hide">
                  <Text className="body-md">{data?.description}</Text>
                </Spoiler>
              </CustomSuspense>
            </Stack>
          </Stack>
        </Grid.Col>

        {/* Column 2 */}
        <Grid.Col span={12} md={3}>
          <Group position="apart" h="100%">
            <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
              <Divider orientation="vertical" />
            </MediaQuery>

            <Stack spacing="xl">
              <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
                <Stack spacing="xs" align="flex-end">
                  <CustomSuspense
                    dependency={data?.budget}
                    fallback={<Skeleton height={24} width="50%" />}
                  >
                    <Title className="h1">
                      {data?.budget && displayNumberInNaira(data?.budget)}
                    </Title>
                  </CustomSuspense>

                  <Text className="label-md" tt="capitalize" c="neutral.6">
                    {`Budget (${data?.priceType || ''})`}
                  </Text>
                </Stack>
              </MediaQuery>

              {data?.id && <Button>Apply now</Button>}
            </Stack>
          </Group>
        </Grid.Col>
      </Grid>
    </Box>
  );
}
