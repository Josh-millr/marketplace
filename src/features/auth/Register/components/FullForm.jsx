/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useForm, isNotEmpty } from '@mantine/form';
import { DoubleCheck, InfoEmpty } from 'iconoir-react';
import { useDebouncedState } from '@mantine/hooks';
import {
  Grid,
  Text,
  Title,
  Group,
  Space,
  Loader,
  Button,
  Select,
  TextInput,
  Container,
  PasswordInput,
  useMantineTheme,
} from '@mantine/core';

import { useAuth } from '@/shared/hooks/useAuth';
import { iconCreator } from '@/shared/utils/iconCreator';
import { countryList } from '@/shared/constants/countryList';
import {
  userNameTaken,
  genderEmpty,
  countryEmpty,
  lastNameEmpty,
  firstNameEmpty,
  accountTypeEmpty,
  passwordFormatIncorrect,
  userNameFormatIncorrect,
} from '@/shared/constants/feedbackMessage';
import { FormDataContext } from '@/shared/providers/FormDataProvider';
import { notificationFactory } from '@/shared/utils/notificationFactory';
import { checkUsernameExistence } from '@/shared/services/checkUsernameExistence';
import CountryListItem from '@/shared/components/CountryListItem/CountryListItem';

import { ValidateForm } from '../../utils/ValidateForm';

/**
 * TODO:
 * - Fetch the `countryList` from the API route
 * - Lazy Load the `CountryListItem` component
 */

export function FullForm({ stepControl }) {
  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [checkingUsername, setCheckingUsername] = useState(false);
  const [debouncedValue, setDebouncedValue] = useDebouncedState('', 200);

  const { register } = useAuth();

  const { colors } = useMantineTheme();
  const { getData } = useContext(FormDataContext);
  const { loading } = useSelector((state) => state.general);

  const validateForm = new ValidateForm();

  const form = useForm({
    initialValues: {
      gender: '',
      location: '',
      password: '',
      username: '',
      lastname: '',
      firstname: '',
      accounttype: '',
    },
    validate: {
      gender: isNotEmpty(genderEmpty.resolution),
      location: isNotEmpty(countryEmpty.resolution),
      lastname: isNotEmpty(lastNameEmpty.resolution),
      firstname: isNotEmpty(firstNameEmpty.resolution),
      accounttype: isNotEmpty(accountTypeEmpty.resolution),
      username(value) {
        const validationMessage = validateForm.username(value);
        if (validationMessage !== null) return validationMessage;
      },
      password(value) {
        return validateForm.password(value);
      },
    },
    validateInputOnBlur: true,
  });

  useEffect(() => {
    setDebouncedValue(form.values.username);
  }, [form.values.username]);

  useEffect(() => {
    setIsUsernameValid(false);

    const checkUsernameAvailability = async (value) => {
      try {
        setCheckingUsername(true);

        const isUsernameExist = await checkUsernameExistence(value);

        if (isUsernameExist === false) {
          setIsUsernameValid(true);
        } else if (isUsernameExist) {
          form.setFieldError('username', userNameTaken.statement);
        }
      } catch (error) {
        notificationFactory(error);
      } finally {
        setCheckingUsername(false);
      }
    };

    if (form.isValid('username')) {
      checkUsernameAvailability(debouncedValue);
    }

    return () => {
      if (checkingUsername) setCheckingUsername(false);
    };
  }, [debouncedValue]);

  let usernameRightIcon = null;

  if (checkingUsername && isUsernameValid === false) {
    usernameRightIcon = <Loader size="xs" />;
  }
  if (isUsernameValid && checkingUsername === false) {
    usernameRightIcon = iconCreator({
      sizeOveride: 16,
      icon: DoubleCheck,
      colorOveride: colors.brandPrimary[6],
    });
  }
  console.log('Checking username:', checkingUsername);
  console.log('isUsernameValid:', isUsernameValid);
  if (checkingUsername === false && isUsernameValid === false) {
    usernameRightIcon = iconCreator({
      sizeOveride: 16,
      icon: InfoEmpty,
      colorOveride: colors.neutral[5],
    });
  }

  const submitForm = form.onSubmit(async (values) => {
    const isFormValid = form.isValid();
    if (isFormValid !== true) return null;

    const email = getData(['email']);
    const registrationInfo = { ...email, ...values };

    const status = await register(registrationInfo);
    if (status) stepControl.goNext();
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

      <Container size={560}>
        <form onSubmit={submitForm}>
          <Grid>
            <Grid.Col sm={12} md={6}>
              {/* firstname */}
              <TextInput
                required
                radius="md"
                withAsterisk
                label="First name"
                disabled={loading}
                {...form.getInputProps('firstname')}
              />
            </Grid.Col>

            <Grid.Col sm={12} md={6}>
              {/* lastname */}
              <TextInput
                required
                radius="md"
                withAsterisk
                label="Last name"
                disabled={loading}
                {...form.getInputProps('lastname')}
              />
            </Grid.Col>

            <Grid.Col sm={12} md={3}>
              {/* gender */}
              <Select
                withAsterisk
                label="Gender"
                placeholder="choose gender"
                data={[
                  { value: 'male', label: 'Male' },
                  { value: 'female', label: 'Female' },
                ]}
                {...form.getInputProps('gender')}
              />
            </Grid.Col>

            <Grid.Col sm={12} md={3}>
              {/* account type */}
              <Select
                withAsterisk
                label="Account Type"
                placeholder="Choose account type"
                data={[
                  { value: 'individual', label: 'Individual' },
                  { value: 'business', label: 'Business' },
                ]}
                {...form.getInputProps('accounttype')}
              />
            </Grid.Col>

            <Grid.Col sm={12} md={6}>
              {/* location */}
              <Select
                label="Country"
                placeholder="Choose country"
                searchable
                clearable
                nothingFound="Country not found"
                maxDropdownHeight={280}
                itemComponent={CountryListItem}
                data={countryList}
                {...form.getInputProps('location')}
                filter={(value, item) =>
                  item.label.toLowerCase().includes(value.toLowerCase().trim())
                }
              />
            </Grid.Col>

            <Grid.Col sm={12} md={6}>
              {/* username */}
              <TextInput
                required
                radius="md"
                withAsterisk
                label="Username"
                description={userNameFormatIncorrect.resolution}
                disabled={loading}
                rightSection={usernameRightIcon}
                {...form.getInputProps('username')}
              />
            </Grid.Col>

            <Grid.Col sm={12} md={6}>
              {/* password */}
              <PasswordInput
                placeholder="Password"
                label="Password"
                description={passwordFormatIncorrect.resolution}
                radius="md"
                disabled={loading}
                withAsterisk
                {...form.getInputProps('password')}
              />
            </Grid.Col>

            <Grid.Col span={12}>
              <Button
                fullWidth
                size="md"
                type="submit"
                loading={loading}
                loaderPosition="center"
              >
                Sign up
              </Button>
            </Grid.Col>
          </Grid>
        </form>
      </Container>
    </Container>
  );
}
