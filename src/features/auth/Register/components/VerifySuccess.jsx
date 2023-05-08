import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';

import {
  Container,
  Button,
  Space,
  Text,
  Title,
  Group,
  Center,
  Badge,
} from '@mantine/core';

export function VerifySuccess() {
  const [timer, setTimer] = useState(10);

  const router = useRouter();

  const proceed = useCallback(() => {
    router.push('/login');
  }, [router]);

  useEffect(() => {
    if (timer !== 0) setTimeout(() => setTimer(timer - 1), 1000);
    if (timer === 0) proceed();
  }, [proceed, timer]);

  return (
    <Container fluid>
      <Group position="center">
        <Container size={440}>
          <Title className="h1" align="center">
            Verification Successful!
          </Title>
          <Text className="subtitle-md" align="center">
            Your account have been sucessfully verified.
            <br /> Click to continue
          </Text>
          <Space h="lg" />
          <Group position="center">
            <Badge color="neutral.4" size="sm">
              Redirects in {timer}s
            </Badge>
          </Group>
        </Container>
      </Group>

      <Space h="5xl" />

      <Center>
        <Button
          size="md"
          radius="md"
          type="submit"
          variant="filled"
          loaderPosition="center"
          onClick={proceed}
        >
          Continue
        </Button>
      </Center>
    </Container>
  );
}
