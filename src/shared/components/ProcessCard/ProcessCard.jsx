import { Text, Card } from '@mantine/core';
import { IconBook, IconUser, IconSend } from '@tabler/icons-react';

import { useStyles } from './style.Card';

const mockdata = [
  {
    title: 'Learn what makes a successful profile',
    description:
      'Discover the do’s and don’ts to ensure you’re always on the right track.',
    icon: IconBook,
  },
  {
    title: 'Create your seller profile',
    description:
      'Add your profile picture, description, and professional information.',
    icon: IconUser,
  },
  {
    title: 'Publish your Gig',
    description:
      'Discover the do’s and don’ts to ensure you’re always on the right track.',
    icon: IconSend,
  },
];

export function ProcessCard() {
  const { classes } = useStyles(); // theme

  const processes = mockdata.map((process) => (
    <Card
      key={process.title}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
    >
      <div className={classes.iconContainer}>
        <process.icon
          size={36}
          color="#24AC56"
          stroke={1}
          strokeLinejoin="miter"
        />
      </div>
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {process.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm" className={classes.cardDescription}>
        {process.description}
      </Text>
    </Card>
  ));

  return processes;
}
