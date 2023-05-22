/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Title, Text, Button } from '@mantine/core';
import { useRouter } from 'next/router';

import { useStyles } from '@/shared/components/ProcessCard/style.Card';

export function FreelancerLocationErrorPage() {
  const { classes } = useStyles();
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/');
  };

  return (
    <Container
      size="lg"
      py="xl"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <div>
        <Title order={2} className={classes.title} ta="center" mt="sm">
          We are currently only rolling out to a few countries
        </Title>

        <Text c="dimmed" className={classes.description} ta="center" mt="md">
          Sorry you’re not yet eligible to become a freelancer on hamzry. For
          now we only support a few countries. we’re gradually adding more
          support for more countries and we’ll let you know when w have support
          for your country. Thank you
        </Text>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '4rem',
          }}
        >
          <Button onClick={handleButtonClick}>Go back home</Button>
        </div>
      </div>
    </Container>
  );
}
