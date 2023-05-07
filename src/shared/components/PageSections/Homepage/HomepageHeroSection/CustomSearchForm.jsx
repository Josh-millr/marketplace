import {
  Box,
  Flex,
  Stack,
  TextInput,
  Button,
  MediaQuery,
  useMantineTheme,
} from '@mantine/core';
import { Search } from 'iconoir-react';
import { useForm, isNotEmpty } from '@mantine/form';

import * as feedbackMessage from '@/shared/constants/feedbackMessage';

export function CustomSearchForm() {
  const { noSearchQuery } = feedbackMessage;

  const theme = useMantineTheme();
  const { colors } = theme;

  const form = useForm({
    initialValues: { query: '' },
    validate: { query: isNotEmpty(noSearchQuery.resolution) },
  });

  // Submit the search query
  const submitForm = form.onSubmit(async () => {
    // value
    if (form.isValid() === false) return null;
    // console.log('Searcing for', value.query);
  });

  return (
    <form onSubmit={submitForm}>
      <Stack spacing="sm">
        <Box
          component="div"
          sx={{
            backgroundColor: `${colors.neutral[1]}`,
            border: `2px solid ${colors.brandPrimary[7]}`,
            borderRadius: '4px',
            padding: '2px',
            paddingRight: '8px',
          }}
        >
          <Flex justify="space-between" align="center" gap="sm" color='neutral.1'>
            <TextInput
              variant="unstyled"
              placeholder="What are you looking for?"
              {...form.getInputProps('query')}
              icon={
                <Search
                  width={20}
                  height={20}
                  color={`${colors.brandPrimary[7]}`}
                />
              }
            />
            {/* Search button for desktop view only */}
            <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
              <Button size="sm" variant="filled">
                Search
              </Button>
            </MediaQuery>
          </Flex>
        </Box>

        {/* Search button for mobile view only */}
        <MediaQuery largerThan="md" styles={{ display: 'none' }}>
          <Button
            fullWidth
            size="md"
            variant="filled"
          >
            Search
          </Button>
        </MediaQuery>
      </Stack>
    </form>
  );
}
