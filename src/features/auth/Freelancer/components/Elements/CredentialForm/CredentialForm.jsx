import { useForm, isNotEmpty } from "@mantine/form";
import { TextInput, DateInput, SimpleGrid, Paper } from "@mantine/core";
import { CalendarPlus } from "iconoir-react";

import { iconCreator } from "@/shared/utils/iconCreator";

export function CredentialForm({ getCredential }) {
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
  });

  return (
    <Paper p="xl" bg='neutral.4'>
      <form onSubmit={submitForm}>
        <SimpleGrid cols={1} spacing="xl" breakpoints={[{ cols: 2 }]}>
          {/* Title */}
          <TextInput
            required
            withAsterisk
            w="100%"
            label="Certificate Title"
            placeholder="Certificate or Award"
            {...form.getInputProps("title")}
          />

          {/* Issuer */}
          <TextInput
            w="100%"
            required
            withAsterisk
            label="Issuer"
            placeholder="(eg Adobe, google...)"
            {...form.getInputProps("issuer")}
          />

          {/* Issuer Date */}
          <DateInput
            w="100%"
            required
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
            required
            withAsterisk
            {...form.getInputProps("credentialId")}
          />

          {/* CredentialUrl */}
          <TextInput
            w="100%"
            label="Credential URL"
            required
            withAsterisk
            {...form.getInputProps("credentialUrl")}
          />
        </SimpleGrid>
      </form>
    </Paper>
  );
}
