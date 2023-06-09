import { useForm, isNotEmpty } from "@mantine/form";
import { DateInput } from "@mantine/dates";
import {
  TextInput,
  SimpleGrid,
  Paper,
  Button,
  Flex,
  Stack,
} from "@mantine/core";
import { CalendarPlus } from "iconoir-react";

import { iconCreator } from "@/shared/utils/iconCreator";

export function CredentialForm({ getCredential, close }) {
  const form = useForm({
    initialValues: {
      title: "",
      issuer: "",
      issueDate: "",
      credentialId: "",
      credentialUrl: "",
    },
    validate: {
      title: isNotEmpty("Title cannot be empty"),
      issuer: isNotEmpty("Issuer cannot be empty"),
      issueDate: isNotEmpty("Issue date cannot be empty"),
      credentialId: isNotEmpty("Credential ID cannot be empty"),
      credentialUrl: isNotEmpty("Credential URL cannot be empty"),
    },
  });

  const submitForm = form.onSubmit(async (values) => {
    const isFormValid = form.isValid();
    if (isFormValid !== true) return null;

    getCredential(values);

    form.reset();
  });

  return (
    <Paper p="lg" bg="neutral.3">
      <form onSubmit={submitForm}>
        <Stack spacing="xl">
          <SimpleGrid cols={1} spacing="xl" breakpoints={[{ cols: 2 }]}>
            {/* Title */}
            <TextInput
              withAsterisk
              w="100%"
              label="Certificate Title"
              placeholder="Certificate or Award"
              {...form.getInputProps("title")}
            />

            {/* Issuer */}
            <TextInput
              w="100%"
              withAsterisk
              label="Issuer"
              placeholder="(eg Adobe, google...)"
              {...form.getInputProps("issuer")}
            />

            {/* Issuer Date */}
            <DateInput
              w="100%"
              label="Issue Date"
              placeholder="(eg. May 25, 2023)"
              valueFormat="DD/MM/YYYY"
              rightSection={iconCreator({ icon: CalendarPlus })}
              {...form.getInputProps("issueDate")}
            />

            {/* CredentialId */}
            <TextInput
              w="100%"
              label="Credential ID"
              placeholder="(eg. 12631SSDJs3)"
              withAsterisk
              {...form.getInputProps("credentialId")}
            />

            {/* CredentialUrl */}
            <TextInput
              w="100%"
              label="Credential URL"
              withAsterisk
              {...form.getInputProps("credentialUrl")}
            />
          </SimpleGrid>

          <Flex
            gap="sm"
            w="100%"
            color="neutral"
            direction={{ base: "column", sm: "row" }}
          >
            <Button variant="outline" color="gray" onClick={close}>
              Cancel
            </Button>
            <Button type="submit">Add</Button>
          </Flex>
        </Stack>
      </form>
    </Paper>
  );
}
