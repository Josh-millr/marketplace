import { DateInput } from "@mantine/dates";
import { Divider, Text, Button, ActionIcon, SimpleGrid } from "@mantine/core";
import { IconCalendar, IconX } from "@tabler/icons-react";

import { iconCreator } from "@/shared/utils/iconCreator";
import { FormSectionHeader } from "./Elements/FormSectionHeader";

import { CredentialForm } from "./Elements/CredentialForm";

export function ExperienceInformationForm({ goNextStep }) {
  // TODO: Add handlers for adding and deleting credentials

  return (
    <Grid gutterMd="xl" pt="2xl">
      {/* Column 1 */}
      <Grid.Col span={12} md={5} orderMd={2}>
        <FormSectionHeader
          title="Professional Information"
          description="This is your time to shine. Let potential buyers know what you do best
          and how you gained your skills, certifications and experience."
        />
      </Grid.Col>

      {/* Column 2 */}
      <Grid.Col span={12} md={7} orderMd={1} pr={{ base: 0, lg: "5xl" }}>
        <form onSubmit={submitForm}>
          <Stack spacing="2xl" w="100%">
            <CredentialForm />

            <Flex gap="sm" direction={{ base: "column", sm: "row" }} w="100%">
              <Button variant="subtle" variant="outline" color="gray">
                Go Back
              </Button>
              <Button type="submit">Continue</Button>
            </Flex>
          </Stack>
        </form>
      </Grid.Col>
    </Grid>
  );
}
