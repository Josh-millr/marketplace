import { useForm, isNotEmpty } from "@mantine/form";
import {
  Grid,
  Flex,
  Stack,
  Select,
  Divider,
  Textarea,
  TextInput,
  MultiSelect,
} from "@mantine/core";

import { FormSectionHeader } from "./Elements/FormSectionHeader";

// TODO: use the properties and structure is created in the freelancer_reg.json

export function ProfessionalInformationForm() {
  const form = useForm({
    initialValues: {
      title: "",
      description: "",
      occupation: "",
      portfolio: "",
      skills: [],
    },

    validate: {
      title: isNotEmpty("Title cannot be empty"),
      description: isNotEmpty("Description cannot be empty"),
      occupation: isNotEmpty("Ocupation cannot be empty"),
      portfolio: isNotEmpty("Portfolio cannot be empty"),
      skills: isNotEmpty("Skills cannot be empty"),
    },
  });

  const submitForm = form.onSubmit(async (values) => {
    const isFormValid = form.isValid();
    if (isFormValid !== true) return null;

    storeData(values);
    goNextStep();
  });

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
            <Flex
              w="100%"
              gap={{ base: "2xl", sm: "lg" }}
              direction={{ base: "column", sm: "row" }}
            >
              {/* Occupational Field */}
              <Select
                w="100%"
                label="Occupational Field"
                placeholder="Occupational Field"
                data={["Frontend", "Backend", "Cloud", "Devops", "Other"]}
                {...form.getInputProps("occupation")}
              />

              {/* Occupational Title */}
              <Select
                w="100%"
                label="Occupational Title"
                placeholder="Professional Title"
                data={["Developer", "Engineer"]}
                {...form.getInputProps("title")}
              />
            </Flex>

            <Divider />

            <MultiSelect
              w="100%"
              withAsterisk
              searchable
              multiple
              label="Skills"
              description="List the skills related to the services you're offering and add your experience level."
              placeholder="Select skills"
              // TODO: Fetch language list from language API
              data={[
                { value: "javascript", label: "JavaScript" },
                { value: "typescript", label: "TypeScript" },
                { value: "python", label: "Python" },
                { value: "react.js", label: "ReactJs" },
                { value: "next.js", label: "NextJs" },
                { value: "NodeJs", label: "NodeJs" },
              ]}
              {...form.getInputProps("skills")}
            />

            <Divider />

            {/* Professional Description */}
            <Textarea
              w="100%"
              min={4}
              max={6}
              title="Description"
              placeholder="Start typing ...."
              label="Professional Description"
              description="A professional description is a detailed written statement that summarizes your skills, experience, and qualifications, it should be clear, concise, and persuasive."
              {...form.getInputProps("description")}
            />

            <Divider />

            {/* Your Personal website / Portfolio */}
            <TextInput
              w="100%"
              label="Your Personal website / Portfolio"
              description="Include a link to your personal website or portfolio with your work samples."
              {...form.getInputProps("portfolio")}
            />

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
