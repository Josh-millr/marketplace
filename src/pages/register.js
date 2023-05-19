import { Group } from '@mantine/core';

import { RegisterForm } from '@/features/auth/Register';

export default function SignUp() {
  return (
    <>
      <Group mt={48}>
        <RegisterForm />
      </Group>
    </>
  );
}

export async function getStaticProps() {
  return { props: {} };
}
