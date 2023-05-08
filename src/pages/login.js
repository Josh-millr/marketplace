import { Group } from '@mantine/core';

import { AuthLayout } from '@/shared/components/Layout';
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

SignUp.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};

export async function getStaticProps() {
  return { props: {} };
}