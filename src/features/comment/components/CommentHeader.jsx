import { Text } from '@mantine/core';

export function CommentHeader({ title, link }) {
  return (
    <Text className="label-lg" fw="700!important" td='underline'>
      {title}
    </Text>
  );
}
