import { useState } from "react";
import { Button, Grid, Flex, Stack, Paper } from "@mantine/core";

import { CredentialCard } from "@/shared/components/CredentialCard";

import { FormSectionHeader } from "./Elements/FormSectionHeader";
import { CredentialForm } from "./Elements/CredentialForm";

export function ExperienceInformationForm({ goNextStep }) {
  const [credentials, setCredentials] = useState([]);

  const addCredential = (values) => {
    const newValues = [...credentials, values];
    setCredentials(newValues);
  };

  const deleteCredential = (id) => {
    const filtered = credentials.filter(
      (credential) => credential.credentialId !== id
    );

    setCredentials(filtered);
  };

  return (
    <Grid gutterMd="xl" pt="2xl">
      {/* Column 1 */}
      <Grid.Col span={12} md={5} orderMd={2}>
        <FormSectionHeader
          title="Experience Information"
          description="Showcase your qualifications and proof of expertise. This will improve your chances of getting more jobs and overall increases your chances of success on Hamzry"
        />
      </Grid.Col>

      {/* Column 2 */}
      <Grid.Col span={12} md={7} orderMd={1} pr={{ base: 0, lg: "5xl" }}>
        <Stack spacing="2xl" w="100%">
          <Paper p="md">
            <Stack spacing="md">
              {credentials.length > 0 && (
                <CredentialCard deleteCredential={deleteCredential} />
              )}
            </Stack>
          </Paper>

          <CredentialForm getCredential={addCredential} />

          <Flex gap="sm" direction={{ base: "column", sm: "row" }} w="100%">
            <Button variant="subtle" variant="outline" color="gray">
              Go Back
            </Button>
            <Button type="submit">Continue</Button>
          </Flex>
        </Stack>
      </Grid.Col>
    </Grid>
  );
}
