import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Grid,
  Text,
  Space,
  Group,
  Title,
  Button,
  TextInput,
  Container,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import toLower from 'lodash/toLower';

import { emailTaken } from '@/shared/constants/feedbackMessage';
import { generalActions } from '@/state/general/generalReducer';
import { FormDataContext } from '@/shared/providers/FormDataProvider';
import { notificationFactory } from '@/shared/utils/notificationFactory';
import { checkEmailExistence } from '@/shared/services/checkEmailExistence';

import { ValidateForm } from '../../utils/ValidateForm';

export function EmailForm({ stepControl }) {
  const dispatch = useDispatch();

  const { storeData } = useContext(FormDataContext);
  const { loading } = useSelector((state) => state.general);

  const validateForm = new ValidateForm();

  const form = useForm({
    validateInputOnBlur: true,
    initialValues: { email: '' },
    validate: {
      email: (value) => validateForm.email(value),
    },
    transformValues: (values) => ({
      email: toLower(values.email),
    })
  });

  const submitForm = form.onSubmit(async (values) => {
    const isFormValid = form.isValid();
    if (isFormValid !== true) return null;

    try {
      dispatch(generalActions.startLoading());

      const status = await checkEmailExistence(values);

      if (status === false) {
        storeData(values);
        stepControl.goNext();
      }

      if (status === true) {
        form.setErrors({ email: emailTaken.resolution });
      }
    } catch (error) {
      notificationFactory(error);
    } finally {
      dispatch(generalActions.stopLoading());
    }

    return null;
  });

  return (
    <Container fluid>
      <Group position="center">
        <Container size={440}>
          <Title className="h1" align="center">
            Create an Account on Hamzry
          </Title>
          <Text className="subtitle-sm" align="center">
            Join 50k people making money and completing GIGs on Hamzry for free.
            Get Started Now
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
                label="Email Address"
                disabled={loading}
                description="eg. micheal@email.com"
                {...form.getInputProps('email')}
              />
            </Grid.Col>

            <Grid.Col span={12}>
              <Button
                fullWidth
                size="lg"
                type="submit"
                variant="filled"
                loading={loading}
                loaderPosition="center"
              >
                Continue
              </Button>
            </Grid.Col>
          </Grid>
        </form>
      </Container>
    </Container>
  );
}
