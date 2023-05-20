import {
  Text,
  Paper,
  Button,
  Group,
  Divider,
  Stack,
  Flex,
} from '@mantine/core';
import { Calendar, Map, Male, Female, Language } from 'iconoir-react';
import startCase from 'lodash/startCase';

import { iconCreator } from '@/shared/utils/iconCreator';

export function FreelancerProfileInfoCard(props) {
  const { location, joinedDate, languages, gender } = props;

  const allLanguages = startCase(languages.join(', '));

  return (
    <Paper
      shadow="sm"
      radius="xs"
      px={{ base: 'md', sm: 'lg' }}
      py={{ base: 'md', sm: '2xl' }}
    >
      <Stack spacing="md">
        <Group position="apart">
          <Group>
            {iconCreator({ icon: Map })}
            <Text className="label-md">Location:</Text>
          </Group>
          <Text className="label-md" tt="capitalize">
            {' '}
            {location}
          </Text>
        </Group>

        <Divider />

        <Group position="apart">
          <Group>
            {iconCreator({ icon: Calendar })}
            <Text className="label-md">Member since:</Text>
          </Group>
          <Text className="label-md" tt="capitalize">
            {joinedDate}
          </Text>
        </Group>

        <Divider />

        <Group position="apart">
          <Group>
            {iconCreator({ icon: gender === 'male' ? Male : Female })}
            <Text className="label-md">Gender:</Text>
          </Group>
          <Text className="label-md" tt="capitalize">
            {gender}
          </Text>
        </Group>

        <Divider />

        <Group position="apart">
          <Group>
            {iconCreator({ icon: Language })}
            <Text className="label-md">Languages:</Text>
          </Group>
          <Text className="label-md">{allLanguages}</Text>
        </Group>

        <Flex
          pt="md"
          gap="md"
          direction={{ base: 'column', sm: 'row', md: 'column' }}
        >
          <Button fullWidth>Contact me</Button>
          <Button fullWidth variant="outline">
            Share my profile
          </Button>
        </Flex>
      </Stack>
    </Paper>
  );
}
