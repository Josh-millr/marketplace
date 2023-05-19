import { Group } from '@mantine/core';

import { LoginForm } from '@/features/auth/Login';

export default function SignUp() {
  return (
    <>
      <Group mt={48}>
        <LoginForm />
      </Group>
    </>
  );
}

export async function getStaticProps() {
  return { props: {} };
}
