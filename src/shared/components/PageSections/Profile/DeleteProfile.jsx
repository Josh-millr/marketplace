import { useState } from 'react';
import {
  Text,
  Stack,
  PasswordInput,
  visible,
  toggle,
  Button,
} from '@mantine/core';

import { IconTrash } from '@tabler/icons-react';

export function DeleteProfile() {
  const [password, setPassword] = useState('');
  return (
    <div>
      <Text
        variant="h2"
        size="md"
        style={{
          textAlign: 'left',
          marginBottom: '0.5rem',
          marginTop: '1em',
          fontWeight: 'bold',
        }}
      >
        Close Account
      </Text>
      <Text
        variant="h2"
        size="md"
        style={{ textAlign: 'left', marginBottom: '0.5rem' }}
      >
        Warning: If you close your account, you will loss access forever.
      </Text>

      <Stack maw={380}>
        <PasswordInput
          label="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          visible={visible}
          onVisibilityChange={toggle}
        />
        <Button
          type="submit"
          variant="outline"
          color="red"
          rightIcon={<IconTrash size="1rem" />}
          style={{ width: '30%' }}
        >
          Delete
        </Button>
      </Stack>
    </div>
  );
}
