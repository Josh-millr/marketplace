import { useForm, isNotEmpty } from "@mantine/form";
import {
  Grid,
  Flex,
  Stack,
  Select,
  Button,
  Divider,
  Textarea,
  TextInput,
  MultiSelect,
} from "@mantine/core";

import { FormSectionHeader } from "./Elements/FormSectionHeader";

const SKILL_SET = [
  { value: "javascript", label: "JavaScript" },
  { value: "typescript", label: "TypeScript" },
  { value: "python", label: "Python" },
  { value: "react.js", label: "ReactJs" },
  { value: "next.js", label: "NextJs" },
  { value: "NodeJs", label: "NodeJs" },
];

const OCCUPATION_SET = ["Frontend", "Backend", "Cloud", "Devops", "Other"];

const PROFESSIONAL_TITLE_SET = ["Developer", "Engineer"];

export function ProfessionalInformationForm() {
  const form = useForm({
    initialValues: {
      occupation: "",
      professionalTitle: "",
      description: "",
      skills: [],
      contact: {
        portfolio: "",
      },
    },

    validate: {
      professionalTitle: isNotEmpty("Title cannot be empty"),
      description: isNotEmpty("Description cannot be empty"),
      occupation: isNotEmpty("Ocupation cannot be empty"),
      contact: {
        portfolio: isNotEmpty("Portfolio cannot be empty"),
      },
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
                required
                withAsterisk
                label="Occupational Field"
                placeholder="Occupational Field"
                // TODO: Fetch from the category api
                data={OCCUPATION_SET}
                {...form.getInputProps("occupation")}
              />

              {/* Occupational Title */}
              <Select
                w="100%"
                required
                withAsterisk
                label="Occupational Title"
                placeholder="Professional Title"
                data={PROFESSIONAL_TITLE_SET}
                {...form.getInputProps("professionalTitle")}
              />
            </Flex>

            <Divider />

            <MultiSelect
              w="100%"
              multiple
              required
              searchable
              withAsterisk
              label="Skills"
              description="List the skills related to the services you're offering and add your experience level."
              placeholder="Select skills"
              // TODO: Fetch language list from language API
              data={SKILL_SET}
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
              {...form.getInputProps("contact.portfolio")}
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
