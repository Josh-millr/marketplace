import {
  Paper,
  Avatar,
  Title,
  Text,
  Box,
  Grid,
  Flex,
  Button,
  Spoiler,
  Stack,
  Group,
} from '@mantine/core';

import { RatingReviewBadge } from '../RatingReviewBadge';

export function FreelancerProfilePreviewCard(props) {
  const {
    name,
    avatar,
    profession,
    description,
    username,
    ratings,
    country,
    createdAt,
    languages,
    comments,
  } = props;

  return (
    <Paper shadow="xs" p="md" withBorder>
      <Stack spacing="md">
        {/* Account informaiton */}
        <Flex direction={{ base: 'column', md: 'row' }}>
          <Group spacing="md">
            <Avatar src={avatar} size={9999} />
            <Stack spacing="xs">
              <Group spacing="sm">
                <Title className="label-md" fw={'700!important'}>
                  {name}
                </Title>
                <Text className="label-md">@{username}</Text>
              </Group>

              <Text className="label-md">{profession}</Text>
              <RatingReviewBadge
                ratings={ratings}
                totalComment={comments}
              />
            </Stack>
          </Group>

          {/* Quick actions */}
          <Button variant="stroke">Contact me</Button>
        </Flex>

        <Grid>
          {/* Location */}
          <Grid.Col span={12} sm={6}>
            <Title className='label-md' fw={'700!important'}>Location</Title>
            <Text className='label-md' tt='capitalize'>{country}</Text>
          </Grid.Col>

          {/*  */}
          <Grid.Col span={12} sm={6}>
            <Title className='label-md' fw={'700!important'}></Title>
            <Text className='label-md'></Text>
          </Grid.Col>
        </Grid>

        {/* Account Description */}
        <Spoiler maxHeight={320}>
          <Text className="body-md">{description}</Text>
        </Spoiler>
      </Stack>
    </Paper>
  );
}
