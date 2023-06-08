import { useState, useEffect, useContext } from "react";
import { Button, Grid, Flex, Stack, Paper } from "@mantine/core";

import { CredentialCard } from "@/shared/components/CredentialCard";
import { FormDataContext } from "@/shared/providers/FormDataProvider";

import { FormSectionHeader } from "./Elements/FormSectionHeader";
import { CredentialForm } from "./Elements/CredentialForm";

export function ExperienceInformationForm({ goNextStep, goPrevStep }) {
  const [credentials, setCredentials] = useState([]);
  const [showCredentialForm, setShowCredentialForm] = useState(false);

  const { storeData } = useContext(FormDataContext);

  const addCredential = (values) => {
    setCredentials((prev) => [...prev, values]);
  };

  const deleteCredential = (id) => {
    const filtered = credentials.filter(
      (credential) => credential.credentialId !== id
    );

    setCredentials(filtered);
  };

  useEffect(() => {
    storeData({ certificate: credentials });
  }, [credentials]);

  return (
    <Grid gutterMd="xl" pt="2xl">
      {/* Column 1 */}
      <Grid.Col span={12} md={5} orderMd={2}>
        <FormSectionHeader
          title="Experience Information"
          description="Showcase your qualifications and proof of expertise. This
           will improve your chances of getting more jobs and overall increases
            your chances of success on Hamzry"
        />
      </Grid.Col>

      {/* Column 2 */}
      <Grid.Col span={12} md={7} orderMd={1} pr={{ base: 0, lg: "5xl" }}>
        <Stack spacing="2xl" w="100%">
          <Paper p="md" withBorder>
            <Stack spacing="md">
              {credentials.length > 0 &&
                credentials.map((credential) => (
                  <CredentialCard
                    key={credential.credentialId}
                    title={credential.title}
                    issuer={credential.issuer}
                    issueDate={credential.issueDate}
                    credentialId={credential.credentialId}
                    credentialUrl={credential.credentialUrl}
                    deleteCredential={deleteCredential}
                  />
                ))}
            </Stack>
          </Paper>

          {showCredentialForm ? (
            <CredentialForm
              getCredential={addCredential}
              close={() => setShowCredentialForm(false)}
            />
          ) : (
            <Button onClick={() => setShowCredentialForm(true)}>
              Add credential
            </Button>
          )}

          <Flex gap="sm" direction={{ base: "column", sm: "row" }} w="100%">
            <Button variant="outline" color="gray" onClick={goPrevStep}>
              Go Back
            </Button>
            <Button onClick={goNextStep}>Continue</Button>
          </Flex>
        </Stack>
      </Grid.Col>
    </Grid>
  );
}
