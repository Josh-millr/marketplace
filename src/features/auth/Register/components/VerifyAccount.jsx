import { useSelector } from 'react-redux';
import { isNotEmpty, useForm } from '@mantine/form';
import {
  Grid,
  Text,
  Space,
  Title,
  Group,
  Button,
  TextInput,
  Container,
} from '@mantine/core';

import { useAuth } from '@/shared/hooks/useAuth';
import { notificationFactory } from '@/shared/utils/notificationFactory';
import { emailVerificationCodeIncorrect } from '@/shared/constants/feedbackMessage';

export function VerifyAccount({ stepControl }) {
  const { loading } = useSelector((state) => state.general);

  const { verifyEmailAddress } = useAuth();

  const form = useForm({
    initialValues: { tempt_code: '' },
    validate: { tempt_code: isNotEmpty('Cannot be empty') },
    validateInputOnBlur: true,
  });

  const submitForm = form.onSubmit(async (value) => {
    const isFormValid = form.isValid();
    if (isFormValid !== true) return null;

    const errMessage = emailVerificationCodeIncorrect.resolution;

    try {
      const success = await verifyEmailAddress(value);

      if (success === true) {
        stepControl.goNext();
      } else if (success === false) {
        form.setFieldError('tempt_code', errMessage);
      }
    } catch (error) {
      notificationFactory(error);
    }
  });

  return (
    <Container fluid>
      <Group position="center">
        <Container size={440}>
          <Title className="h1" align="center">
            Verification code sent
          </Title>
          <Text className="subtitle-sm" align="center">
            A verification code has been sent to your email to verify your
            account
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
                withAsterisk
                label="Verification Code"
                disabled={loading}
                {...form.getInputProps('tempt_code')}
              />
            </Grid.Col>

            <Grid.Col span={12}>
              <Button
                fullWidth
                size="md"
                radius="md"
                type="submit"
                variant="filled"
                loading={loading}
                loaderPosition="center"
              >
                Verify
              </Button>
            </Grid.Col>
          </Grid>
        </form>
      </Container>
    </Container>
  );
}
