import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDisclosure } from '@mantine/hooks';
import { PasswordInput, Button, Stack } from '@mantine/core';
import { IconArrowUpRight } from '@tabler/icons-react';

export function PasswordChangeForm() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [visible, { toggle }] = useDisclosure(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      // Dispatch an action to update the password in Redux store
      dispatch(updatePassword(password));
      setPassword('');
      setConfirmPassword('');
    } else {
      // Handle password mismatch error
      console.log('Passwords do not match');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack maw={380}>
        <PasswordInput
          label="Old Password"
          value={user.password}
          visible={visible}
          onVisibilityChange={toggle}
          disabled
        />
        <PasswordInput
          label="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          visible={visible}
          onVisibilityChange={toggle}
        />
        <PasswordInput
          label="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          visible={visible}
          onVisibilityChange={toggle}
        />
        <Button
          type="submit"
          rightIcon={<IconArrowUpRight size="1rem" />}
          style={{ width: '30%' }}
        >
          Save
        </Button>
      </Stack>
    </form>
  );
}
