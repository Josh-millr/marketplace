import { TextInput, Textarea, Paper, Stack, Button, Flex } from '@mantine/core';
import { useForm } from '@mantine/form';

export function NewFaqInputForm({ storeInput, close }) {
  const form = useForm({
    initialValues: {
      title: '',
      description: '',
    },
  });

  const submitForm = form.onSubmit((values) => {
    storeInput(values);
  });

  return (
    <Paper p="lg" w="100%" bg="neutral.3">
      <form onSubmit={submitForm} style={{ width: '100%' }}>
        <Stack spacing="xl">
          <TextInput w="100%" label="Title" {...form.getInputProps('title')} />
          <Textarea
            w="100%"
            label="Optional Description"
            autosize
            minRows={2}
            maxRows={4}
            {...form.getInputProps('description')}
          />
          <Flex gap="lg" direction={{ base: 'column', sm: 'row' }}>
            <Button variant="outline" onClick={() => close()}>
              Cancel
            </Button>
            <Button variant="light" type="submit">
              Add
            </Button>
          </Flex>
        </Stack>
      </form>
    </Paper>
  );
}
