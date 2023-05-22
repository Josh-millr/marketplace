import Capitalize from 'lodash/capitalize';
import { Text, Title, Stack, Group, Box } from '@mantine/core';

export function CommentCard({ author, comment, createdAt }) {
  return (
    <Box>
      <Stack spacing="lg" py="md">
        <Group spacing="md">
          <Title className="label-sm" fw="700!important">
            {Capitalize(author)}
          </Title>
          <Text className="label-sm">{`Posted at ${createdAt}`}</Text>
        </Group>
        <Text className="body-sm">{comment}</Text>
      </Stack>
    </Box>
  );
}
