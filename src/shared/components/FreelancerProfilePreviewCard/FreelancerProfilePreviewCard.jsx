import {
  Paper,
  Avatar,
  Title,
  Text,
  Box,
  Grid,
  Flex,
  Divider,
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
    <Paper p="lg" withBorder>
      <Stack spacing="md">
        {/* Account informaiton */}
        <Group position="apart">
          <Flex gap="md">
            <Avatar src={avatar} radius={9999} size="lg" />
            <Stack spacing="xs">
              <Group spacing="sm">
                <Title
                  className="label-md"
                  fw={'700!important'}
                  tt="capitalize"
                >
                  {name}
                </Title>
                <Text className="label-md">@{username}</Text>
              </Group>

              <Text className="label-md" tt="capitalize">
                {profession}
              </Text>
              <RatingReviewBadge ratings={ratings} totalComment={comments} />
            </Stack>
          </Flex>

          {/* Quick actions */}
          <div>
            <Button>Contact me</Button>
          </div>
        </Group>

        <Divider />

        <Grid py="md">
          {/* Location */}
          <Grid.Col span={4}>
            <Title className="label-md" fw={'700!important'}>
              From
            </Title>
            <Text className="label-md" tt="capitalize">
              {country}
            </Text>
          </Grid.Col>

          {/*  */}
          <Grid.Col span={4}>
            <Title className="label-md" fw={'700!important'}>
              Member since
            </Title>
            <Text className="label-md">Jul 2014</Text>
          </Grid.Col>

          <Grid.Col span={4}>
            <Title className="label-md" fw={'700!important'}>
              Languages
            </Title>
            <Text className="label-md">English</Text>
          </Grid.Col>
        </Grid>
        <Divider />

        {/* Account Description */}
        <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide">
          <Text className="body-md">{description}</Text>
        </Spoiler>
      </Stack>
    </Paper>
  );
}
