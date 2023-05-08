import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { useForm, isNotEmpty } from '@mantine/form';
import {
  Grid,
  Text,
  Space,
  Title,
  Group,
  Button,
  Container,
  TextInput,
  PasswordInput,
} from '@mantine/core';

import { useAuth } from '@/shared/hooks/useAuth';
import {
  passwordEmpty,
  emailFailedLogin,
  passwordFailedLogin,
} from '@/shared/constants/feedbackMessage';
import { ROLES } from '@/shared/constants/roles';

import { ValidateForm } from '../../utils/ValidateForm';

export function LoginForm() {
  const { loading } = useSelector((state) => state.general);
  const { login } = useAuth();

  const router = useRouter();

  const validateForm = new ValidateForm();

  const form = useForm({
    initialValues: { email: '', password: '' },
    validate: {
      email: (value) => validateForm.email(value),
      password: isNotEmpty(passwordEmpty.resolution),
    },
    validateInputOnBlur: true,
  });

  const submitForm = form.onSubmit(async (value) => {
    const isFormValid = form.isValid();
    if (isFormValid !== true) return null;

    try {
      const response = await login(value);
      const { role } = response.result;

      if (role === ROLES.BUYER) {
        router.push('/');
        // console.log('Routing `/buyer` marketplace...');
      }
      if (role === ROLES.SELLER) {
        router.push('/');
        // console.log('Routing to the `/seller` marketplace...');
      }
    } catch (error) {
      if (error.success === false) {
        form.setErrors({
          email: emailFailedLogin.statement,
          password: passwordFailedLogin.statement,
        });
      }
    }
  });

  return (
    <Container fluid>
      <Group position="center">
        <Container size={440}>
          <Title className="h1" align="center">
            Login to you account
          </Title>
          <Text className="subtitle-sm" align="center">
            Welcome back! Please fill in your account details
          </Text>
        </Container>
      </Group>

      <Space h="5xl" />

      <Container size={400}>
        <form onSubmit={submitForm}>
          <Grid>
            <Grid.Col span={12}>
              <TextInput
                required
                radius="md"
                size="md"
                withAsterisk
                label="Email Address"
                disabled={loading}
                {...form.getInputProps('email')}
              />
            </Grid.Col>

            <Grid.Col span={12}>
              <PasswordInput
                required
                radius="md"
                size="md"
                withAsterisk
                label="Password"
                disabled={loading}
                {...form.getInputProps('password')}
              />
            </Grid.Col>

            <Grid.Col span={12}>
              <Button
                fullWidth
                size="md"
                radius="md"
                type="submit"
                loading={loading}
                loaderPosition="center"
              >
                Login
              </Button>
            </Grid.Col>
          </Grid>
        </form>
      </Container>
    </Container>
  );
}
