import { Box, Divider, Flex, Stack, Button } from '@mantine/core';
import { v4 as uuidv4 } from 'uuid';

import { CommentHeader } from './CommentHeader';
import { CommentCard } from './CommentCard';

export function Comment({ comments }) {
  return (
    <Stack spacing="xl" py="xl">
      {comments.map((allComments) => {
        const itemId = uuidv4();
        return (
          <Stack spacing="lg" key={itemId} px="xl">
            <Stack spacing="lg">
              <CommentHeader title={allComments.projectTitle} />

              <Stack spacing="lg">
                <CommentCard
                  comment={allComments.comment}
                  author={allComments.author.name}
                  createdAt={allComments.timePosted}
                />
                <Flex gap="lg" pl="xl">
                  <Divider orientation="vertical" />

                  <Stack spacing="lg">
                    {(allComments.reponse.length >= 1
                      ? allComments.reponse
                      : []
                    ).map((response) => {
                      const responseId = uuidv4();
                      return (
                        <CommentCard
                          key={responseId}
                          comment={response.comment}
                          author={response.author.name}
                          createdAt={response.timePosted}
                        />
                      );
                    })}
                  </Stack>
                </Flex>
              </Stack>
            </Stack>
            <Divider />
          </Stack>
        );
      })}
    </Stack>
  );
}
