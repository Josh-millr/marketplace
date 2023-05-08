import { Group } from '@mantine/core';

import { AuthLayout } from '@/shared/components/Layout';
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

SignUp.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};

export async function getStaticProps() {
  return { props: {} };
}