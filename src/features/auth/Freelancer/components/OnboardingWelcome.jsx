/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Title, Text, Button, SimpleGrid } from '@mantine/core';
import { useRouter } from 'next/router'; // Import the useRouter hook

import { ProcessCard } from '@/shared/components/ProcessCard/ProcessCard';
import { useStyles } from '@/shared/components/ProcessCard/style.Card';

export function OnboardingWelcome() {
  const { classes } = useStyles();
  const router = useRouter(); // Initialize the router

  const handleButtonClick = () => {
    router.push('/onboarding_register');
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
          Ready to start selling on Hamzry? Here’s the breakdown
        </Title>

        <Text c="dimmed" className={classes.description} ta="center" mt="md">
          3 EASY STEPS TO SUCCESS
        </Text>

        <SimpleGrid
          cols={1}
          spacing="xl"
          mt={50}
          style={{ justifyItems: 'center' }}
          breakpoints={[
            { minWidth: 'md', cols: 2 },
            { minWidth: 'lg', cols: 3 },
          ]}
        >
          <ProcessCard />
        </SimpleGrid>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '4rem',
          }}
        >
          <Button onClick={handleButtonClick}>Get Started</Button>
        </div>
      </div>
    </Container>
  );
}
