import { Text, Avatar, Group, Divider, Stack, Skeleton } from '@mantine/core';

import { useStyles } from './style.CommentCard';
import { CustomSuspense } from '../CustomSuspense';

export function CommentCard(props) {
  const { postedAt, description, creatorImg, creatorName } = props;

  const { classes } = useStyles();

  return (
    <Stack spacing="xl">
      <div>
        <Group>
          <CustomSuspense
            dependency={creatorImg}
            fallback={<Skeleton height={32} width={32} radius={9999} />}
          >
            <Avatar
              src={creatorImg || ''}
              alt={creatorName || ''}
              radius="xl"
              size="lg"
            />
          </CustomSuspense>

          <div>
            <CustomSuspense
              dependency={creatorName}
              fallback={<Skeleton height={12} width="30%" />}
            >
              <Text size="sm" fw={'700!important'}>
                {creatorName}
              </Text>
            </CustomSuspense>

            <CustomSuspense
              dependency={postedAt}
              fallback={<Skeleton height={12} width="30%" />}
            >
              <Text size="sm" color="dimmed">
                {postedAt}
              </Text>
            </CustomSuspense>
          </div>
        </Group>

        <CustomSuspense
          dependency={description}
          fallback={
            <Stack>
              <Skeleton height={12} width="90%" />
              <Skeleton height={12} width="90%" />
              <Skeleton height={12} width="40%" />
            </Stack>
          }
        >
          <Text className={classes.body} size="sm" maw={700}>
            {description}
          </Text>
        </CustomSuspense>
      </div>

      <Divider />
    </Stack>
  );
}
