import { memo } from 'react';
import {
  Flex,
  Text,
  Stack,
  Button,
  MediaQuery,
  Avatar,
  Divider,
  Badge,
  Skeleton,
  Group,
} from '@mantine/core';

import { CustomSuspense } from '../CustomSuspense';

export const DashboardClientWorkspaceCard = memo((props) => (
  <Flex gap="xl" p="xl" direction={'column'} w={'100%'}>
    <Flex w={'100%'} justify={{ base: 'column', md: 'space-between' }}>
      <Flex gap="xs" direction={'column'}>
        <CustomSuspense
          dependency={props?.status}
          fallback={<Skeleton height={16} width={100} />}
        >
          <Badge size="md">{props.status}</Badge>
        </CustomSuspense>
        {/* ... */}
        <CustomSuspense
          dependency={props?.title}
          fallback={<Skeleton height={16} width="100%" />}
        >
          <Text className="body-md" lineClamp={1}>
            {props.title}
          </Text>
        </CustomSuspense>
      </Flex>
      <Divider />
      <Button variant="subtle">View details</Button>
    </Flex>

    <Divider />

    <Flex w={'100%'} justify={'space-between'}>
      <Flex
        w={'100%'}
        gap={{ base: '2xl', md: '8xl' }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Stack spacing="sm">
          <Text className="label-md" c="neutral.6">
            Due on:
          </Text>
          <CustomSuspense
            dependency={props?.dueOn}
            fallback={<Skeleton height={16} width={100} />}
          >
            <Text className="label-md">{props?.dueOn}</Text>
          </CustomSuspense>
        </Stack>

        <Stack spacing="sm">
          <Text className="label-md" c="neutral.6">
            Freelancer:
          </Text>

          <Group spacing="sm">
            <CustomSuspense
              dependency={props?.freelancerAvatar}
              fallback={<Skeleton height={16} width={100} />}
            >
              <Avatar
                radius="xl"
                src={props?.freelancerAvatar || ''}
                alt={props?.freelancerName || ''}
              />
            </CustomSuspense>

            <Stack spacing={0}>
              <CustomSuspense
                dependency={props?.freelancerName}
                fallback={<Skeleton height={16} width={100} />}
              >
                <Text className="label-md">{props?.freelancerName}</Text>
              </CustomSuspense>
              <CustomSuspense
                dependency={props?.freelancerUsername}
                fallback={<Skeleton height={16} width={100} />}
              >
                <Text className="label-md" c="neutral.6">
                  @{props?.freelancerUsername}
                </Text>
              </CustomSuspense>
            </Stack>
          </Group>
        </Stack>
      </Flex>

      <CustomSuspense
        dependency={props?.status}
        fallback={<Skeleton height={16} width={100} />}
      >
        <Badge size="md">{props.status}</Badge>
      </CustomSuspense>
    </Flex>
  </Flex>
));
