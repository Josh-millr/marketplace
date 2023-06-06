import { DateInput } from "@mantine/dates";
import { Button, Grid } from "@mantine/core";

import { FormSectionHeader } from "./Elements/FormSectionHeader";

import { CredentialForm } from "./Elements/CredentialForm";

export function ExperienceInformationForm({ goNextStep }) {
  // TODO: Add handlers for adding and deleting credentials

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
          <CredentialForm />

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
